import { GameVersion } from '../models/constants/GameVersion.js';
import PokemonType from '../models/constants/PokemonType.js';
import UserPokemon from '../models/pokemons/UserPokemon.js';
import { arrayify, deClassify } from '../util/UtilMethods.js';
import PartyState from '../models/constants/PartyState.js';

export function getStarter(version) {
   switch (version) {
      case GameVersion.LETSGOEEVEE.label:
         const eevee = UserPokemon.builder()
            .withSpecies('Eevee')
            .withTypes(PokemonType.NORMAL)
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/133.png'
            )
            .withSpritUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png'
            )
            .withPartyState(PartyState.PARTY)
            .build();
         return deClassify(arrayify(eevee));
      case GameVersion.LETSGOPIKACHU.label:
         const pikachu = UserPokemon.builder()
            .withSpecies('Pikachu')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/25.png'
            )
            .withPartyState(PartyState.PARTY)
            .withSpritUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/25.png'
            )
            .withTypes(PokemonType.ELECTRIC)
            .build();
         return deClassify(arrayify(pikachu));
      default:
         return [];
   }
}

/*
   switch (versionFamily) {
      case VersionFamily.LETSGO:
         return deClassify(new LetsGo().gyms);
      case VersionFamily.RUBYSAPPHIRE:
         return deClassify(new RubySapphire().gyms);
      case VersionFamily.EMERALD:
         return deClassify(new Emerald().gyms);
      default:
         return undefined;
   }
*/
