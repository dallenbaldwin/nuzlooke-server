export default class GameRule {
   constructor(label, description, id) {
      this.label = label;
      this.description = description;
      this.id = id;
   }
   static builder() {
      this.label = undefined;
      this.description = undefined;
      this.id = undefined;
      return this;
   }
   static withConstant(val) {
      this.label = val.label || undefined;
      this.description = val.description || undefined;
      this.id = val.id || undefined;
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
   static withCode(val) {
      this.id = val;
      return this;
   }
   static build() {
      return new GameRule(this.label, this.description, this.id);
   }
}
