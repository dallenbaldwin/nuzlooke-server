import GymBadge from '../models/gyms/GymBadge.js';
import BadgeArt from '../constants/bulbapedia/BadgeArt.js';

export default Object.freeze({
   BOULDER: GymBadge.builder()
      .withLabel('Boulder Badge')
      .withSpriteUrl(BadgeArt.BOULDER)
      .build(),
   CASCADE: GymBadge.builder()
      .withLabel('Cascade Badge')
      .withSpriteUrl(BadgeArt.CASCADE)
      .build(),
   THUNDER: GymBadge.builder()
      .withLabel('Thunder Badge')
      .withSpriteUrl(BadgeArt.THUNDER)
      .build(),
   RAINBOW: GymBadge.builder()
      .withLabel('Rainbow Badge')
      .withSpriteUrl(BadgeArt.RAINBOW)
      .build(),
   SOUL: GymBadge.builder().withLabel('Soul Badge').withSpriteUrl(BadgeArt.SOUL).build(),
   MARSH: GymBadge.builder()
      .withLabel('Marsh Badge')
      .withSpriteUrl(BadgeArt.MARSH)
      .build(),
   VOLCANO: GymBadge.builder()
      .withLabel('Volcano Badge')
      .withSpriteUrl(BadgeArt.VOLCANO)
      .build(),
   EARTH: GymBadge.builder()
      .withLabel('Earth Badge')
      .withSpriteUrl(BadgeArt.EARTH)
      .build(),
   STONE: GymBadge.builder()
      .withLabel('Stone Badge')
      .withSpriteUrl(BadgeArt.STONE)
      .build(),
   KNUCKLE: GymBadge.builder()
      .withLabel('Knuckle Badge')
      .withSpriteUrl(BadgeArt.KNUCKLE)
      .build(),
   DYNAMO: GymBadge.builder()
      .withLabel('Dynamo Badge')
      .withSpriteUrl(BadgeArt.DYNAMO)
      .build(),
   HEAT: GymBadge.builder().withLabel('Heat Badge').withSpriteUrl(BadgeArt.HEAT).build(),
   BALANCE: GymBadge.builder()
      .withLabel('Balance Badge')
      .withSpriteUrl(BadgeArt.BALANCE)
      .build(),
   FEATHER: GymBadge.builder()
      .withLabel('Feather Badge')
      .withSpriteUrl(BadgeArt.FEATHER)
      .build(),
   MIND: GymBadge.builder().withLabel('Mind Badge').withSpriteUrl(BadgeArt.MIND).build(),
   RAIN: GymBadge.builder().withLabel('Rain Badge').withSpriteUrl(BadgeArt.RAIN).build(),
});
