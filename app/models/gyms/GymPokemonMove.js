export default class GymPokemonMove {
   constructor(label, description, priority, damageClass, type, pp, power, accuracy) {
      this.label = label;
      this.description = description;
      this.priority = priority;
      this.damage_class = damageClass;
      this.type = type;
      this.pp = pp;
      this.power = power;
      this.accuracy = accuracy;
   }
   static builder() {
      this.label = undefined;
      this.description = undefined;
      this.priority = undefined;
      this.damage_class = undefined;
      this.type = undefined;
      this.pp = undefined;
      this.power = undefined;
      this.accuracy = undefined;
      return this;
   }
   static withLabel(val) {
      this.label = val;
      return this;
   }
   static withDescription(val) {
      this.description = val;
      return this;
   }
   static withPriority(val) {
      this.priority = val;
      return this;
   }
   static withDamageClass(val) {
      this.damage_class = val;
      return this;
   }
   static withType(val) {
      this.type = val;
      return this;
   }
   static withPP(val) {
      this.pp = val;
      return this;
   }
   static withPower(val) {
      this.power = val;
      return this;
   }
   static withAccuracy(val) {
      this.accuracy = val;
      return this;
   }
   static build() {
      return new GymPokemonMove(
         this.label,
         this.description,
         this.priority,
         this.damage_class,
         this.type,
         this.pp,
         this.power,
         this.accuracy
      );
   }
}
