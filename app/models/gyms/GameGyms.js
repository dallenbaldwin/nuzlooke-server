import { VersionFamily } from '../constants/GameVersion.js';
import LetsGo from './games/LetsGo.js';
import Emerald from './games/Emerald.js';
import RubySapphire from './games/RubySapphire.js';

export default versionFamily => {
   switch (versionFamily) {
      case VersionFamily.LETSGO:
         return deClassify(new LetsGo().gyms);
      case VersionFamily.RUBYSAPPHIRE:
         return deClassify(new RubySapphire().gyms);
      case VersionFamily.EMERALD:
         return deClassify(new Emerald().gyms);
      default:
         return null;
   }
};

const deClassify = classObject => JSON.parse(JSON.stringify(classObject));
