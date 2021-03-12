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
}
