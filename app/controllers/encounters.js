import EncounterResultConst from '../models/constants/EncounterResultConst.js';
import { GameVersion } from '../models/constants/GameVersion.js';
import Encounter from '../models/encounters/Encounter.js';
import EncounterPokemon from '../models/encounters/EncounterPokemon.js';
import { arrayify } from '../util/UtilMethods.js';
import { deClassify } from '../util/UtilMethods.js';
import * as pokeapi from '../controllers/pokeapi.js';

export async function listEncounters(version = GameVersion.LETSGOEEVEE) {
   return deClassify(new EncounterController(version.api_data).buildEncounters());
}

class EncounterController {
   constructor(versionObject) {
      this.generation = versionObject.generation;
      this.version = versionObject.version;
      this.versionGroup = versionObject.version_group;
   }

   async getVersionGroup() {
      const versionGroup = await pokeapi.getWithBaseUrl(
         `version-group/${this.versionGroup}`
      );
      return versionGroup;
   }

   async buildEncounters() {
      /*
      get locations per region based on version family
      */
      const version = await this.getVersionGroup();
      return version;
      // return [];
   }

   buildEncounter(...locationAreas) {
      /*
      get location-areas from location
      combine 
      filter out pokemon that aren't in the family
      */
   }
}

const c = new EncounterController(GameVersion.EMERALD.api_data);
c.buildEncounters().then(console.log);
