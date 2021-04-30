import GameVersion from '../models/game/GameVersion.js';
import Version from './pokeapi/Version.js';
import CoverArt from './bulbapedia/CoverArt.js';
import Generation from './pokeapi/Generation.js';
import Region from './pokeapi/Region.js';
import VersionGroup from './pokeapi/VersionGroup.js';

export default Object.freeze({
   EMERALD: GameVersion.builder()
      .withCoverArt(CoverArt.EMERALD)
      .withGeneration(Generation.GEN3)
      .withLabel('Emerald')
      .withRegions(Region.HOENN)
      .withVersion(Version.EMERALD)
      .withVersionGroup(VersionGroup.EMERALD)
      .build(),
   RUBY: GameVersion.builder()
      .withCoverArt(CoverArt.RUBY)
      .withGeneration(Generation.GEN3)
      .withLabel('Ruby')
      .withRegions(Region.HOENN)
      .withVersion(Version.RUBY)
      .withVersionGroup(VersionGroup.RUBYSAPPHIRE)
      .build(),
   SAPPHIRE: GameVersion.builder()
      .withCoverArt(CoverArt.SAPPHIRE)
      .withGeneration(Generation.GEN3)
      .withLabel('Sapphire')
      .withRegions(Region.HOENN)
      .withVersion(Version.SAPPHIRE)
      .withVersionGroup(VersionGroup.RUBYSAPPHIRE)
      .build(),
   FIRERED: GameVersion.builder()
      .withCoverArt(CoverArt.FIRERED)
      .withGeneration(Generation.GEN3)
      .withLabel('FireRed')
      .withRegions(Region.KANTO)
      .withVersion(Version.FIRERED)
      .withVersionGroup(VersionGroup.FIREREDLEAFGREEN)
      .build(),
   LEAFGREEN: GameVersion.builder()
      .withCoverArt(CoverArt.LEAFGREEN)
      .withGeneration(Generation.GEN3)
      .withLabel('LeafGreen')
      .withRegions(Region.KANTO)
      .withVersion(Version.LEAFGREEN)
      .withVersionGroup(VersionGroup.FIREREDLEAFGREEN)
      .build(),
   LETSGOEEVEE: GameVersion.builder()
      .withCoverArt(CoverArt.LETSGOEEVEE)
      .withGeneration(Generation.GEN7)
      .withLabel(`Let's Go Eevee`)
      .withRegions(Region.KANTO)
      .withVersion(Version.LETSGOEEVEE)
      .withVersionGroup(VersionGroup.LETSGO)
      .build(),
   LETSGOPIKACHU: GameVersion.builder()
      .withCoverArt(CoverArt.LETSGOPIKACHU)
      .withGeneration(Generation.GEN7)
      .withLabel(`Let's Go Pikachu`)
      .withRegions(Region.KANTO)
      .withVersion(Version.LETSGOPIKACHU)
      .withVersionGroup(VersionGroup.LETSGO)
      .build(),
});
