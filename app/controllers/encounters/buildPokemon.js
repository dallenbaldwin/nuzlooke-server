import Generation from '../../constants/pokeapi/Generation.js';
import Pokemon from '../../models/pokemons/Pokemon.js';
import * as pokeapi from '../pokeapi.js';
import * as util from '../../util/UtilMethods.js';

setTimeout(() => {
   process.send('ready');
}, 1000);

const fallback = setTimeout(() => {
   process.send({ error: `timed out` });
   process.kill(process.pid);
}, 30 * 1000);

process.on('message', payload => {
   buildPokemon(payload.url)
      .then(pokemon => {
         process.send(pokemon);
         process.kill(process.pid);
      })
      .catch(err => {
         process.send({ error: err });
         process.kill(process.pid);
      });
});

const buildPokemon = async url => {
   try {
      const pokemon = await pokeapi.get(url);
      const species = await pokeapi.get(pokemon.species.url);
      let english = util.getEnglish(species.names);
      const encounterPokemon = Pokemon.builder()
         .withTypes(pokemon.types.map(t => pokeapi.normalizeKabob(t.type.name)))
         .withIconUrl(pokemon.sprites.versions[Generation.GEN7].icons.front_default)
         .withSpriteUrl(pokemon.sprites.front_default)
         .withSpecies(pokeapi.normalizeKabob(pokemon.species.name))
         .withSpecies(english ? english.name : pokemon.species.name)
         .build();
      return encounterPokemon;
   } catch (err) {
      throw err.stack;
   }
};
