import { arrayify } from '../../util/UtilMethods.js';

export default class GymPokemon {
   constructor(species, iconUrl, spriteUrl, types, level, ability, heldItem, moves) {
      this.species = species;
      this.icon_url = iconUrl;
      this.sprite_url = spriteUrl;
      this.types = types;
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
      this.level = undefined;
      this.ability = undefined;
      this.held_item = undefined;
      this.moves = undefined;
      return this;
   }
   static withSpecies(val) {
      this.species = val;
      return this;
   }
   static withIconUrl(val) {
      this.icon_url = val;
      return this;
   }
   static withSpriteUrl(val) {
      this.sprite_url = val;
      return this;
   }
   static withTypes(...vals) {
      this.types = arrayify(...vals);
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
         this.level,
         this.ability,
         this.heldItem,
         this.moves
      );
   }
}
