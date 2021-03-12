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
   static withSpecies(species) {
      this.species = species;
      return this;
   }
   static withIconUrl(iconUrl) {
      this.icon_url = iconUrl;
      return this;
   }
   static withSpriteUrl(spriteUrl) {
      this.sprite_url = spriteUrl;
      return this;
   }
   static withTypes(types) {
      this.types = types;
      return this;
   }
   static withLevel(level) {
      this.level = level;
      return this;
   }
   static withAbility(ability) {
      this.ability = ability;
      return this;
   }
   static withHeldItem(heldItem) {
      this.held_item = heldItem;
      return this;
   }
   static withMoves(moves) {
      this.moves = moves;
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
