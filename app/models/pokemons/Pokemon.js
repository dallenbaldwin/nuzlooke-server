import { arrayify } from '../../util/UtilMethods.js';

export default class Pokemon {
   constructor(species, icon_url, sprite_url, types, api_name) {
      this.species = species;
      this.icon_url = icon_url;
      this.sprite_url = sprite_url;
      this.types = types;
      this.api_name = api_name;
   }
   static builder() {
      this.species = undefined;
      this.icon_url = undefined;
      this.sprite_url = undefined;
      this.types = undefined;
      this.api_name = undefined;
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
   static withAPIName(val) {
      this.api_name = val;
      return this;
   }
   static build() {
      return new Pokemon(
         this.species,
         this.icon_url,
         this.sprite_url,
         this.types,
         this.api_name
      );
   }
}
