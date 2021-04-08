import Generation from '../constants/pokeapi/Generation.js';
import Encounter from '../models/encounters/Encounter.js';
import EncounterResult from '../models/encounters/EncounterResult.js';
import Pokemon from '../models/pokemons/Pokemon.js';
import EncounterResultConst from '../constants/EncounterResultConst.js';
import * as pokeapi from '../controllers/pokeapi.js';
import * as util from '../util/UtilMethods.js';
import { cpus } from 'os';
import cluster from 'cluster';

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
      const locations = [...this.assembledLocations.values()];
      locations.sort((a, b) => {
         const labelA = a.label.toUpperCase();
         const labelB = b.label.toUpperCase();
         if (labelA > labelB) return 1;
         if (labelA < labelB) return -1;
         return 0;
      });
      return locations;
   }

   async buildLocations() {
      await this.getAPILocations();
      await this.assembleLocations();
      await this.fillPokedex();
      this.applyPokedex();
      console.log('done!');
   }

   async buildLocations2() {
      // TODO try and add a pm/dev pattern to this
      if (cluster.isMaster) {
         await this.getAPILocations();
         let numDone = 0;
         for (let cpu in cpus()) {
            const dev = cluster.fork();
            dev.on('message', payload => {
               console.log(`${payload.name}...`);
               this.assembledLocations.set(payload.name, payload.encounter);
            });
            dev.on('exit', () => {
               numDone++;
               if (numDone === cpus().length) {
                  this.fillPokedex().then(() => {
                     this.applyPokedex();
                     return;
                  });
               }
            });
         }
      } else if (cluster.isWorker) {
         const workerId = cluster.worker.id;
         for (let url of this.apiLocations) {
            let i = this.apiLocations.indexOf(url) + 1;
            if (i % workerId === 0) {
               const location = await this.assembleLocation(url);
               if (location) process.send(location);
            }
         }
         process.kill(process.pid);
      }
   }

   async assembleLocation(url) {
      try {
         const location = await pokeapi.get(url);
         // console.log(location.name, `${location.areas.length} locations...`);
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
               return { name: location.name, encounter: encounter };
            }
         }
         return undefined;
      } catch (err) {
         return { name: 'error', encounter: JSON.stringify(err) };
      }
   }

   async assembleLocations() {
      console.group('assembling locations...');
      for (let url of this.apiLocations) {
         const location = await pokeapi.get(url);
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
            // BUG rock tunnel has duplicate pokemons in firered/leafgreen
            if (pokemons.length > 0) {
               pokemons.forEach(pokemon => {
                  this.pokedex.set(pokemon.species, pokemon.url);
               });
               console.log(location.name, `with ${location.areas.length} locations...`);
               encounter.pokemons = pokemons.map(p => p.species);
               this.assembledLocations.set(location.name, encounter);
            } else {
               console.log(`No Pokemon available for ${location.name}...`);
            }
         }
      }
      console.log(this.assembledLocations.length);
      console.groupEnd();
   }

   async getAPILocations() {
      console.group('getting api locations...');
      for (let name of this.regions) {
         const region = await pokeapi.getRegion(name);
         this.apiLocations.push(...region.locations.map(l => l.url));
      }
      console.log(this.apiLocations.length);
      console.groupEnd();
   }

   async fillPokedex() {
      console.group('filling pokedex...');
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
         console.log(`setting ${key}...`);
         this.pokedex.set(key, encounterPokemon);
      }
      console.log(this.pokedex.size);
      console.groupEnd();
   }

   applyPokedex() {
      console.group('applying pokdex...');
      for (let [key, encounter] of this.assembledLocations) {
         let toTransform = encounter.pokemons;
         encounter.pokemons = toTransform.map(p => this.pokedex.get(p));
         this.assembledLocations.set(key, encounter);
      }
      console.groupEnd();
   }
}

// import fs from 'fs';
// import { buildVersion } from './game.js';
// const ec = new EncounterController(buildVersion('emerald'));
// ec.run().then(() => {
//    fs.writeFileSync(
//       `./testingoutput/results${new Date().toUTCString()}.json`,
//       JSON.stringify([...ec.assembledLocations.values()], undefined, 2)
//    );
// });
