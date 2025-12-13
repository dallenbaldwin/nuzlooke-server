export default class Sprite {
   constructor(number) {
      this.number = number;
      /**
       * @example
       * https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png
       */
      this.sprite_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.number}.png`;
      /**
       * @example
       * `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/25.png`;
       */
      this.icon_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${this.number}.png`;
   }
}
