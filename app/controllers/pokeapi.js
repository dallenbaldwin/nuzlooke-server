import PokeAPI from '../models/PokeAPI.js';

const pokeapi = new PokeAPI();
const client = pokeapi.client;

const withBaseUrl = endpoint => `${pokeapi.baseURL}/${endpoint}/`;

const normalize = str =>
   str
      .split(' ')
      .map(s => s.toLowerCase())
      .join('-');

export const sanitize = url => url.slice(0, url.length - 1);

export async function get(url) {
   try {
      let response = await client.get(url);
      return response.data;
   } catch (err) {
      console.error(err);
   }
}

async function getWithBaseUrl(endpoint) {
   try {
      let response = await client.get(withBaseUrl(endpoint));
      return response.data;
   } catch (err) {
      console.error(err);
   }
}

export async function getVersionGroup(versionGroup) {
   try {
      let response = await getWithBaseUrl(`version-group/${versionGroup}`);
      return response;
   } catch (err) {
      console.error(err);
   }
}

export async function getPokemonBySpecies(species = 'ditto') {
   try {
      let response = await getWithBaseUrl(`pokemon/${species}`);
      return response;
   } catch (err) {
      console.error(err);
   }
}
