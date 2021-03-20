export default class EncounterResult {
   constructor(species, result, sprite_url) {
      this.species = species;
      this.result = result;
      this.sprite_url = sprite_url;
   }
   static builder() {
      this.species = undefined;
      this.result = undefined;
      this.sprite_url = undefined;
      return this;
   }
   static withSpecies(val) {
      this.species = val;
      return this;
   }
   static withResult(val) {
      this.result = val;
      return this;
   }
   static withSpriteUrl(val) {
      this.sprite_url = val;
      return this;
   }
   static build() {
      return new EncounterResult(this.species, this.result, this.sprite_url);
   }
}
