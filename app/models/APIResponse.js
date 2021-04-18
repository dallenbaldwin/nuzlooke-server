export default class APIResponse {
   constructor(data, error) {
      this.data = data;
      this.error = error;
   }
   static withError(error) {
      return new APIResponse(null, error);
   }
   static withResponse(data) {
      return new APIResponse(data, null);
   }
   static withMissingObject(object, value) {
      return new APIResponse(null, `No ${object} found with value: ${value}`);
   }
}
