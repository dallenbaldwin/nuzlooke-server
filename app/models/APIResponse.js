export default class APIResponse {
   constructor(code, response, error) {
      this.code = code;
      this.response = response;
      this.error = error;
   }
   static withError(code, message, stack) {
      const err = new Err(message, stack);
      return new APIResponse(code, null, err);
   }
   static withResponse(code, message, data) {
      const res = new Res(message, data);
      return new APIResponse(code, res, null);
   }
   // TODO: add more static methods like with404, with200, with201, with500 to abstract the code
}

class Res {
   constructor(message, data) {
      this.message = message;
      this.data = data;
   }
}

class Err {
   constructor(message, details) {
      this.message = message;
      this.details = details;
   }
}
