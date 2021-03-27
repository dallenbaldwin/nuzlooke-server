import { APIGeneration, GameVersion } from '../models/constants/GameVersion.js';
import Encounter from '../models/encounters/Encounter.js';
import EncounterPokemon from '../models/encounters/EncounterPokemon.js';
import { deClassify } from '../util/UtilMethods.js';
import * as pokeapi from '../controllers/pokeapi.js';

import fs from 'fs';

export async function listEncounters(version = GameVersion.LETSGOEEVEE) {
   try {
      const encounters = await new EncounterController(version.api_data).buildLocations();
      return deClassify(encounters);
   } catch (err) {
      console.log(err);
   }
}

class EncounterController {
   constructor(versionObject) {
      this.generation = versionObject.generation;
      this.version = versionObject.version;
      this.versionGroup = versionObject.version_group;
   }

   async buildLocations() {
      const encounters = [];
      console.log(`getting assembled location data for ${this.version}...`);
      const locations = await this.getLocations();
      console.log('building encounter objects with location data...');
      locations.forEach(location => {
         let pokemons = [];
         location.location_areas.forEach(area => {
            area.encounters.forEach(encounter => {
               pokemons.push(
                  EncounterPokemon.builder()
                     .withSpecies(encounter.species)
                     .withIconUrl(encounter.icon_url)
                     .withSpriteUrl(encounter.sprite_url)
                     .build()
               );
            });
         });
         encounters.push(
            Encounter.builder()
               .withLabel(location.name)
               .withPokemons(pokemons)
               .withSortId(location.sortId)
               .build()
         );
      });
      return encounters;
   }

   async getLocations() {
      console.log('getting version group...');
      let versionGroup = await pokeapi.getVersionGroup(this.versionGroup);
      // get associated regions for this version group
      console.log('getting regions...');
      let regions = [];
      versionGroup.regions.forEach(region => {
         regions.push(pokeapi.get(pokeapi.sanitize(region.url)));
      });
      regions = await Promise.all(regions);
      // get associated locations per region
      console.log(`got ${regions.length} regions. getting locations...`);
      let locations = [];
      regions.forEach(region => {
         region.locations.forEach(location => {
            locations.push(pokeapi.get(pokeapi.sanitize(location.url)));
         });
      });
      locations = await Promise.all(locations);
      // remove locations that don't have any location areas (i.e. where the pokemon live)
      console.log(
         `got ${locations.length} locations. removing locations with no location areas...`
      );
      locations = locations.filter(location => location.areas.length > 0);
      // reduce our location data down to something more manageable
      console.log(`${locations.length} remaining locations. reducing location data...`);
      locations = locations.map(location => {
         let sortId = location.game_indices.find(
            gi => gi.generation.name === this.generation
         );
         let english = location.names.find(name => name.language.name === 'en');
         return {
            name: english ? english.name : location.name,
            areas: location.areas.map(area => area.url),
            location_areas: [],
            sortId: sortId ? sortId.game_index : location.id,
         };
      });
      // get all the locations' location areas
      console.log('getting location areas...');
      let locationAreas = [];
      locations.forEach(location => {
         location.areas.forEach(area => {
            locationAreas.push(
               pokeapi.get(pokeapi.sanitize(area)).then(res => {
                  location.location_areas.push(res);
                  console.log(`got location area ${res.name}...`);
               })
            );
         });
      });
      locationAreas = await Promise.all(locationAreas);
      // reduce location areas down to something more manageable
      // create and add to pokedex
      console.log(
         `got ${locationAreas.length} location areas. reducing location area data and filling pokedex...`
      );
      let pokedex = new Map();
      locations.forEach(location => {
         let areas = location.location_areas;
         location.location_areas = areas.map(area => {
            let english = area.names.find(a => a.language.name === 'en');
            let encounters = area.pokemon_encounters
               .map(pe =>
                  Object({
                     species: pe.pokemon.name,
                     url: pe.pokemon.url,
                     versions: pe.version_details.map(vd => vd.version.name),
                  })
               )
               // remove any encounters that don't apply to this version
               .filter(encounter => encounter.versions.includes(this.version));
            // don't have to worry about setting the "right" url because it should be the same for repeat pokemon
            encounters.forEach(encounter => {
               pokedex.set(encounter.species, encounter.url);
            });
            return {
               game_index: area.game_index,
               name: english.name,
               encounters: encounters,
            };
         });
      });
      // remove locations that don't have any encounters
      console.log('removing locations with no encounters...');
      locations = locations.filter(location =>
         location.location_areas.some(area => area.encounters.length > 0)
      );
      console.log(
         `${locations.length} locations remaining. getting pokedex data for ${pokedex.size} pokemon...`
      );
      let pokemons = [];
      pokedex.forEach((url, pokemon) => {
         pokemons.push(
            pokeapi.get(pokeapi.sanitize(url)).then(res => {
               pokedex.set(
                  pokemon,
                  Object({
                     sprite_url: res.sprites.front_default,
                     icon_url:
                        res.sprites.versions[APIGeneration.GEN7].icons.front_default,
                  })
               );
               console.log(`got pokemon ${pokemon}...`);
            })
         );
      });
      pokemons = await Promise.all(pokemons);
      // set sprite and icon urls for pokemons in all encounter areas
      console.log(`got ${pokemons.length} pokemons. setting sprite data...`);
      locations.forEach(location => {
         location.location_areas.forEach(area => {
            area.encounters.forEach(encounter => {
               let pokedexEntry = pokedex.get(encounter.species);
               encounter.sprite_url = pokedexEntry.sprite_url;
               encounter.icon_url = pokedexEntry.icon_url;
            });
         });
      });
      return locations;
   }
}

// let start = new Date();
// console.log(`starting at... ${start.toJSON()}`);
// const l = await listEncounters(GameVersion.EMERALD);

// fs.writeFileSync(
//    `./testingoutput/results${new Date().toUTCString()}.json`,
//    JSON.stringify(l, undefined, 2)
// );

// let end = new Date();

// console.log(end.getSeconds() - start.getSeconds());
