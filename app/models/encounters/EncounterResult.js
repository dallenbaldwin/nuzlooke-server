export default class EncounterResult {
   constructor(species, constant, sprite_url, nickname) {
      this.species = species;
      this.constant = constant;
      this.sprite_url = sprite_url;
      this.nickname = nickname;
   }
   static builder() {
      this.species = undefined;
      this.constant = undefined;
      this.sprite_url = undefined;
      this.nickname = undefined;
      return this;
   }
   static withNickname(val) {
      this.nickname = val;
      return this;
   }
   static withSpecies(val) {
      this.species = val;
      return this;
   }
   static withConstant(val) {
      this.constant = val;
      return this;
   }
   static withSpriteUrl(val) {
      this.sprite_url = val;
      return this;
   }
   static build() {
      return new EncounterResult(
         this.species,
         this.constant,
         this.sprite_url,
         this.nickname
      );
   }
}

// TODO: need to add pokemonID
