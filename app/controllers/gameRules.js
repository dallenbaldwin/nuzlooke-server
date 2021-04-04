import RuleCode from '../models/constants/RuleCode.js';
import GameRule from '../models/rules/GameRule.js';
import { arrayify } from '../util/UtilMethods.js';

export const getDefaultRules = () => {
   return arrayify(
      GameRule.builder().withConstant(RuleCode.USE_NICKNAMES).build(),
      GameRule.builder().withConstant(RuleCode.ONE_MON_ONE_AREA).build(),
      GameRule.builder().withConstant(RuleCode.FAINTING_KILLS).build()
   );
};
