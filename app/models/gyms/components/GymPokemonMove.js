export default class GymPokemonMove {
   constructor(
      moveName,
      moveDescription,
      isPriority,
      damageClass,
      type,
      pp,
      power,
      accuracy
   ) {
      this.move_name = moveName;
      this.move_description = moveDescription;
      this.is_priority = isPriority;
      this.damage_class = damageClass;
      this.type = type;
      this.pp = pp;
      this.power = power;
      this.accuracy = accuracy;
   }
}
