import Generation from '../../constants/pokeapi/Generation.js';
import Pokemon from '../../models/pokemons/Pokemon.js';
import * as pokeapi from '../pokeapi.js';
import * as util from '../../util/UtilMethods.js';
import APIResponse from '../../models/APIResponse.js';
import GameVersions from '../../constants/GameVersions.js';
import { fork } from 'child_process';

export const getEncounters = async (request, response) => {
   const gameVersion = getGameVersion(request.params.version);
   if (util.isUndefined(gameVersion)) {
      const error = `${request.params.version} is not a valid version`;
      return response.status(400).send(APIResponse.withError(error));
   }

   try {
      const apiLocations = await getAPILocations(gameVersion.regions);
      let finished = 0;
      let locations = new Map();
      let pokedex = new Map();
      for (let url of apiLocations) {
         const child = fork('./app/controllers/encounters/buildEncounter.js');
         child.on('message', async location => {
            finished++;
            if (location.label) {
               locations.set(location.label, location);
               for (let pokemon of location.pokemons) {
                  pokedex.set(pokemon.species, {
                     species: pokemon.species,
                     url: pokemon.url,
                  });
               }
            }
            let complete = ((finished / apiLocations.length) * 100).toFixed(2);
            console.log(`${finished} of ${apiLocations.length}. ${complete} % complete`);
            // when we've gone through everything, set pokedex
            if (finished === apiLocations.length) {
               pokedex = await fillPokedex(pokedex);
               locations = applyPokedex(pokedex, locations);
               return response
                  .status(200)
                  .send(APIResponse.withResponse([...locations.values()]));
            }
            if (location.error) {
               throw location.error;
            }
         });
         // https://github.com/nodejs/help/issues/1383
         // there is a race condition issue with NodeJS, ES6 modules and child_process.fork
         // have to set a timeout to wait for the child process handler to get set up
         setTimeout(() => {
            child.send({ url: url, gameVersion: gameVersion });
         }, 1000);
      }
   } catch (err) {
      return response.status(500).send(APIResponse.withError(err));
   }
};

const getAPILocations = async regions => {
   console.group('getting api locations...');
   const apiLocations = [];
   for (let name of regions) {
      const region = await pokeapi.getRegion(name);
      apiLocations.push(...region.locations.map(l => l.url));
   }
   console.log(apiLocations.length);
   console.groupEnd();
   return apiLocations;
};

const buildPokemon = async url => {
   try {
      const pokemon = await pokeapi.get(url);
      const species = await pokeapi.get(pokemon.species.url);
      let english = util.getEnglish(species.names);
      const encounterPokemon = Pokemon.builder()
         .withTypes(pokemon.types.map(t => pokeapi.normalizeKabob(t.type.name)))
         .withIconUrl(pokemon.sprites.versions[Generation.GEN7].icons.front_default)
         .withSpriteUrl(pokemon.sprites.front_default)
         .withSpecies(english ? english.name : pokemon.species.name)
         .build();
      console.log(`${encounterPokemon.species} built...`);
      return encounterPokemon;
   } catch (err) {
      throw err;
   }
};

const fillPokedex = async pokedex => {
   console.log('filling pokedex...');
   for (let [key, url] of pokedex) {
      const pokemon = await buildPokemon(url);
      pokedex.set(key, pokemon);
   }
   return pokedex;
};

const applyPokedex = (pokedex, assembledLocations) => {
   console.log('applying pokdex...');
   for (let [key, encounter] of assembledLocations) {
      let toTransform = encounter.pokemons;
      encounter.pokemons = toTransform.map(p => pokedex.get(p));
      assembledLocations.set(key, encounter);
   }
   return assembledLocations;
};

const getGameVersion = version =>
   Object.values(GameVersions).find(v => v.version === version);

// // TODO add an api route for this
// class EncounterController {
//    constructor(gameVersion) {
//       this.generation = gameVersion.generation;
//       this.version = gameVersion.version;
//       this.versionGroup = gameVersion.version_group;
//       this.regions = gameVersion.regions;
//       this.apiLocations = [];
//       this.pokedex = new Map();
//       this.assembledLocations = new Map();
//    }

//    get locations() {
//       const locations = [...this.assembledLocations.values()];
//       locations.sort((a, b) => {
//          const labelA = a.label.toUpperCase();
//          const labelB = b.label.toUpperCase();
//          if (labelA > labelB) return 1;
//          if (labelA < labelB) return -1;
//          return 0;
//       });
//       return locations;
//    }

//    async buildLocations() {
//       await this.getAPILocations();
//       await this.assembleLocations();
//       await this.fillPokedex();
//       this.applyPokedex();
//       console.log('done!');
//    }

//    async buildLocations2() {
//       // TODO try and add a pm/dev pattern to this
//       if (cluster.isMaster) {
//          await this.getAPILocations();
//          let numDone = 0;
//          for (let cpu in cpus()) {
//             const dev = cluster.fork();
//             dev.on('message', payload => {
//                console.log(`${payload.name}...`);
//                this.assembledLocations.set(payload.name, payload.encounter);
//             });
//             dev.on('exit', async () => {
//                numDone++;
//                if (numDone === cpus().length) {
//                   await this.fillPokedex();
//                   await this.applyPokedex();
//                   return;
//                }
//             });
//          }
//       } else if (cluster.isWorker) {
//          const workerId = cluster.worker.id;
//          for (let url of this.apiLocations) {
//             let i = this.apiLocations.indexOf(url) + 1;
//             if (i % workerId === 0) {
//                const location = await this.assembleLocation(url);
//                if (location) process.send(location);
//             }
//          }
//          process.kill(process.pid);
//       }
//    }

