export default class GymPokemonMove {
   constructor(label, description, isPriority, damageClass, type, pp, power, accuracy) {
      this.label = label;
      this.description = description;
      this.is_priority = isPriority;
      this.damage_class = damageClass;
      this.type = type;
      this.pp = pp;
      this.power = power;
      this.accuracy = accuracy;
   }
}
