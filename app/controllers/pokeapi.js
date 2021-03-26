import PokeAPI from '../models/PokeAPI.js';

const pokeapi = new PokeAPI();
const client = pokeapi.client;
const baseURL = pokeapi.baseURL;

export async function get(endpoint) {
   try {
      let response = await client.get(endpoint);
      return response.data;
   } catch (err) {
      console.error(err);
   }
}

export async function getWithBaseUrl(endpoint) {
   try {
      let response = await client.get(`${baseURL}/${endpoint}/`);
      return response.data;
   } catch (err) {
      console.error(err);
   }
}

export async function get

export async function getPokemonBySpecies(species = 'ditto') {
   species = species.toLowerCase();
   try {
      let response = await client.get(`${baseURL}/pokemon/${species}`);
      return response.data;
   } catch (err) {
      console.error(err);
   }
}