//    async assembleLocation(url) {
//       try {
//          const location = await pokeapi.get(url);
//          // console.log(location.name, `${location.areas.length} locations...`);
//          if (location.areas.length > 0) {
//             let english = location.names.find(n => n.language.name === 'en');
//             const result = EncounterResult.builder()
//                .withConstant(EncounterResultConst.AVAILABLE)
//                .build();
//             const encounter = Encounter.builder()
//                .withResult(result)
//                .withLabel(english ? english.name : location.name)
//                .withSortId(location.id)
//                .build();
//             let pokemons = [];
//             for (let area of location.areas) {
//                const locationArea = await pokeapi.get(area.url);
//                let areaPokemons = locationArea.pokemon_encounters
//                   .map(pe =>
//                      Object({
//                         species: pe.pokemon.name,
//                         url: pe.pokemon.url,
//                         versions: pe.version_details.map(vd => vd.version.name),
//                      })
//                   )
//                   .filter(p => p.versions.includes(this.version));
//                pokemons.push(...areaPokemons);
//             }
//             pokemons = util.uniquify(pokemons);
//             if (pokemons.length > 0) {
//                pokemons.forEach(pokemon => {
//                   this.pokedex.set(pokemon.species, pokemon.url);
//                });
//                encounter.pokemons = pokemons.map(p => p.species);
//                return { name: location.name, encounter: encounter };
//             }
//          }
//          return undefined;
//       } catch (err) {
//          return { name: 'error', encounter: JSON.stringify(err) };
//       }
//    }

//    async assembleLocations() {
//       console.group('assembling locations...');
//       for (let url of this.apiLocations) {
//          const location = await pokeapi.get(url);
//          if (location.areas.length > 0) {
//             let english = location.names.find(n => n.language.name === 'en');
//             const result = EncounterResult.builder()
//                .withConstant(EncounterResultConst.AVAILABLE)
//                .build();
//             const encounter = Encounter.builder()
//                .withResult(result)
//                .withLabel(english ? english.name : location.name)
//                .withSortId(location.id)
//                .build();
//             let pokemons = [];
//             for (let area of location.areas) {
//                const locationArea = await pokeapi.get(area.url);
//                let areaPokemons = locationArea.pokemon_encounters
//                   .map(pe =>
//                      Object({
//                         species: pe.pokemon.name,
//                         url: pe.pokemon.url,
//                         versions: pe.version_details.map(vd => vd.version.name),
//                      })
//                   )
//                   .filter(p => p.versions.includes(this.version));
//                pokemons.push(...areaPokemons);
//             }
//             pokemons = util.uniquify(pokemons);
//             // BUG rock tunnel has duplicate pokemons in firered/leafgreen
//             if (pokemons.length > 0) {
//                pokemons.forEach(pokemon => {
//                   this.pokedex.set(pokemon.species, pokemon.url);
//                });
//                console.log(location.name, `with ${location.areas.length} locations...`);
//                encounter.pokemons = pokemons.map(p => p.species);
//                this.assembledLocations.set(location.name, encounter);
//             } else {
//                console.log(`No Pokemon available for ${location.name}...`);
//             }
//          }
//       }
//       console.log(this.assembledLocations.size);
//       console.groupEnd();
//    }

//    async getAPILocations() {
//       console.group('getting api locations...');
//       for (let name of this.regions) {
//          const region = await pokeapi.getRegion(name);
//          this.apiLocations.push(...region.locations.map(l => l.url));
//       }
//       console.log(this.apiLocations.length);
//       console.groupEnd();
//    }

//    async fillPokedex() {
//       console.group('filling pokedex...');
//       for (let [key, url] of this.pokedex) {
//          const pokemon = await pokeapi.get(url);
//          const species = await pokeapi.get(pokemon.species.url);
//          let english = species.names.find(n => n.language.name === 'en');
//          const encounterPokemon = Pokemon.builder()
//             .withTypes(pokemon.types.map(t => pokeapi.normalizeKabob(t.type.name)))
//             .withIconUrl(pokemon.sprites.versions[Generation.GEN7].icons.front_default)
//             .withSpriteUrl(pokemon.sprites.front_default)
//             .withSpecies(english ? english.name : pokemon.species.name)
//             .build();
//          console.log(`setting ${key}...`);
//          this.pokedex.set(key, encounterPokemon);
//       }
//       console.log(this.pokedex.size);
//       console.groupEnd();
//    }

//    applyPokedex() {
//       console.group('applying pokdex...');
//       for (let [key, encounter] of this.assembledLocations) {
//          let toTransform = encounter.pokemons;
//          encounter.pokemons = toTransform.map(p => this.pokedex.get(p));
//          this.assembledLocations.set(key, encounter);
//       }
//       console.groupEnd();
//    }
// }
