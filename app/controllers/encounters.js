import EncounterResultConst from '../models/constants/EncounterResultConst.js';
import { GameVersion } from '../models/constants/GameVersion.js';
import Encounter from '../models/encounters/Encounter.js';
import EncounterPokemon from '../models/encounters/EncounterPokemon.js';
import { arrayify } from '../util/UtilMethods.js';
import { deClassify } from '../util/UtilMethods.js';
import * as pokeapi from '../controllers/pokeapi.js';

import fs from 'fs';

export async function listEncounters(version = GameVersion.LETSGOEEVEE) {
   return deClassify(new EncounterController(version.api_data).buildEncounters());
}

class EncounterController {
   constructor(versionObject) {
      this.generation = versionObject.generation;
      this.version = versionObject.version;
      this.versionGroup = versionObject.version_group;
   }

   async getAssembledData() {
      let versionGroup = await pokeapi.getVersionGroup(this.versionGroup);
      let regions = [];
      versionGroup.regions.forEach(region => {
         regions.push(pokeapi.get(pokeapi.sanitize(region.url)));
      });
      regions = await Promise.all(regions);
      let locations = [];
      regions.forEach(region => {
         region.locations.forEach(location => {
            locations.push(pokeapi.get(pokeapi.sanitize(location.url)));
         });
      });
      locations = await Promise.all(locations);
      return locations;
      // TODO i have locations... now i need to get areas...
   }
}

const c = new EncounterController(GameVersion.EMERALD.api_data);
c.getAssembledData().then(res => {
   fs.writeFileSync('./results.json', JSON.stringify(res, undefined, 2));
});
