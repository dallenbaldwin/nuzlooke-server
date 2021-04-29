import * as pokeapi from '../pokeapi.js';
import * as util from '../../util/UtilMethods.js';
import APIResponse from '../../models/APIResponse.js';
import GameVersions from '../../constants/GameVersions.js';
import { fork } from 'child_process';
import { cpus } from 'os';

const buildEncountersPath = './app/controllers/encounters/buildEncounters.js';
const buildPokemonsPath = './app/controllers/encounters/buildPokemons.js';

const getGameVersion = version =>
   Object.values(GameVersions).find(v => v.version === version);

export const getEncounters = async (request, response) => {
   const gameVersion = getGameVersion(request.params.version);
   if (util.isUndefined(gameVersion)) {
      const error = `${request.params.version} is not a valid version`;
      return response.status(400).send(APIResponse.withError(error));
   }

   try {
      const controller = new EncounterController(gameVersion);
      const locations = await controller.buildLocations();
      return response.status(200).send(APIResponse.withResponse(locations));
   } catch (err) {
      return response.status(500).send(APIResponse.withError(err.stack));
   }
};

class EncounterController {
   constructor(gameVersion) {
      this.generation = gameVersion.generation;
      this.version = gameVersion.version;
      this.versionGroup = gameVersion.version_group;
      this.regions = gameVersion.regions;
      this.apiLocations = [];
      this.locations = new Map();
      this.pokedex = new Map();
      this.finished = 0;
      this.percentComplete = 0;
      this.stage = undefined;
      this.cpus = 16; // cpus().length;
   }
   buildLocations = async () => {
      try {
         console.time('built encounters');
         await this.getAPILocations();
         await this.fillLocations();
         await this.fillPokedex();
         this.applyPokedex();
         console.timeEnd('built encounters');
         return [...this.locations.values()];
      } catch (err) {
         throw { stack: err };
      }
   };
   getAPILocations = async () => {
      for (let name of this.regions) {
         const region = await pokeapi.getRegion(name);
         this.apiLocations.push(...region.locations.map(l => l.url));
      }
   };
   fillLocations = () => {
      this.stage = 'locations';
      this.finished = 0;
      console.group(`building locations for ${this.version} with ${this.cpus} chunks`);
      console.time(`built locations`);
      return new Promise((resolve, reject) => {
         // get the cpu based chunk map so we don't fork 100 times
         const chunkMap = this.getChunkMap(this.apiLocations);
         for (let [key, chunk] of chunkMap) {
            // check for 0 length chunks
            if (chunkMap.get(key).length > 0) {
               const child = fork(buildEncountersPath);
               child.on('message', results => {
                  if (results === 'ready') {
                     child.send({ urls: chunk, gameVersion: this.version });
                  } else {
                     // ALWAYS increment finished amount
                     this.finished += results.length;
                     // add location to locations map
                     // and pokemon to pokedex map
                     if (results.error) reject(results.error);
                     else if (results === 'timed out') reject(`chunk ${key} timed out`);
                     else {
                        for (let result of results) {
                           if (result.label) {
                              this.locations.set(result.label, result);
                              for (let url of result.pokemons) {
                                 this.pokedex.set(url, url);
                              }
                           }
                        }
                     }
                     // log progress
                     this.getStatus();
                     if (this.finished >= this.apiLocations.length) {
                        console.groupEnd(
                           `building locations for ${this.version} with ${this.cpus} chunks`
                        );
                        console.timeEnd(`built locations`);
                        resolve();
                     }
                  }
               });
            }
         }
      });
   };
   fillPokedex = () => {
      this.stage = 'pokedex';
      this.finished = 0;
      console.group(
         `filling pokedex for ${this.pokedex.size} pokemon with ${this.cpus} chunks`
      );
      console.time('filled pokedex');
      return new Promise((resolve, reject) => {
         // get the cpu based chunk map so we don't fork 100 times
         const chunkMap = this.getChunkMap([...this.pokedex.values()]);
         for (let [key, chunk] of chunkMap) {
            // check for 0 length chunks
            if (chunkMap.get(key).length > 0) {
               const child = fork(buildPokemonsPath);
               child.on('message', results => {
                  // increment finished amount
                  if (results === 'ready') {
                     child.send({ urls: chunk });
                  } else {
                     this.finished += results.length;
                     if (results.error) reject(results.error);
                     else if (results === 'timed out') reject(`chunk ${key} timed out`);
                     else {
                        // set pokedex with new data
                        for (let result of results) {
                           this.pokedex.set(result.url, result.pokemon);
                        }
                     }
                     // log progress
                     this.getStatus();
                     if (this.finished >= this.pokedex.size) {
                        console.groupEnd(
                           `filling pokedex for ${this.pokedex.size} pokemon with ${this.cpus} chunks`
                        );
                        console.timeEnd('filled pokedex');
                        resolve();
                     }
                  }
               });
            }
         }
      });
   };
   applyPokedex = () => {
      console.group('applying pokedex');
      console.time('applied pokedex');
      for (let [key, location] of this.locations) {
         location.pokemons = location.pokemons.map(this.transformUrls);
         this.locations.set(key, location);
      }
      console.groupEnd('applying pokedex');
      console.timeEnd('applied pokedex');
   };
   getStatus = () => {
      let currentNum = 0;
      if (this.stage === 'locations') currentNum = this.apiLocations.length;
      else if (this.stage === 'pokedex') currentNum = this.pokedex.size;
      this.percentComplete = ((this.finished / currentNum) * 100).toFixed(2);
      console.log(`${this.finished} of ${currentNum} (${this.percentComplete}%)`);
   };
   transformUrls = url => this.pokedex.get(url);
   getChunkMap = items => {
      let clone = Array.of(...items);
      const size = Math.ceil(clone.length / this.cpus);
      const map = new Map();
      for (let cpu = 0; cpu < this.cpus; cpu++) {
         map.set(cpu, clone.splice(0, size));
      }
      return map;
   };
}
