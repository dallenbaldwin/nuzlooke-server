import APIResponse from '../models/APIResponse.js';
import Game from '../models/game/Game.js';
import { isUndefined, toAWSItem } from '../util/UtilMethods.js';
import GameVersion from '../models/game/GameVersion.js';
import Version from '../models/constants/pokeapi/Version.js';
import Artwork from '../models/constants/bulbapedia/Artwork.js';
import Generation from '../models/constants/pokeapi/Generation.js';
import Region from '../models/constants/pokeapi/Region.js';
import VersionGroup from '../models/constants/pokeapi/VersionGroup.js';

export const createGame = (request, response) => {
   const errors = getErrors(request.body);
   if (!request.body || !isUndefined(errors))
      return response.status(400).send(APIResponse.withError(errors));

   Game.create(request.body, res => {
      if (res.error)
         return response.status(500).send(APIResponse.withError(res.error.stack));

      return response.status(201).send(APIResponse.withResponse(res.data));
   });
};

export const readGame = (request, response) => {
   Game.read(request.params.id, res => {
      if (res.error)
         return response.status(500).send(APIResponse.withError(res.error.stack));

      if (!res.data.id)
         return response
            .status(404)
            .send(APIResponse.withMissingObject('game', request.params.id));

      return response.status(200).send(APIResponse.withResponse(res.data));
   });
};

export const updateGame = (request, response) => {
   Game.read(request.params.id, res => {
      if (!res.data.id) {
         return response
            .status(404)
            .send(APIResponse.withMissingObject('game', request.params.id));
      } else {
         // want to make sure we don't accidentally call this, so explicit else
         Game.update(request.params.id, request.body, res => {
            if (res.error)
               return response.status(500).send(APIResponse.withError(res.error.stack));

            return response.status(200).send(APIResponse.withResponse(res.data));
         });
      }
   });
};

export const deleteGame = (request, response) => {
   Game.delete(request.params.id, res => {
      if (res.error)
         return response.status(500).send(APIResponse.withError(res.error.stack));

      if (res.data.code)
         return response
            .status(404)
            .send(APIResponse.withMissingObject('game', request.params.id));

      return response.status(200).send(APIResponse.withResponse(res.data));
   });
};

const getErrors = game => {
   const errors = [];
   if (!game.label) errors.push('Missing game name');
   if (!game.version) errors.push('Missing game version');
   return errors.length > 0 ? errors : undefined;
};

export const parseUpdateObject = object => {
   const sets = [];
   const values = {};
   let awsObject = toAWSItem(object);
   if (!isUndefined(object.label)) {
      sets.push('label = :label');
      values[':label'] = awsObject.label;
   }
   if (!isUndefined(object.version)) {
      const versionData = getVersion(
         !isUndefined(object.version.label) ? object.version.label : object.version
      );
      object.version = versionData;
      awsObject = toAWSItem(object);
      sets.push('version = :version');
      values[':version'] = awsObject.version;
   }
   if (!isUndefined(object.is_finished)) {
      sets.push('is_finished = :is_finished');
      values[':is_finished'] = awsObject.is_finished;
   }
   if (!isUndefined(object.encounters)) {
      sets.push('encounters = :encounters');
      values[':encounters'] = awsObject.encounters;
   }
   if (!isUndefined(object.pokemons)) {
      sets.push('pokemons = :pokemons');
      values[':pokemons'] = awsObject.pokemons;
   }
   if (!isUndefined(object.gyms)) {
      sets.push('gyms = :gyms');
      values[':gyms'] = awsObject.gyms;
   }
   if (!isUndefined(object.game_rules)) {
      sets.push('game_rules = :game_rules');
      values[':game_rules'] = awsObject.game_rules;
   }
   const hasUpdates = sets.length > 0;
   return {
      updateExpression: hasUpdates ? `set ${sets.join(', ')}` : undefined,
      expressionAttributeValues: hasUpdates ? values : undefined,
   };
};

export const buildVersion = version => {
   switch (version) {
      case Version.EMERALD:
         return GameVersion.builder()
            .withArtworkUrl(Artwork.EMERALD)
            .withGeneration(Generation.GEN3)
            .withLabel('Emerald')
            .withRegions(Region.HOENN)
            .withVersion(Version.EMERALD)
            .withVersionGroup(VersionGroup.EMERALD)
            .build();
      case Version.RUBY:
         return GameVersion.builder()
            .withArtworkUrl(Artwork.RUBY)
            .withGeneration(Generation.GEN3)
            .withLabel('Ruby')
            .withRegions(Region.HOENN)
            .withVersion(Version.RUBY)
            .withVersionGroup(VersionGroup.RUBYSAPPHIRE)
            .build();
      case Version.SAPPHIRE:
         return GameVersion.builder()
            .withArtworkUrl(Artwork.SAPPHIRE)
            .withGeneration(Generation.GEN3)
            .withLabel('Sapphire')
            .withRegions(Region.HOENN)
            .withVersion(Version.SAPPHIRE)
            .withVersionGroup(VersionGroup.RUBYSAPPHIRE)
            .build();
      case Version.FIRERED:
         return GameVersion.builder()
            .withArtworkUrl(Artwork.FIRERED)
            .withGeneration(Generation.GEN3)
            .withLabel('FireRed')
            .withRegions(Region.KANTO)
            .withVersion(Version.FIRERED)
            .withVersionGroup(VersionGroup.FIREREDLEAFGREEN)
            .build();
      case Version.LEAFGREEN:
         return GameVersion.builder()
            .withArtworkUrl(Artwork.LEAFGREEN)
            .withGeneration(Generation.GEN3)
            .withLabel('LeafGreen')
            .withRegions(Region.KANTO)
            .withVersion(Version.LEAFGREEN)
            .withVersionGroup(VersionGroup.FIREREDLEAFGREEN)
            .build();
      case Version.LETSGOEEVEE:
         return GameVersion.builder()
            .withArtworkUrl(Artwork.LETSGOEEVEE)
            .withGeneration(Generation.GEN7)
            .withLabel(`Let's Go Eevee`)
            .withRegions(Region.KANTO)
            .withVersion(Version.LETSGOEEVEE)
            .withVersionGroup(VersionGroup.LETSGO)
            .build();
      case Version.LETSGOPIKACHU:
         return GameVersion.builder()
            .withArtworkUrl(Artwork.LETSGOPIKACHU)
            .withGeneration(Generation.GEN7)
            .withLabel(`Let's Go Pikachu`)
            .withRegions(Region.KANTO)
            .withVersion(Version.LETSGOPIKACHU)
            .withVersionGroup(VersionGroup.LETSGO)
            .build();
      default:
         return null;
   }
};
