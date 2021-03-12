export default class Gym {
   constructor(label, location, dominantType, badge, leader, pokemons) {
      this.is_defeated = false;
      this.label = label;
      this.location = location;
      this.dominant_type = dominantType;
      this.badge = badge;
      this.leader = leader;
      this.pokemons = pokemons;
   }
}
