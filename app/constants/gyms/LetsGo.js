import Gym from '../../models/gyms/Gym.js';
import GymLeader from '../../models/gyms/GymLeader.js';
import GymPokemon from '../../models/pokemons/GymPokemon.js';
import GymPokemonMove from '../../models/gyms/GymPokemonMove.js';
import PokemonType from '../PokemonType.js';
import DamageClass from '../DamageClass.js';
import MovePriority from '../MovePriority.js';
import GymBadges from '../GymBadges.js';
import Sprites from '../Sprites.js';

export default class LetsGo {
   constructor() {
      this.gyms = [
         this.getBrock(),
         this.getMisty(),
         this.getSurge(),
         this.getErika(),
         this.getKoga(),
         this.getSabrina(),
         this.getBlaine(),
         this.getGiovanni(),
      ];
   }
   getBrock() {
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withSpecies('Geodude')
            .withIconUrl(Sprites.GEODUDE.icon_url)
            .withSpriteUrl(Sprites.GEODUDE.sprite_url)
            .withTypes([PokemonType.ROCK, PokemonType.GROUND])
            .withLevel(11)
            .withMoves([
               GymPokemonMove.builder()
                  .withLabel('Tackle')
                  .withDescription(
                     'A physical attack in which the user charges and slams into the target with its whole body.'
                  )
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withType(PokemonType.NORMAL)
                  .withPP(35)
                  .withPower(40)
                  .withAccuracy(100)
                  .build(),
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withSpecies('Onix')
            .withIconUrl(Sprites.ONIX.icon_url)
            .withSpriteUrl(Sprites.ONIX.sprite_url)
            .withTypes([PokemonType.ROCK, PokemonType.GROUND])
            .withLevel(12)
            .withMoves([
               GymPokemonMove.builder()
                  .withLabel('Headbutt')
                  .withDescription(
                     'The user sticks out its head and attacks by charging straight into the target. This may also make the target flinch.'
                  )
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withType(PokemonType.NORMAL)
                  .withPP(15)
                  .withPower(70)
                  .withAccuracy(100)
                  .build(),
               bindMove,
               GymPokemonMove.builder()
                  .withLabel('Rock Throw')
                  .withDescription(
                     'The user picks up and throws a small rock at the target to attack.'
                  )
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withType(PokemonType.ROCK)
                  .withPP(15)
                  .withPower(50)
                  .withAccuracy(90)
                  .build(),
            ])
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Brock')
         .withFlavorText('The Rock-Solid Pokémon Trainer!')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/e/e2/VSBrock_PE.png')
         .build();
      return Gym.builder()
         .withSortId(1)
         .withLabel('Pewter Gym')
         .withLocation('Pewter City')
         .withDominantType(PokemonType.ROCK)
         .withBadge(GymBadges.BOULDER)
         .withLeader(leader)
         .withPokemons(pokemons)
         .build();
   }
   getMisty() {
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withSpecies('Psyduck')
            .withIconUrl(Sprites.PSYDUCK.icon_url)
            .withSpriteUrl(Sprites.PSYDUCK.sprite_url)
            .withTypes([PokemonType.WATER])
            .withLevel(18)
            .withMoves([
               GymPokemonMove.builder()
                  .withLabel('Confusion')
                  .withDescription(
                     'The target is hit by a weak telekinetic force. This may also confuse the target.'
                  )
                  .withDamageClass(DamageClass.SPECIAL)
                  .withType(PokemonType.PSYCHIC)
                  .withPP(25)
                  .withPower(50)
                  .withAccuracy(100)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Water Gun')
                  .withDescription('The target is blasted with a forceful shot of water.')
                  .withDamageClass(DamageClass.SPECIAL)
                  .withType(PokemonType.WATER)
                  .withPP(25)
                  .withPower(40)
                  .withAccuracy(100)
                  .build(),
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withSpecies('Starmie')
            .withIconUrl(Sprites.STARMIE.icon_url)
            .withSpriteUrl(Sprites.STARMIE.sprite_url)
            .withTypes([PokemonType.WATER, PokemonType.PSYCHIC])
            .withLevel(19)
            .withMoves([
               GymPokemonMove.builder()
                  .withLabel('Scald')
                  .withDescription(
                     'The user shoots boiling hot water at its target. This may also leave the target with a burn.'
                  )
                  .withDamageClass(DamageClass.SPECIAL)
                  .withType(PokemonType.WATER)
                  .withPP(15)
                  .withPower(80)
                  .withAccuracy(100)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Swift')
                  .withDescription(
                     'Star-shaped rays are shot at the opposing Pokémon. This attack never misses.'
                  )
                  .withDamageClass(DamageClass.SPECIAL)
                  .withType(PokemonType.NORMAL)
                  .withPP(20)
                  .withPower(60)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Psywave')
                  .withDescription(
                     'The target is attacked with an odd psychic wave. The attack varies in intensity.'
                  )
                  .withDamageClass(DamageClass.SPECIAL)
                  .withType(PokemonType.PSYCHIC)
                  .withPP(15)
                  .withAccuracy(100)
                  .build(),
            ])
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Misty')
         .withFlavorText('The Tomboyish Mermaid!')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/0/0c/VSMisty_PE.png')
         .build();
      return Gym.builder()
         .withSortId(2)
         .withLabel('Cerulean Gym')
         .withLocation('Cerulean City')
         .withDominantType(PokemonType.WATER)
         .withBadge(GymBadges.CASCADE)
         .withLeader(leader)
         .withPokemons(pokemons)
         .build();
   }
   getSurge() {
      const thunderbolt = GymPokemonMove.builder()
         .withLabel('Thunderbolt')
         .withType(PokemonType.ELECTRIC)
         .withDamageClass(DamageClass.SPECIAL)
         .withAccuracy(100)
         .withPP(15)
         .withPower(90)
         .withDescription(
            `A strong electric blast crashes down on the target. This may also leave the target with paralysis.`
         )
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withLevel(25)
            .withTypes([PokemonType.ELECTRIC])
            .withSpecies('Voltorb')
            .withSpriteUrl(Sprites.VOLTORB.sprite_url)
            .withIconUrl(Sprites.VOLTORB.icon_url)
            .withMoves([
               thunderbolt,
               GymPokemonMove.builder()
                  .withLabel('Swift')
                  .withDamageClass(DamageClass.SPECIAL)
                  .withType(PokemonType.NORMAL)
                  .withPower(60)
                  .withPP(20)
                  .withDescription(
                     `Star-shaped rays are shot at the opposing Pokémon. This attack never misses.`
                  )
                  .build(),
               lightscreen,
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withSpecies('Magnemite')
            .withIconUrl(Sprites.MAGNEMITE.icon_url)
            .withSpriteUrl(Sprites.MAGNEMITE.sprite_url)
            .withLevel(25)
            .withTypes([PokemonType.STEEL, PokemonType.ELECTRIC])
            .withMoves([
               thunderbolt,
               GymPokemonMove.builder()
                  .withLabel('Sonic Boom')
                  .withDamageClass(DamageClass.SPECIAL)
                  .withType(PokemonType.NORMAL)
                  .withPP(20)
                  .withAccuracy(90)
                  .withDescription(
                     `The target is hit with a destructive shock wave that always inflicts 20 HP damage.`
                  )
                  .build(),
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withSpecies('Raichu')
            .withSpriteUrl(Sprites.RAICHU.sprite_url)
            .withIconUrl(Sprites.RAICHU.icon_url)
            .withLevel(26)
            .withTypes([PokemonType.ELECTRIC])
            .withMoves([
               thunderbolt,
               quickAttack,
               GymPokemonMove.builder()
                  .withLabel('Double Kick')
                  .withType(PokemonType.FIGHTING)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(30)
                  .withPower(30)
                  .withAccuracy(100)
                  .withDescription(
                     `The target is quickly kicked twice in succession using both feet.`
                  )
                  .build(),
            ])
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Lt. Surge')
         .withFlavorText('Lightning Lieutenant')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/c/c6/VSLt_Surge_PE.png')
         .build();
      return Gym.builder()
         .withSortId(3)
         .withLabel('Vermilion Gym')
         .withLocation('Vermilion City')
         .withDominantType(PokemonType.ELECTRIC)
         .withBadge(GymBadges.THUNDER)
         .withLeader(leader)
         .withPokemons(pokemons)
         .build();
   }
   getErika() {
      const megaDrain = GymPokemonMove.builder()
         .withAccuracy(100)
         .withPP(10)
         .withPower(75)
         .withDescription(
            `A nutrient-draining attack. The user's HP is restored by half the damage taken by the target.`
         )
         .withDamageClass(DamageClass.SPECIAL)
         .withType(PokemonType.GRASS)
         .withLabel('Mega Drain')
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withSpecies('Tangela')
            .withLevel(33)
            .withSpriteUrl(Sprites.TANGELA.sprite_url)
            .withIconUrl(Sprites.TANGELA.icon_url)
            .withTypes([PokemonType.GRASS])
            .withMoves([
               megaDrain,
               bindMove,
               GymPokemonMove.builder()
                  .withLabel('Sleep Powder')
                  .withAccuracy(75)
                  .withDamageClass(DamageClass.STATUS)
                  .withType(PokemonType.GRASS)
                  .withPP(15)
                  .withDescription(
                     `The user scatters a big cloud of sleep-inducing dust around the target.`
                  )
                  .build(),
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withSpecies('Weepinbell')
            .withTypes([PokemonType.GRASS, PokemonType.POISON])
            .withLevel(33)
            .withSpriteUrl(Sprites.WEEPINBEEL.sprite_url)
            .withIconUrl(Sprites.WEEPINBEEL.icon_url)
            .withMoves([megaDrain, poisonJab])
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withSpecies('Vileplume')
            .withLevel(34)
            .withTypes([PokemonType.GRASS, PokemonType.POISON])
            .withSpriteUrl(Sprites.VILEPLUME.sprite_url)
            .withIconUrl(Sprites.VILEPLUME.icon_url)
            .withMoves([megaDrain, moonblast])
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Erika')
         .withFlavorText('The Nature-Loving Princess!')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/3/35/VSErika_PE.png')
         .build();
      return Gym.builder()
         .withSortId(4)
         .withBadge(GymBadges.RAINBOW)
         .withLabel('Celadon Gym')
         .withDominantType(PokemonType.GRASS)
         .withLocation('Celadon City')
         .withLeader(leader)
         .withPokemons(pokemons)
         .build();
   }
   getKoga() {
      const toxic = GymPokemonMove.builder()
         .withLabel('Toxic')
         .withDamageClass(DamageClass.STATUS)
         .withType(PokemonType.POISON)
         .withPP(10)
         .withAccuracy(90)
         .withDescription(
            `A move that leaves the target badly poisoned. Its poison damage worsens every turn.`
         )
         .build();
      const sludgeBomb = GymPokemonMove.builder()
         .withLabel('Sludge Bomb')
         .withDamageClass(DamageClass.SPECIAL)
         .withType(PokemonType.POISON)
         .withPP(10)
         .withPower(90)
         .withAccuracy(100)
         .withDescription(
            `Unsanitary sludge is hurled at the target. This may also poison the target.`
         )
         .build();
      const protect = GymPokemonMove.builder()
         .withLabel('Protect')
         .withDamageClass(DamageClass.STATUS)
         .withType(PokemonType.NORMAL)
         .withPP(10)
         .withPriority(MovePriority.PLUS4)
         .withDescription(
            `Enables the user to evade all attacks. Its chance of failing rises if it is used in succession.`
         )
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withSpecies('Weezing')
            .withLevel(43)
            .withTypes([PokemonType.POISON])
            .withIconUrl(Sprites.WEEZING.icon_url)
            .withSpriteUrl(Sprites.WEEZING.sprite_url)
            .withMoves([
               toxic,
               protect,
               sludgeBomb,
               GymPokemonMove.builder()
                  .withLabel('Explosion')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(5)
                  .withAccuracy(100)
                  .withPower(250)
                  .withDescription(
                     `The user attacks everything around it by causing a tremendous explosion. The user faints upon using this move.`
                  )
                  .build(),
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withSpecies('Muk')
            .withLevel(43)
            .withTypes([PokemonType.POISON])
            .withIconUrl(Sprites.MUK.icon_url)
            .withSpriteUrl(Sprites.MUK.sprite_url)
            .withMoves([toxic, protect, sludgeBomb, moonblast])
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withSpecies('Golbat')
            .withLevel(43)
            .withTypes([PokemonType.POISON, PokemonType.FLYING])
            .withIconUrl(Sprites.GOLBAT.icon_url)
            .withSpriteUrl(Sprites.GOLBAT.sprite_url)
            .withMoves([
               toxic,
               protect,
               GymPokemonMove.builder()
                  .withLabel('Fly')
                  .withType(PokemonType.FLYING)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(15)
                  .withPower(90)
                  .withAccuracy(95)
                  .withDescription(
                     `The user flies up into the sky and then strikes its target on the next turn.`
                  )
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Leech Life')
                  .withType(PokemonType.BUG)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(10)
                  .withPower(80)
                  .withAccuracy(100)
                  .withDescription(
                     `The user drains the target's blood. The user's HP is restored by half the damage taken by the target.`
                  )
                  .build(),
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(4)
            .withSpecies('Venomoth')
            .withLevel(44)
            .withTypes([PokemonType.BUG, PokemonType.POISON])
            .withIconUrl(Sprites.VENOMOTH.icon_url)
            .withSpriteUrl(Sprites.VENOMOTH.sprite_url)
            .withMoves([
               sludgeBomb,
               protect,
               psychic,
               GymPokemonMove.builder()
                  .withLabel('Bug Buzz')
                  .withType(PokemonType.BUG)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(10)
                  .withPower(90)
                  .withAccuracy(100)
                  .withDescription(
                     `The user generates a damaging sound wave by vibration. This may also lower the target's Sp. Def stat.`
                  )
                  .build(),
            ])
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Koga')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/d/d8/VSKoga_PE.png')
         .withFlavorText('The Poisonous Ninja Master')
         .build();
      return Gym.builder()
         .withSortId(5)
         .withLabel('Fuchsia Gym')
         .withLocation('Fuchsia City')
         .withDominantType(PokemonType.POISON)
         .withBadge(GymBadges.SOUL)
         .withLeader(leader)
         .withPokemons(pokemons)
         .build();
   }
   getSabrina() {
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withSpecies('Mr. Mime')
            .withIconUrl(Sprites.MRMIME.icon_url)
            .withSpriteUrl(Sprites.MRMIME.sprite_url)
            .withTypes([PokemonType.PSYCHIC, PokemonType.FAIRY])
            .withLevel(43)
            .withMoves([
               psychic,
               GymPokemonMove.builder()
                  .withLabel('Reflect')
                  .withDescription(
                     `A wondrous wall of light is put up to reduce damage from physical attacks for five turns.`
                  )
                  .withDamageClass(DamageClass.STATUS)
                  .withType(PokemonType.PSYCHIC)
                  .withPP(20)
                  .build(),
               lightscreen,
               GymPokemonMove.builder()
                  .withLabel('Double Slap')
                  .withDescription(
                     `The target is slapped repeatedly, back and forth, two to five times in a row.`
                  )
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withType(PokemonType.NORMAL)
                  .withPP(10)
                  .withPower(15)
                  .withAccuracy(85)
                  .build(),
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withSpecies('Slowbro')
            .withIconUrl(Sprites.SLOWBRO.icon_url)
            .withSpriteUrl(Sprites.SLOWBRO.sprite_url)
            .withTypes([PokemonType.WATER, PokemonType.PSYCHIC])
            .withLevel(43)
            .withMoves([
               psychic,
               GymPokemonMove.builder()
                  .withLabel('Yawn')
                  .withDescription(
                     'The user lets loose a huge yawn that lulls the target into falling asleep on the next turn.'
                  )
                  .withDamageClass(DamageClass.STATUS)
                  .withType(PokemonType.NORMAL)
                  .withPP(10)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Surf')
                  .withDescription(
                     `The user attacks everything around it by swamping its surroundings with a giant wave.`
                  )
                  .withDamageClass(DamageClass.SPECIAL)
                  .withType(PokemonType.WATER)
                  .withPP(15)
                  .withPower(90)
                  .withAccuracy(100)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Calm Mind')
                  .withDescription(
                     'The user quietly focuses its mind and calms its spirit to raise its Sp. Atk and Sp. Def stats.'
                  )
                  .withDamageClass(DamageClass.STATUS)
                  .withType(PokemonType.PSYCHIC)
                  .withPP(20)
                  .build(),
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withSpecies('Jynx')
            .withIconUrl(Sprites.JYNX.icon_url)
            .withSpriteUrl(Sprites.JYNX.sprite_url)
            .withTypes([PokemonType.ICE, PokemonType.PSYCHIC])
            .withLevel(43)
            .withMoves([
               psychic,
               GymPokemonMove.builder()
                  .withLabel('Lovely Kiss')
                  .withDescription(
                     `With a scary face, the user tries to force a kiss on the target. If it succeeds, the target falls asleep.`
                  )
                  .withDamageClass(DamageClass.STATUS)
                  .withType(PokemonType.NORMAL)
                  .withPP(10)
                  .withAccuracy(75)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Ice Punch')
                  .withDescription(
                     'The target is punched with an icy fist. This may also leave the target frozen.'
                  )
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withType(PokemonType.ICE)
                  .withPP(15)
                  .withPower(75)
                  .withAccuracy(100)
                  .build(),
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(4)
            .withSpecies('Alakazam')
            .withIconUrl(Sprites.ALAKAZAM.icon_url)
            .withSpriteUrl(Sprites.ALAKAZAM.sprite_url)
            .withTypes([PokemonType.PSYCHIC])
            .withLevel(44)
            .withMoves([
               psychic,
               GymPokemonMove.builder()
                  .withLabel('Night Shade')
                  .withDescription(
                     `The user makes the target see a frightening mirage. It inflicts damage equal to the user's level.`
                  )
                  .withDamageClass(DamageClass.SPECIAL)
                  .withType(PokemonType.GHOST)
                  .withPP(15)
                  .withAccuracy(100)
                  .build(),
            ])
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Sabrina')
         .withFlavorText('The Master of Psychic Pokémon!')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/2/20/VSSabrina_PE.png')
         .build();
      return Gym.builder()
         .withSortId(6)
         .withLabel('Saffron Gym')
         .withLocation('Saffron City')
         .withDominantType(PokemonType.PSYCHIC)
         .withBadge(GymBadges.MARSH)
         .withLeader(leader)
         .withPokemons(pokemons)
         .build();
   }
   getBlaine() {
      const flareBlitz = GymPokemonMove.builder()
         .withLabel('Flare Blitz')
         .withDescription(
            'The user cloaks itself in fire and charges the target. This also damages the user quite a lot. This may leave the target with a burn.'
         )
         .withDamageClass(DamageClass.PHYSICAL)
         .withType(PokemonType.FIRE)
         .withPP(15)
         .withPower(120)
         .withAccuracy(100)
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withSpecies('Magmar')
            .withIconUrl(Sprites.MAGMAR.icon_url)
            .withSpriteUrl(Sprites.MAGMAR.sprite_url)
            .withTypes([PokemonType.FIRE])
            .withLevel(47)
            .withMoves([
               GymPokemonMove.builder()
                  .withLabel('Flamethrower')
                  .withDescription(
                     'The target is scorched with an intense blast of fire. This may also leave the target with a burn.'
                  )
                  .withDamageClass(DamageClass.SPECIAL)
                  .withType(PokemonType.FIRE)
                  .withPP(15)
                  .withPower(90)
                  .withAccuracy(100)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Low Kick')
                  .withDescription(
                     `A powerful low kick that makes the target fall over. The heavier the target, the greater the move's power.`
                  )
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withType(PokemonType.FIGHTING)
                  .withPP(20)
                  .withAccuracy(100)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Confuse Ray')
                  .withDescription(
                     'The target is exposed to a sinister ray that triggers confusion.'
                  )
                  .withDamageClass(DamageClass.STATUS)
                  .withType(PokemonType.GHOST)
                  .withPP(10)
                  .withAccuracy(100)
                  .build(),
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withSpecies('Rapidash')
            .withIconUrl(Sprites.RAPIDASH.icon_url)
            .withSpriteUrl(Sprites.RAPIDASH.sprite_url)
            .withTypes([PokemonType.FIRE])
            .withLevel(47)
            .withMoves([
               flareBlitz,
               quickAttack,
               GymPokemonMove.builder()
                  .withLabel('Fury Attack')
                  .withDescription(
                     'The target is jabbed repeatedly with a horn or beak two to five times in a row.'
                  )
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withType(PokemonType.NORMAL)
                  .withPP(20)
                  .withPower(15)
                  .withAccuracy(85)
                  .build(),
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withSpecies('Ninetales')
            .withIconUrl(Sprites.NINETALES.icon_url)
            .withSpriteUrl(Sprites.NINETALES.sprite_url)
            .withTypes([PokemonType.FIRE])
            .withLevel(47)
            .withMoves([
               GymPokemonMove.builder()
                  .withLabel('Fire Blast')
                  .withDescription(
                     'The target is attacked with an intense blast of all-consuming fire. This may also leave the target with a burn.'
                  )
                  .withDamageClass(DamageClass.SPECIAL)
                  .withType(PokemonType.FIRE)
                  .withPP(5)
                  .withPower(110)
                  .withAccuracy(85)
                  .build(),
               quickAttack,
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(4)
            .withSpecies('Arcanine')
            .withIconUrl(Sprites.ARCANINE.icon_url)
            .withSpriteUrl(Sprites.ARCANINE.sprite_url)
            .withTypes([PokemonType.FIRE])
            .withLevel(48)
            .withMoves([
               flareBlitz,
               GymPokemonMove.builder()
                  .withLabel('Outrage')
                  .withDescription(
                     'The user rampages and attacks for two to three turns. The user then becomes confused.'
                  )
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withType(PokemonType.DRAGON)
                  .withPP(10)
                  .withPower(120)
                  .withAccuracy(100)
                  .build(),
               crunch,
            ])
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Blaine')
         .withFlavorText('The Hotheaded Quiz Master!')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/1/11/VSBlaine_PE.png')
         .build();
      return Gym.builder()
         .withSortId(7)
         .withLabel('Cinnabar Gym')
         .withLocation('Cinnabar Island')
         .withDominantType(PokemonType.FIRE)
         .withBadge(GymBadges.VOLCANO)
         .withLeader(leader)
         .withPokemons(pokemons)
         .build();
   }
   getGiovanni() {
      const earthquake = GymPokemonMove.builder()
         .withLabel('Earthquake')
         .withDescription(
            'The user sets off an earthquake that strikes every Pokémon around it.'
         )
         .withDamageClass(DamageClass.PHYSICAL)
         .withType(PokemonType.GROUND)
         .withPP(10)
         .withPower(100)
         .withAccuracy(100)
         .build();
      const megahorn = GymPokemonMove.builder()
         .withLabel('Megahorn')
         .withDescription(
            'Using its tough and impressive horn, the user rams into the target with no letup.'
         )
         .withDamageClass(DamageClass.PHYSICAL)
         .withType(PokemonType.BUG)
         .withPP(10)
         .withPower(120)
         .withAccuracy(85)
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withSpecies('Dugtrio')
            .withIconUrl(Sprites.DUGTRIO.icon_url)
            .withSpriteUrl(Sprites.DUGTRIO.sprite_url)
            .withTypes([PokemonType.GROUND])
            .withLevel(49)
            .withMoves([
               GymPokemonMove.withLabel('Slash')
                  .withDescription(
                     'The target is attacked with a slash of claws or blades. Critical hits land more easily.'
                  )
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withType(PokemonType.NORMAL)
                  .withPP(20)
                  .withPower(70)
                  .withAccuracy(100)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Sucker Punch')
                  .withDescription(
                     'This move enables the user to attack first. This move fails if the target is not readying an attack.'
                  )
                  .withPriority(MovePriority.PLUS1)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withType(PokemonType.DARK)
                  .withPP(5)
                  .withPower(70)
                  .withAccuracy(100)
                  .build(),
               earthquake,
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withSpecies('Nidoqueen')
            .withIconUrl(Sprites.NIDOQUEEN.icon_url)
            .withSpriteUrl(Sprites.NIDOQUEEN.sprite_url)
            .withTypes([PokemonType.POISON, PokemonType.GROUND])
            .withLevel(49)
            .withMoves([
               GymPokemonMove.builder()
                  .withLabel('Super Fang')
                  .withDescription(
                     `The user chomps hard on the target with its sharp front fangs. This cuts the target's HP in half.`
                  )
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withType(PokemonType.NORMAL)
                  .withPP(10)
                  .withAccuracy(90)
                  .build(),
               earthquake,
               crunch,
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withSpecies('Nidoking')
            .withIconUrl(Sprites.NIDOKING.icon_url)
            .withSpriteUrl(Sprites.NIDOKING.sprite_url)
            .withTypes([PokemonType.POISON, PokemonType.GROUND])
            .withLevel(49)
            .withMoves([
               megahorn,
               earthquake,
               poisonJab,
               GymPokemonMove.builder()
                  .withLabel('Horn Drill')
                  .withDescription(
                     'The user stabs the target with a horn that rotates like a drill. The target faints instantly if this attack hits.'
                  )
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withType(PokemonType.NORMAL)
                  .withPP(5)
                  .withAccuracy(30)
                  .build(),
            ])
            .build(),
         GymPokemon.builder()
            .withSortId(4)
            .withSpecies('Rhydon')
            .withIconUrl(Sprites.RHYDON.icon_url)
            .withSpriteUrl(Sprites.RHYDON.sprite_url)
            .withTypes([PokemonType.GROUND, PokemonType.ROCK])
            .withLevel(50)
            .withMoves([
               earthquake,
               GymPokemonMove.builder()
                  .withLabel('Rock Slide')
                  .withDescription(
                     'Large boulders are hurled at the opposing Pokémon to inflict damage. This may also make the opposing Pokémon flinch.'
                  )
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withType(PokemonType.ROCK)
                  .withPP(10)
                  .withPower(75)
                  .withAccuracy(90)
                  .build(),
               megahorn,
            ])
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Giovanni')
         .withFlavorText('The Self-Proclaimed Strongest Trainer')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/4/4a/VSGiovanni_PE.png')
         .build();
      return Gym.builder()
         .withSortId(8)
         .withLabel('Viridian Gym')
         .withLocation('Viridian City')
         .withDominantType(PokemonType.GROUND)
         .withBadge(GymBadges.EARTH)
         .withLeader(leader)
         .withPokemons(pokemons)
         .build();
   }
}

const poisonJab = GymPokemonMove.builder()
   .withLabel('Poison Jab')
   .withDescription(
      'The target is stabbed with a tentacle or arm steeped in poison. This may also poison the target.'
   )
   .withDamageClass(DamageClass.PHYSICAL)
   .withType(PokemonType.POISON)
   .withPP(20)
   .withPower(80)
   .withAccuracy(100)
   .build();

const lightscreen = GymPokemonMove.builder()
   .withLabel('Light Screen')
   .withDescription(
      `A wondrous wall of light is put up to reduce damage from special attacks for five turns.`
   )
   .withDamageClass(DamageClass.STATUS)
   .withType(PokemonType.PSYCHIC)
   .withPP(30)
   .build();

const quickAttack = GymPokemonMove.builder()
   .withLabel('Quick Attack')
   .withDescription(
      'The user lunges at the target at a speed that makes it almost invisible. This move always goes first.'
   )
   .withPriority(MovePriority.PLUS1)
   .withDamageClass(DamageClass.PHYSICAL)
   .withType(PokemonType.NORMAL)
   .withPP(30)
   .withPower(40)
   .withAccuracy(100)
   .build();

const crunch = GymPokemonMove.builder()
   .withLabel('Crunch')
   .withDescription(
      `The user crunches up the target with sharp fangs. This may also lower the target's Defense stat.`
   )
   .withDamageClass(DamageClass.PHYSICAL)
   .withType(PokemonType.DARK)
   .withPP(15)
   .withPower(80)
   .withAccuracy(100)
   .build();

const bindMove = GymPokemonMove.builder()
   .withLabel('Bind')
   .withDescription(
      'Things such as long bodies or tentacles are used to bind and squeeze the target for four to five turns.'
   )
   .withDamageClass(DamageClass.PHYSICAL)
   .withType(PokemonType.NORMAL)
   .withPP(20)
   .withPower(15)
   .withAccuracy(85)
   .build();

const psychic = GymPokemonMove.builder()
   .withLabel('Psychic')
   .withDescription(
      `The target is hit by a strong telekinetic force. This may also lower the target's Sp. Def stat.`
   )
   .withDamageClass(DamageClass.SPECIAL)
   .withType(PokemonType.PSYCHIC)
   .withPP(10)
   .withPower(90)
   .withAccuracy(100)
   .build();

const moonblast = GymPokemonMove.builder()
   .withLabel('Moonblast')
   .withAccuracy(100)
   .withPP(15)
   .withPower(95)
   .withDamageClass(DamageClass.SPECIAL)
   .withType(PokemonType.FAIRY)
   .withDescription(
      `Borrowing the power of the moon, the user attacks the target. This may also lower the target's Sp. Atk stat.`
   )
   .build();
