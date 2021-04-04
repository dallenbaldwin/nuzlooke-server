import VersionGroup from '../models/constants/pokeapi/VersionGroup.js';
import LetsGo from '../models/gyms/games/LetsGo.js';
import Emerald from '../models/gyms/games/Emerald.js';
import RubySapphire from '../models/gyms/games/RubySapphire.js';
import FireredLeafgreen from '../models/gyms/games/FireredLeafgreen.js';

export function buildGyms(version) {
   const versionGroup = version.version_group;
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
}
