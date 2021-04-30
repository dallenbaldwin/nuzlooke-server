import { arrayify } from '../../util/UtilMethods.js';

export default class Version {
   constructor(label, cover_art, generation, version, version_group, regions) {
      this.label = label;
      this.cover_art = cover_art;
      this.generation = generation;
      this.version = version;
      this.version_group = version_group;
      this.regions = regions;
   }
   static builder() {
      this.label = undefined;
      this.cover_art = undefined;
      this.generation = undefined;
      this.version = undefined;
      this.version_group = undefined;
      this.regions = undefined;
      return this;
   }
   static withLabel(val) {
      this.label = val;
      return this;
   }
   static withCoverArt(val) {
      this.cover_art = val;
      return this;
   }
   static withGeneration(val) {
      this.generation = val;
      return this;
   }
   static withVersion(val) {
      this.version = val;
      return this;
   }
   static withVersionGroup(val) {
      this.version_group = val;
      return this;
   }
   static withRegions(...vals) {
      this.regions = arrayify(...vals);
      return this;
   }
   static build() {
      return new Version(
         this.label,
         this.cover_art,
         this.generation,
         this.version,
         this.version_group,
         this.regions
      );
   }
}
