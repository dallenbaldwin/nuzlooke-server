import Pokedex from 'pokedex-promise-v2';

// how long to keep the cache alive. keeps the process alive, which is fine for when the server is going, but for quick testing, set to a low value
const cacheSeconds = 1;
// request timeout seconds
const timeoutSeconds = 20;

const options = {
   cacheLimit: cacheSeconds * 1000,
   timeout: timeoutSeconds * 1000,
};

const PokeAPI = new Pokedex(options);

export default PokeAPI;
