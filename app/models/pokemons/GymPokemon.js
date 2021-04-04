import { arrayify } from '../../util/UtilMethods.js';
import Pokemon from './Pokemon.js';

export default class GymPokemon extends Pokemon {
   constructor(
      species,
      iconUrl,
      spriteUrl,
      types,
      sort_id,
      level,
      ability,
      heldItem,
      moves
   ) {
      super(species, iconUrl, spriteUrl, types);
      this.sort_id = sort_id;
      this.level = level;
      this.ability = ability;
      this.held_item = heldItem;
      this.moves = moves;
   }
   static builder() {
      this.species = undefined;
      this.icon_url = undefined;
      this.sprite_url = undefined;
      this.types = undefined;
      this.sort_id = undefined;
      this.level = undefined;
      this.ability = undefined;
      this.held_item = undefined;
      this.moves = undefined;
      return this;
   }
   static withSortId(val) {
      this.sort_id = val;
      return this;
   }
   static withLevel(val) {
      this.level = val;
      return this;
   }
   static withAbility(val) {
      this.ability = val;
      return this;
   }
   static withHeldItem(val) {
      this.held_item = val;
      return this;
   }
   static withMoves(...vals) {
      this.moves = arrayify(...vals);
      return this;
   }
   static build() {
      return new GymPokemon(
         this.species,
         this.icon_url,
         this.sprite_url,
         this.types,
         this.sort_id,
         this.level,
         this.ability,
         this.heldItem,
         this.moves
      );
   }
}
