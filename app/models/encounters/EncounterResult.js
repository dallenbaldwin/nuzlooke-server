export default class EncounterResult {
   constructor(pokemonId, species, constant, sprite_url, nickname) {
      this.pokemon_id = pokemonId;
      this.species = species;
      this.constant = constant;
      this.sprite_url = sprite_url;
      this.nickname = nickname;
   }
   static builder() {
      this.pokemon_id = undefined;
      this.species = undefined;
      this.constant = undefined;
      this.sprite_url = undefined;
      this.nickname = undefined;
      return this;
   }
   static withPokemonId(val) {
      this.pokemon_id = val;
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
         this.pokemon_id,
         this.species,
         this.constant,
         this.sprite_url,
         this.nickname
      );
   }
}
