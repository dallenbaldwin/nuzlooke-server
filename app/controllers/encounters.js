import { deClassify } from '../util/UtilMethods.js';
import buildEncounters from './buildEncounters.js';

export function listEncounters(versionFamily) {
   return deClassify(buildEncounters(versionFamily));
}
