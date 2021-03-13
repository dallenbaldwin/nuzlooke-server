export default class GymLeader {
   constructor(label, flavorText, spriteUrl) {
      this.label = label;
      this.flavor_text = flavorText;
      this.sprite_url = spriteUrl;
   }
   static builder() {
      return this;
   }
   static withLabel(val) {
      this.label = val;
      return this;
   }
   static withFlavorText(val) {
      this.flavor_text = val;
      return this;
   }
   static withSpritUrl(val) {
      this.sprite_url = val;
      return this;
   }
   static build() {
      return new GymLeader(this.label, this.flavor_text, this.sprite_url);
   }
}
