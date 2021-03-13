export default class GymPokemonMove {
   constructor(label, description, damageClass, type, pp, power, accuracy) {
      this.label = label;
      this.description = description;
      this.is_priority = false;
      this.damage_class = damageClass;
      this.type = type;
      this.pp = pp;
      this.power = power;
      this.accuracy = accuracy;
   }
   static builder() {
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
   static withIsPriority() {
      this.is_priority = true;
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
         this.damage_class,
         this.type,
         this.pp,
         this.power,
         this.accuracy
      );
   }
}
