import { APIGeneration } from '../models/constants/GameVersion.js';
import Encounter from '../models/encounters/Encounter.js';
import EncounterPokemon from '../models/encounters/EncounterPokemon.js';
import EncounterResult from '../models/encounters/EncounterResult.js';
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

   async buildLocations() {
      // TODO try and add a manager/worker pattern to this... also. sort before you send
      try {
         console.log('getting api locations...');
         await this.getAPILocations();
         console.log('assembling location data...');
         await this.assembleLocations();
         console.log('filling pokedex...');
         await this.fillPokedex();
         console.log('appling pokedex...');
         this.applyPokedex();
         console.log('done!');
         return;
      } catch (err) {
         console.log(err.message, err.stack);
      }
   }

   async assembleLocations() {
      for (let url of this.apiLocations) {
         const location = await pokeapi.get(url);
         let english = location.names.find(n => n.language.name === 'en');
         if (location.areas.length > 0) {
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
               console.log(location.name);
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
         const encounterPokemon = EncounterPokemon.builder()
            .withIconUrl(pokemon.sprites.versions[APIGeneration.GEN7].icons.front_default)
            .withSpriteUrl(pokemon.sprites.front_default)
            .withSpecies(english ? english.name : pokemon.species.name)
            .build();
         console.log(key);
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
