export default class GameRule {
   constructor(label, description, code) {
      this.label = label;
      this.description = description;
      this.code = code;
   }
   static builder() {
      this.label = undefined;
      this.description = undefined;
      this.code = undefined;
      return this;
   }
   static withConstant(val) {
      this.label = val.label || undefined;
      this.description = val.description || undefined;
      this.code = val.code || undefined;
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
      this.code = val;
      return this;
   }
   static build() {
      return new GameRule(this.label, this.description, this.code);
   }
}
