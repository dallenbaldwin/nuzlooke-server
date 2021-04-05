import axios from 'axios';

export default class PokeAPI {
   constructor() {
      this.client = axios.create({});
      this.baseURL = 'https://pokeapi.co/api/v2';
   }
}
