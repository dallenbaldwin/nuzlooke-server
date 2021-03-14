import { arrayify } from '../../util/Util.js';

export default class EncounterPokemon {
   constructor(species, iconUrl, spriteUrl, types) {
      this.species = species;
      this.icon_url = iconUrl;
      this.sprite_url = spriteUrl;
      this.types = types;
   }
   static builder() {
      this.species = undefined;
      this.icon_url = undefined;
      this.sprite_url = undefined;
      this.types = undefined;
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
   static build() {
      return new EncounterPokemon(
         this.species,
         this.icon_url,
         this.sprite_url,
         this.types
      );
   }
}
