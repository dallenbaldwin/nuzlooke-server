export default class GymBadge {
   constructor(label, spriteUrl) {
      this.label = label;
      this.sprite_url = spriteUrl;
   }
   static builder() {
      this.label = undefined;
      this.sprite_url = undefined;
      return this;
   }
   static withLabel(val) {
      this.label = val;
      return this;
   }
   static withSpriteUrl(val) {
      this.sprite_url = val;
      return this;
   }
   static build() {
      return new GymBadge(this.label, this.sprite_url);
   }
}
