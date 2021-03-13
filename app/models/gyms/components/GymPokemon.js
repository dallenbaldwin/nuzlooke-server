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
   static withTypes(val) {
      this.types = val;
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
   static withMoves(val) {
      this.moves = val;
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
