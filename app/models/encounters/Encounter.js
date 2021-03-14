import { arrayify } from '../../util/Util.js';

export default class Encounter {
   constructor(isAvailable, label, sortId, pokemons) {
      this.is_available = isAvailable;
      this.label = label;
      this.sort_id = sortId;
      this.pokemons = pokemons;
   }
   static builder() {
      this.is_available = false;
      this.label = undefined;
      this.sortId = undefined;
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
   static withPokemons(...vals) {
      this.pokemons = arrayify(...vals);
      return this;
   }
   static build() {
      return new Encounter(this.is_available, this.label, this.sort_id, this.pokemons);
   }
}
