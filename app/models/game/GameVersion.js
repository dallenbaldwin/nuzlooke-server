import { arrayify } from '../../util/UtilMethods.js';

export default class Version {
   constructor(label, artwork_url, generation, version, version_group, regions) {
      this.label = label;
      this.artwork_url = artwork_url;
      this.generation = generation;
      this.version = version;
      this.version_group = version_group;
      this.regions = regions;
   }
   static builder() {
      this.label = undefined;
      this.artwork_url = undefined;
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
   static withArtworkUrl(val) {
      this.artwork_url = val;
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
         this.artwork_url,
         this.generation,
         this.version,
         this.version_group,
         this.regions
      );
   }
}
