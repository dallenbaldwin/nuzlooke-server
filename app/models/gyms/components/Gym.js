export default class Gym {
   constructor(gymName, location, dominantType, badge, leader, pokemons) {
      this.is_defeated = false;
      this.gym_name = gymName;
      this.location = location;
      this.dominant_type = dominantType;
      this.badge = badge;
      this.leader = leader;
      this.pokemons = pokemons;
   }
}
