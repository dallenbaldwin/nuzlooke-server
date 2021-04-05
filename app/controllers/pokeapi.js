import PokeAPI from '../models/PokeAPI.js';

const pokeapi = new PokeAPI();
const client = pokeapi.client;

const withBaseUrl = endpoint => `${pokeapi.baseURL}/${endpoint}/`;

export const normalizeKabob = (string = '') =>
   string
      .split('-')
      .map(s => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
      .join(' ');

export const sanitize = url => url.slice(0, url.length - 1);

export const get = async url => {
   try {
      return (await client.get(sanitize(url))).data;
   } catch (err) {
      console.error(err);
   }
};

const getWithBaseUrl = async endpoint => {
   try {
      let response = await client.get(withBaseUrl(endpoint));
      return response.data;
   } catch (err) {
      console.error(err);
   }
};

export const getRegion = async region => {
   try {
      let response = await getWithBaseUrl(`region/${region}`);
      return response;
   } catch (err) {
      console.error(err);
   }
};

export const getPokemonBySpecies = async (species = 'ditto') => {
   try {
      let response = await getWithBaseUrl(`pokemon/${species}`);
      return response;
   } catch (err) {
      console.error(err);
   }
};
