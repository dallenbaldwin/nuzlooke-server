import { arrayify } from '../../util/UtilMethods.js';

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
   static builder() {
      this.label = undefined;
      this.location = undefined;
      this.dominant_type = undefined;
      this.badge = undefined;
      this.leader = undefined;
      this.pokemons = undefined;
      return this;
   }
   static withLabel(val) {
      this.label = val;
      return this;
   }
   static withLocation(val) {
      this.location = val;
      return this;
   }
   static withDominantType(val) {
      this.dominant_type = val;
      return this;
   }
   static withBadge(val) {
      this.badge = val;
      return this;
   }
   static withLeader(val) {
      this.leader = val;
      return this;
   }
   static withPokemons(...vals) {
      this.pokemons = arrayify(...vals);
      return this;
   }
   static build() {
      return new Gym(
         this.label,
         this.location,
         this.dominant_type,
         this.badge,
         this.leader,
         this.pokemons
      );
   }
}
