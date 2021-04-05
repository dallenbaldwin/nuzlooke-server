import GameVersion from './GameVersion.js';
import Version from '../constants/pokeapi/Version.js';
import Artwork from '../constants/bulbapedia/Artwork.js';
import Generation from '../constants/pokeapi/Generation.js';
import Region from '../constants/pokeapi/Region.js';
import VersionGroup from '../constants/pokeapi/VersionGroup.js';

export default Object.freeze({
   EMERALD: GameVersion.builder()
      .withArtworkUrl(Artwork.EMERALD)
      .withGeneration(Generation.GEN3)
      .withLabel('Emerald')
      .withRegions(Region.HOENN)
      .withVersion(Version.EMERALD)
      .withVersionGroup(VersionGroup.EMERALD)
      .build(),
   RUBY: GameVersion.builder()
      .withArtworkUrl(Artwork.RUBY)
      .withGeneration(Generation.GEN3)
      .withLabel('Ruby')
      .withRegions(Region.HOENN)
      .withVersion(Version.RUBY)
      .withVersionGroup(VersionGroup.RUBYSAPPHIRE)
      .build(),
   SAPPHIRE: GameVersion.builder()
      .withArtworkUrl(Artwork.SAPPHIRE)
      .withGeneration(Generation.GEN3)
      .withLabel('Sapphire')
      .withRegions(Region.HOENN)
      .withVersion(Version.SAPPHIRE)
      .withVersionGroup(VersionGroup.RUBYSAPPHIRE)
      .build(),
   FIRERED: GameVersion.builder()
      .withArtworkUrl(Artwork.FIRERED)
      .withGeneration(Generation.GEN3)
      .withLabel('FireRed')
      .withRegions(Region.KANTO)
      .withVersion(Version.FIRERED)
      .withVersionGroup(VersionGroup.FIREREDLEAFGREEN)
      .build(),
   LEAFGREEN: GameVersion.builder()
      .withArtworkUrl(Artwork.LEAFGREEN)
      .withGeneration(Generation.GEN3)
      .withLabel('LeafGreen')
      .withRegions(Region.KANTO)
      .withVersion(Version.LEAFGREEN)
      .withVersionGroup(VersionGroup.FIREREDLEAFGREEN)
      .build(),
   LETSGOEEVEE: GameVersion.builder()
      .withArtworkUrl(Artwork.LETSGOEEVEE)
      .withGeneration(Generation.GEN7)
      .withLabel(`Let's Go Eevee`)
      .withRegions(Region.KANTO)
      .withVersion(Version.LETSGOEEVEE)
      .withVersionGroup(VersionGroup.LETSGO)
      .build(),
   LETSGOPIKACHU: GameVersion.builder()
      .withArtworkUrl(Artwork.LETSGOPIKACHU)
      .withGeneration(Generation.GEN7)
      .withLabel(`Let's Go Pikachu`)
      .withRegions(Region.KANTO)
      .withVersion(Version.LETSGOPIKACHU)
      .withVersionGroup(VersionGroup.LETSGO)
      .build(),
});
