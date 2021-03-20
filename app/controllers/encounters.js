import EncounterResultConst from '../models/constants/EncounterResultConst.js';
import { VersionFamily } from '../models/constants/GameVersion.js';
import Encounter from '../models/encounters/Encounter.js';
import EncounterPokemon from '../models/encounters/EncounterPokemon.js';
import EncounterResult from '../models/encounters/EncounterResult.js';
import PokeAPI from '../models/PokeAPI.js';
import { arrayify } from '../util/UtilMethods.js';
import { deClassify } from '../util/UtilMethods.js';

export function listEncounters(versionFamily) {
   return deClassify(buildEncounters(versionFamily));
}

function buildEncounters(versionFamily) {
   switch (versionFamily) {
      case VersionFamily.LETSGO:
         // TODO: replace this with actual code
         const encounters = arrayify(
            Encounter.builder()
               .withLabel(`Oak's Lab`)
               .withResult(
                  // yes this is wrong. but it's for testing
                  EncounterResult.builder()
                     .withResult(EncounterResultConst.CAUGHT)
                     .withSpecies('Pikachu')
                     .withSpriteUrl(
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
                     )
                     .build()
               )
               .withPokemons(
                  EncounterPokemon.builder().withSpecies('Pikachu').build(),
                  EncounterPokemon.builder().withSpecies('Eevee').build()
               )
               .build(),
            Encounter.builder()
               .withLabel('Route 1')
               .withResult(EncounterResult.builder().withResult(En).build())
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
