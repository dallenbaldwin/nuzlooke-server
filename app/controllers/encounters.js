import { deClassify } from '../util/Util.js';
import buildEncounters from './buildEncounters.js';

export function listEncounters(versionFamily) {
   return deClassify(buildEncounters(versionFamily));
}
