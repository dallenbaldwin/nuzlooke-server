import VersionGroup from '../constants/pokeapi/VersionGroup.js';
import LetsGo from '../constants/gyms/LetsGo.js';
import Emerald from '../constants/gyms/Emerald.js';
import RubySapphire from '../constants/gyms/RubySapphire.js';
import FireredLeafgreen from '../constants/gyms/FireredLeafgreen.js';

// TODO add an api route for this?

export const buildGyms = versionGroup => {
   switch (versionGroup) {
      case VersionGroup.LETSGO:
         return new LetsGo().gyms;
      case VersionGroup.RUBYSAPPHIRE:
         return new RubySapphire().gyms;
      case VersionGroup.EMERALD:
         return new Emerald().gyms;
      case VersionGroup.FIREREDLEAFGREEN:
         return new FireredLeafgreen().gyms;
      default:
         return [];
   }
};
