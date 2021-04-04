import Generation from '../models/constants/pokeapi/Generation.js';
import Encounter from '../models/encounters/Encounter.js';
import EncounterResult from '../models/encounters/EncounterResult.js';
import Pokemon from '../models/pokemons/Pokemon.js';
import EncounterResultConst from '../models/constants/EncounterResultConst.js';
import * as pokeapi from '../controllers/pokeapi.js';
import * as util from '../util/UtilMethods.js';

export default class EncounterController {
   constructor(versionObject) {
      this.generation = versionObject.generation;
      this.version = versionObject.version;
      this.versionGroup = versionObject.version_group;
      this.regions = versionObject.regions;
      this.apiLocations = [];
      this.pokedex = new Map();
      this.assembledLocations = new Map();
   }

   get locations() {
      return [...this.assembledLocations.values()];
   }

   sortLocationsByLabel() {
      this.locations.sort((a, b) => {
         const labelA = a.label.toUpperCase();
         const labelB = b.label.toUpperCase();
         if (labelA > labelB) return 1;
         if (labelA < labelB) return -1;
         return 0;
      });
   }

   async buildLocations() {
      // TODO try and add a pm/dev pattern to this
      try {
         console.group('getting api locations...');
         await this.getAPILocations();
         console.groupEnd();
         console.group('assembling location data...');
         await this.assembleLocations();
         console.groupEnd();
         console.group('filling pokedex...');
         await this.fillPokedex();
         console.groupEnd();
         console.group('appling pokedex...');
         this.applyPokedex();
         console.groupEnd();
         console.log('done!');
         return;
      } catch (err) {
         console.log(err.message, err.stack);
      }
   }

   async assembleLocations() {
      for (let url of this.apiLocations) {
         const location = await pokeapi.get(url);
         console.log(location.name, `${location.areas.length} locations...`);
         if (location.areas.length > 0) {
            let english = location.names.find(n => n.language.name === 'en');
            const result = EncounterResult.builder()
               .withConstant(EncounterResultConst.AVAILABLE)
               .build();
            const encounter = Encounter.builder()
               .withResult(result)
               .withLabel(english ? english.name : location.name)
               .withSortId(location.id)
               .build();
            let pokemons = [];
            for (let area of location.areas) {
               const locationArea = await pokeapi.get(area.url);
               let areaPokemons = locationArea.pokemon_encounters
                  .map(pe =>
                     Object({
                        species: pe.pokemon.name,
                        url: pe.pokemon.url,
                        versions: pe.version_details.map(vd => vd.version.name),
                     })
                  )
                  .filter(p => p.versions.includes(this.version));
               pokemons.push(...areaPokemons);
            }
            pokemons = util.uniquify(pokemons);
            if (pokemons.length > 0) {
               pokemons.forEach(pokemon => {
                  this.pokedex.set(pokemon.species, pokemon.url);
               });
               encounter.pokemons = pokemons.map(p => p.species);
               this.assembledLocations.set(location.name, encounter);
            }
         }
      }
   }

   async getAPILocations() {
      for (let name of this.regions) {
         const region = await pokeapi.getRegion(name);
         this.apiLocations.push(...region.locations.map(l => l.url));
      }
   }

   async fillPokedex() {
      for (let [key, url] of this.pokedex) {
         const pokemon = await pokeapi.get(url);
         const species = await pokeapi.get(pokemon.species.url);
         let english = species.names.find(n => n.language.name === 'en');
         // FIXME check to see if the generation has an icon_url, fallback to latest generation
         const encounterPokemon = Pokemon.builder()
            .withTypes(pokemon.types.map(t => pokeapi.normalizeKabob(t.type.name)))
            .withIconUrl(pokemon.sprites.versions[Generation.GEN7].icons.front_default)
            .withSpriteUrl(pokemon.sprites.front_default)
            .withSpecies(english ? english.name : pokemon.species.name)
            .build();
         console.log(`set ${key}`);
         this.pokedex.set(key, encounterPokemon);
      }
   }

   applyPokedex() {
      for (let [key, encounter] of this.assembledLocations) {
         let toTransform = encounter.pokemons;
         encounter.pokemons = toTransform.map(p => this.pokedex.get(p));
         this.assembledLocations.set(key, encounter);
      }
   }
}

// import fs from 'fs';
// const ec = new EncounterController(GameVersion.EMERALD.api_data);
// ec.buildLocations().then(() => {
//    fs.writeFileSync(
//       `./testingoutput/results${new Date().toUTCString()}.json`,
//       JSON.stringify([...ec.assembledLocations.values()], undefined, 2)
//    );
// });
