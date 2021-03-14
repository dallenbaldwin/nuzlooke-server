import { VersionFamily } from '../models/constants/GameVersion.js';
import LetsGo from '../models/gyms/games/LetsGo.js';
import Emerald from '../models/gyms/games/Emerald.js';
import RubySapphire from '../models/gyms/games/RubySapphire.js';
import { deClassify } from '../util/Util.js';

export function listGyms(versionFamily) {
   switch (versionFamily) {
      case VersionFamily.LETSGO:
         return deClassify(new LetsGo().gyms);
      case VersionFamily.RUBYSAPPHIRE:
         return deClassify(new RubySapphire().gyms);
      case VersionFamily.EMERALD:
         return deClassify(new Emerald().gyms);
      default:
         return undefined;
   }
}
