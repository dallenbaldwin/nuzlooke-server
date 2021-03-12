import { VersionFamily } from '../constants/GameVersion.js';
import LetsGo from './games/LetsGo.js';
import Emerald from './games/Emerald.js';
import RubySapphire from './games/RubySapphire.js';

export default versionFamily => {
   switch (versionFamily) {
      case VersionFamily.LETSGO:
         return Object(new LetsGo().gyms);
      case VersionFamily.RUBYSAPPHIRE:
         return Object(new RubySapphire());
      case VersionFamily.EMERALD:
         return Object(new Emerald());
      default:
         return null;
   }
};
