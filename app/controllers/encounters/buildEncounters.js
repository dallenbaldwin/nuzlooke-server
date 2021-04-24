import Encounter from '../../models/encounters/Encounter.js';
import EncounterResult from '../../models/encounters/EncounterResult.js';
import EncounterResultConst from '../../constants/EncounterResultConst.js';
import * as pokeapi from '../pokeapi.js';
import * as util from '../../util/UtilMethods.js';

setTimeout(() => {
   process.send('ready');
}, 1000);

const fallback = setTimeout(() => {
   process.send({ error: `timed out` });
   process.kill(process.pid);
}, 30 * 1000);

process.on('message', async payload => {
   const results = await assembleLocations(payload);
   process.send(results);
   process.kill(process.pid);
});

const assembleLocations = async payload => {
   const locations = [];
   for (let url of payload.urls) {
      const location = await assembleLocation(url, payload.gameVersion);
      locations.push(location);
   }
   return locations;
};

const assembleLocation = async (url, gameVersion) => {
   try {
      const apiLocation = await pokeapi.get(url);
      if (apiLocation.areas.length > 0) {
         let english = util.getEnglish(apiLocation.names);
         const result = EncounterResult.builder()
            .withConstant(EncounterResultConst.AVAILABLE)
            .build();
         const location = Encounter.builder()
            .withResult(result)
            .withLabel(english ? english.name : apiLocation.name)
            .withSortId(apiLocation.id)
            .build();
         let pokemons = new Map();
         for (let area of apiLocation.areas) {
            const locationArea = await pokeapi.get(area.url);
            // map pokemon_encounters to be more useful
            // remove pokemon not part of the version
            let areaPokemons = locationArea.pokemon_encounters
               .map(pe =>
                  Object({
                     species: pe.pokemon.name,
                     url: pe.pokemon.url,
                     versions: pe.version_details.map(vd => vd.version.name),
                  })
               )
               .filter(p => p.versions.includes(gameVersion));
            for (let pokemon of areaPokemons) {
               // should take care of dups. pokemon will have same url
               pokemons.set(pokemon.species, pokemon.url);
            }
         }
         if (pokemons.size > 0) {
            location.pokemons = [...pokemons.values()];
            let message = `Got ${location.label} with ${location.pokemons.length} pokemon and ${apiLocation.areas.length} areas...`;
            // console.log(message);
            return location;
         } else {
            return emptyArea(apiLocation);
         }
      } else {
         return emptyArea(apiLocation);
      }
   } catch (err) {
      throw err.stack;
   }
};

const emptyArea = location => {
   // console.log(`${location.name} didn't have any pokemon...`);
   return { label: null };
};
