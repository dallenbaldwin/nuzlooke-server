import { arrayify } from '../../util/UtilMethods.js';

export default class Encounter {
   constructor(label, sortId, result, pokemons) {
      this.label = label;
      this.sort_id = sortId;
      this.result = result;
      this.pokemons = pokemons;
   }
   static builder() {
      this.label = undefined;
      this.sortId = undefined;
      this.result = undefined;
      this.pokemons = undefined;
      return this;
   }
   static withLabel(val) {
      this.label = val;
      return this;
   }
   static withSortId(val) {
      this.sort_id = val;
      return this;
   }
   static withResult(val) {
      this.result = val;
      return this;
   }
   static withPokemons(...vals) {
      this.pokemons = arrayify(...vals);
      return this;
   }
   static build() {
      return new Encounter(this.label, this.sort_id, this.result, this.pokemons);
   }
}
