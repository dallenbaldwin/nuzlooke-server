import * as pokeapi from '../pokeapi.js';
import * as util from '../../util/UtilMethods.js';
import APIResponse from '../../models/APIResponse.js';
import GameVersions from '../../constants/GameVersions.js';
import { fork } from 'child_process';
import { cpus } from 'os';

const buildEncounterPath = './app/controllers/encounters/buildEncounter.js';
const buildPokemonPath = './app/controllers/encounters/buildPokemon.js';

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
   }
   getMessage = label => {
      let currentNum = 0;
      if (this.stage === 'locations') currentNum = this.apiLocations.length;
      else if (this.stage === 'pokedex') currentNum = this.pokedex.size;
      this.percentComplete = ((this.finished / currentNum) * 100).toFixed(2);
      return `${label} | ${this.finished} of ${currentNum} (${this.percentComplete}%)`;
   };
   transformUrls = url => this.pokedex.get(url);
   applyPokedex = () => {
      console.time('applying pokedex');
      for (let [key, location] of this.locations) {
         location.pokemons = location.pokemons.map(this.transformUrls);
         this.locations.set(key, location);
      }
      console.timeEnd('applying pokedex');
   };
   getAPILocations = async () => {
      for (let name of this.regions) {
         const region = await pokeapi.getRegion(name);
         this.apiLocations.push(...region.locations.map(l => l.url));
      }
   };
   buildLocations = async () => {
      console.time('building locations');
      await this.getAPILocations();
      await this.fillLocations();
      await this.fillPokedex();
      this.applyPokedex();
      console.timeEnd('building locations');
      return [...this.locations.values()];
   };
   fillLocations = () => {
      this.stage = 'locations';
      this.finished = 0;
      console.group('locations');
      console.time(`got locations`);
      return new Promise((resolve, reject) => {
         for (let url of this.apiLocations) {
            const child = fork(buildEncounterPath);
            child.on('message', location => {
               if (location === 'ready') {
                  child.send({ url: url, gameVersion: this.version });
               } else {
                  // ALWAYS increment finished amount
                  this.finished++;
                  // add location to locations map
                  // and pokemon to pokedex map
                  if (location.error) console.log(location.error);
                  if (location.label) {
                     this.locations.set(location.label, location);
                     for (let url of location.pokemons) {
                        this.pokedex.set(url, url);
                     }
                  }
                  // log progress
                  console.log(this.getMessage(location.label));
                  if (this.finished === this.apiLocations.length) {
                     console.timeEnd(`got locations`);
                     console.groupEnd();
                     resolve();
                  }
               }
            });
         }
      });
   };
   fillLocations2 = () => {
      this.stage = 'locations';
      this.finished = 0;
      console.group('locations');
      console.time(`got locations`);
      return new Promise((resolve, reject) => {
         const chunkMap = this.getChunkMap(this.apiLocations);
         for (let [key, chunk] of chunkMap) {
            if (chunkMap.get(key).length > 0) {
               const child = fork(buildEncounterPath);
               child.on('message', location => {
                  if (location === 'ready') {
                     child.send({ urls: chunk, gameVersion: this.version });
                  } else {
                     // ALWAYS increment finished amount
                     this.finished++;
                     // add location to locations map
                     // and pokemon to pokedex map
                     if (location.error) console.log(location.error);
                     if (location.label) {
                        this.locations.set(location.label, location);
                        for (let url of location.pokemons) {
                           this.pokedex.set(url, url);
                        }
                     }
                     // log progress
                     console.log(this.getMessage(location.label));
                     if (this.finished === this.apiLocations.length) {
                        console.timeEnd(`got locations`);
                        console.groupEnd();
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
      console.group('pokedex');
      console.time('filled pokedex');
      return new Promise((resolve, reject) => {
         for (let [key, url] of this.pokedex) {
            const child = fork(buildPokemonPath);
            child.on('message', builtPokemon => {
               // increment finished amount
               if (builtPokemon === 'ready') {
                  child.send({ url: url });
               } else {
                  this.finished++;
                  if (builtPokemon.error) console.log(builtPokemon.error);
                  // set pokedex with new data
                  this.pokedex.set(key, builtPokemon);
                  // log progress
                  console.log(this.getMessage(builtPokemon.species));
                  if (this.finished === this.pokedex.size) {
                     console.timeEnd('filled pokedex');
                     console.groupEnd();
                     resolve();
                  }
               }
            });
         }
      });
   };
   fillPokedex2 = () => {
      this.stage = 'pokedex';
      this.finished = 0;
      console.group('pokedex');
      console.time('filled pokedex');
      return new Promise((resolve, reject) => {
         for (let [key, url] of this.pokedex) {
            const child = fork(buildPokemonPath);
            child.on('message', builtPokemon => {
               // increment finished amount
               if (builtPokemon === 'ready') {
                  child.send({ url: url });
               } else {
                  this.finished++;
                  if (builtPokemon.error) console.log(builtPokemon.error);
                  // set pokedex with new data
                  this.pokedex.set(key, builtPokemon);
                  // log progress
                  console.log(this.getMessage(builtPokemon.species));
                  if (this.finished === this.pokedex.size) {
                     console.timeEnd('filled pokedex');
                     console.groupEnd();
                     resolve();
                  }
               }
            });
         }
      });
   };
   getChunkMap = items => {
      const size = Math.ceil(items.length / cpus().length);
      const map = new Map();
      for (let cpu in cpus()) {
         map.set(cpu, items.splice(0, size));
      }
   };
}
