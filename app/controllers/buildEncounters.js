import { VersionFamily } from '../models/constants/GameVersion.js';
import Encounter from '../models/encounters/Encounter.js';
import EncounterPokemon from '../models/encounters/EncounterPokemon.js';
import PokeAPI from '../models/PokeAPI.js';
import { arrayify } from '../util/UtilMethods.js';

export default function buildEncounters(versionFamily) {
   switch (versionFamily) {
      case VersionFamily.LETSGO:
         // TODO: replace this with actual code
         const encounters = arrayify(
            Encounter.builder()
               .withLabel(`Oak's Lab`)
               .withPokemons(
                  EncounterPokemon.builder().withSpecies('Pikachu').build(),
                  EncounterPokemon.builder().withSpecies('Eevee').build()
               )
               .build(),
            Encounter.builder()
               .withLabel('Route 1')
               .withPokemons(
                  EncounterPokemon.builder().withSpecies('Pidgey').build(),
                  EncounterPokemon.builder().withSpecies('Rattata').build()
               )
               .build()
         );
         return encounters;
      default:
         return [];
   }
}

// TODO: Figure out how this is going to work
/*
- get the region from the version family
- 


*/
