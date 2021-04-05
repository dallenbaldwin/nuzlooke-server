export default class Sprite {
   constructor(number) {
      this.number = number;
      this.sprite_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.number}.png`;
      this.icon_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${this.number}.png`;
   }
}
