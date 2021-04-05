import Gym from '../../models/gyms/Gym.js';
import GymBadges from '../GymBadges.js';
import GymLeader from '../../models/gyms/GymLeader.js';
import GymPokemon from '../../models/pokemons/GymPokemon.js';
import GymPokemonMove from '../../models/gyms/GymPokemonMove.js';
import PokemonType from '../PokemonType.js';
import DamageClass from '../DamageClass.js';
import MovePriority from '../MovePriority.js';
import Sprites from '../Sprites.js';

export default class RubySapphire {
   constructor() {
      this.gyms = [
         this.getRoxanne(),
         this.getBrawly(),
         this.getWattson(),
         this.getFlannery(),
         this.getNorman(),
         this.getWinona(),
         this.getTateLiza(),
         this.getWallace(),
      ];
   }
   getRoxanne() {
      const tackle = GymPokemonMove.builder()
         .withAccuracy(95)
         .withDamageClass(DamageClass.PHYSICAL)
         .withDescription(`Charges the foe with a full-body tackle.`)
         .withLabel('Tackle')
         .withPP(35)
         .withPower(35)
         .withType(PokemonType.NORMAL)
         .build();
      const rockThrow = GymPokemonMove.builder()
         .withAccuracy(90)
         .withDamageClass(DamageClass.PHYSICAL)
         .withDescription('Throws small rocks to strike the foe.')
         .withLabel('Rock Throw')
         .withPP(15)
         .withPower(50)
         .withType(PokemonType.ROCK)
         .build();
      const rockTomb = GymPokemonMove.builder()
         .withAccuracy(80)
         .withDamageClass(DamageClass.PHYSICAL)
         .withDescription(`Stops the foe from moving with rocks. May lower Speed.`)
         .withLabel('Rock Tomb')
         .withPP(10)
         .withPower(60)
         .withType(PokemonType.ROCK)
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withLevel(14)
            .withAbility('Sturdy')
            .withIconUrl(Sprites.GEODUDE.icon_url)
            .withSpecies('Geodude')
            .withSpriteUrl(Sprites.GEODUDE.sprite_url)
            .withTypes(PokemonType.ROCK, PokemonType.GROUND)
            .withMoves(
               tackle,
               GymPokemonMove.builder()
                  .withDescription(`Curls up to conceal weak spots and raise Defense.`)
                  .withLabel('Defense Curl')
                  .withPP(40)
                  .withDamageClass(DamageClass.STATUS)
                  .withType(PokemonType.NORMAL)
                  .build(),
               rockThrow,
               rockTomb
            )
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withLevel(15)
            .withAbility('Sturdy')
            .withIconUrl(Sprites.NOSEPASS.icon_url)
            .withSpecies('Nosepass')
            .withSpriteUrl(Sprites.NOSEPASS.sprite_url)
            .withTypes(PokemonType.ROCK)
            .withMoves(
               tackle,
               GymPokemonMove.builder()
                  .withLabel('Harden')
                  .withDamageClass(DamageClass.STATUS)
                  .withDescription(`Stiffens the body's muscles to raise Defense.`)
                  .withPP(30)
                  .withType(PokemonType.NORMAL)
                  .build(),
               rockThrow,
               rockTomb
            )
            .build(),
      ];
      const leader = GymLeader.builder()
         .withFlavorText('The Rock-Loving Honors Student')
         .withLabel('Roxanne')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/e/ef/Spr_RS_Roxanne.png')
         .build();
      return Gym.builder()
         .withBadge(GymBadges.STONE)
         .withDominantType(PokemonType.ROCK)
         .withLabel('Rustboro Gym')
         .withLeader(leader)
         .withLocation('Rustboro City')
         .withPokemons(pokemons)
         .withSortId(1)
         .build();
   }
   getBrawly() {
      const bulkUp = GymPokemonMove.builder()
         .withLabel('Bulk Up')
         .withType(PokemonType.FIGHTING)
         .withDamageClass(DamageClass.STATUS)
         .withPP(20)
         .withDescription('Bulks up the body to boost both Attack & Defense.')
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withAbility('Guts')
            .withLevel(17)
            .withMoves(
               bulkUp,
               GymPokemonMove.builder()
                  .withLabel('Leer')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(30)
                  .withAccuracy(100)
                  .withDescription('Frightens the foe with a leer to lower Defense.')
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Karate Chop')
                  .withType(PokemonType.FIGHTING)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(25)
                  .withPower(50)
                  .withAccuracy(100)
                  .withDescription('A chopping attack with a high critical-hit ratio.')
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Seismic Toss')
                  .withType(PokemonType.FIGHTING)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withAccuracy(100)
                  .withDescription(`Inflicts damage identical to the user's level.`)
                  .build()
            )
            .withTypes(PokemonType.FIGHTING)
            .withIconUrl(Sprites.MACHOP.icon_url)
            .withSpriteUrl(Sprites.MACHOP.sprite_url)
            .withSpecies('Machop')
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Guts')
            .withLevel(18)
            .withMoves(
               bulkUp,
               GymPokemonMove.builder()
                  .withLabel('Knock Off')
                  .withType(PokemonType.DARK)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withPower(20)
                  .withDescription(`Knocks down the foe's held item to prevent its use.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Arm Thrust')
                  .withType(PokemonType.FIGHTING)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withPower(15)
                  .withAccuracy(100)
                  .withDescription(
                     `Straight-arm punches that strike the foe 2 to 5 times.`
                  )
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Sand-Attack')
                  .withType(PokemonType.GROUND)
                  .withDamageClass(DamageClass.STATUS)
                  .withAccuracy(100)
                  .withDescription(
                     `Reduces the foe's accuracy by hurling sand in its face.`
                  )
                  .build()
            )
            .withTypes(PokemonType.FIGHTING)
            .withIconUrl(Sprites.MAKUHITA.icon_url)
            .withSpriteUrl(Sprites.MAKUHITA.sprite_url)
            .withSpecies('Makuhita')
            .build(),
      ];
      const leader = GymLeader.builder()
         .withFlavorText('A big wave in fighting')
         .withLabel('Brawly')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/9/92/Spr_RS_Brawly.png')
         .build();
      return Gym.builder()
         .withBadge(GymBadges.KNUCKLE)
         .withDominantType(PokemonType.FIGHTING)
         .withLabel('Dewford Gym')
         .withLeader(leader)
         .withLocation('Dewford Town')
         .withPokemons(pokemons)
         .withSortId(2)
         .build();
   }
   getWattson() {
      const sonicBoom = GymPokemonMove.builder()
         .withLabel('SonicBoom')
         .withType(PokemonType.NORMAL)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(20)
         .withAccuracy(90)
         .withDescription('Launches shock waves that always inflict 20 HP damage.')
         .build();
      const thunderWave = GymPokemonMove.builder()
         .withLabel('Thunder Wave')
         .withType(PokemonType.ELECTRIC)
         .withDamageClass(DamageClass.STATUS)
         .withPP(20)
         .withAccuracy(100)
         .withDescription('A weak jolt of electricity that paralyzes the foe.')
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withAbility('Magnet Pull')
            .withLevel(22)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('ThunderShock')
                  .withType(PokemonType.ELECTRIC)
                  .withAccuracy(100)
                  .withPP(30)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPower(40)
                  .withDescription(`An electrical attack that may paralyze the foe.`)
                  .build(),
               supersonic,
               sonicBoom,
               thunderWave
            )
            .withSpecies('Magnemite')
            .withTypes(PokemonType.ELECTRIC, PokemonType.STEEL)
            .withIconUrl(Sprites.MAGNEMITE.icon_url)
            .withSpriteUrl(Sprites.MAGNEMITE.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Soundproof')
            .withLevel(20)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Rollout')
                  .withType(PokemonType.ROCK)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withPower(30)
                  .withAccuracy(90)
                  .withDescription(`An attack lasting 5 turns with rising intensity.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Spark')
                  .withType(PokemonType.ELECTRIC)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withPower(65)
                  .withAccuracy(100)
                  .withDescription(`An electrified tackle that may paralyze the foe.`)
                  .build(),
               sonicBoom,
               GymPokemonMove.builder()
                  .withLabel('Selfdestruct')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(5)
                  .withPower(200)
                  .withAccuracy(100)
                  .withDescription(`Inflicts severe damage but makes the user faint.`)
                  .build()
            )
            .withSpecies('Voltorb')
            .withTypes(PokemonType.ELECTRIC)
            .withIconUrl(Sprites.VOLTORB.icon_url)
            .withSpriteUrl(Sprites.VOLTORB.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withAbility('Magnet Pull')
            .withLevel(23)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Shock Wave')
                  .withType(PokemonType.ELECTRIC)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(20)
                  .withPower(60)
                  .withDescription(
                     `Zaps the foe with a jolt of electricity that never misses.`
                  )
                  .build(),
               supersonic,
               sonicBoom,
               thunderWave
            )
            .withSpecies('Magneton')
            .withTypes(PokemonType.ELECTRIC, PokemonType.STEEL)
            .withIconUrl(Sprites.MAGNETON.icon_url)
            .withSpriteUrl(Sprites.MAGNETON.sprite_url)
            .build(),
      ];
      const leader = GymLeader.builder()
         .withFlavorText('The cheerfully electrifying man!')
         .withLabel('Wattson')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/b/b2/Spr_RS_Wattson.png')
         .build();
      return Gym.builder()
         .withBadge(GymBadges.DYNAMO)
         .withDominantType(PokemonType.ELECTRIC)
         .withLabel('Mauville Gym')
         .withLeader(leader)
         .withLocation('Mauville City')
         .withPokemons(pokemons)
         .withSortId(3)
         .build();
   }
   getFlannery() {
      const overheat = GymPokemonMove.builder()
         .withLabel('Overheat')
         .withType(PokemonType.FIRE)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(5)
         .withPower(140)
         .withAccuracy(90)
         .withDescription(`Enables full-power attack, but sharply lowers the Sp.Atk.`)
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withAbility('Magma Armor')
            .withLevel(26)
            .withMoves(
               overheat,
               GymPokemonMove.builder()
                  .withLabel('Smog')
                  .withType(PokemonType.POISON)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(20)
                  .withPower(20)
                  .withAccuracy(70)
                  .withDescription(`An exhaust-gas attack that may also poison.`)
                  .build(),
               lightScreen,
               sunnyDay
            )
            .withIconUrl(Sprites.SLUGMA.icon_url)
            .withSpriteUrl(Sprites.SLUGMA.sprite_url)
            .withTypes(PokemonType.FIRE)
            .withSpecies('Slugma')
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Magma Armor')
            .withLevel(26)
            .withMoves(
               flamethrower,
               GymPokemonMove.builder()
                  .withLabel('Rock Slide')
                  .withType(PokemonType.ROCK)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(10)
                  .withPower(75)
                  .withAccuracy(90)
                  .withDescription(`Large boulders are hurled. May cause flinching.`)
                  .build(),
               lightScreen,
               sunnyDay
            )
            .withIconUrl(Sprites.SLUGMA.icon_url)
            .withSpriteUrl(Sprites.SLUGMA.sprite_url)
            .withTypes(PokemonType.FIRE)
            .withSpecies('Slugma')
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withAbility('White Smoke')
            .withLevel(28)
            .withMoves(overheat, bodySlam, flail, attract)
            .withTypes(PokemonType.FIRE)
            .withIconUrl(Sprites.TORKOAL.icon_url)
            .withSpriteUrl(Sprites.TORKOAL.sprite_url)
            .withSpecies('Torkoal')
            .build(),
      ];
      const leader = GymLeader.builder()
         .withFlavorText('One with a fiery passion that burns!')
         .withLabel('Flannery')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/b/be/Spr_RS_Flannery.png')
         .build();
      return Gym.builder()
         .withBadge(GymBadges.HEAT)
         .withDominantType(PokemonType.FIRE)
         .withLabel('Lavaridge Gym')
         .withLeader(leader)
         .withLocation('Lavaridge Town')
         .withPokemons(pokemons)
         .withSortId(4)
         .build();
   }
   getNorman() {
      const facade = GymPokemonMove.builder()
         .withLabel('Facade')
         .withType(PokemonType.NORMAL)
         .withDamageClass(DamageClass.PHYSICAL)
         .withPP(20)
         .withPower(70)
         .withAccuracy(100)
         .withDescription(`Raises Attack when poisoned, burned, or paralyzed.`)
         .build();
      const faintAttack = GymPokemonMove.builder()
         .withLabel('Faint Attack')
         .withType(PokemonType.DARK)
         .withDamageClass(DamageClass.PHYSICAL)
         .withPP(20)
         .withPower(60)
         .withDescription(`Draws the foe close, then strikes without fail.`)
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withAbility('Truant')
            .withLevel(28)
            .withMoves(
               encore,
               facade,
               GymPokemonMove.builder()
                  .withLabel('Yawn')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(10)
                  .withDescription(
                     `Lulls the foe into yawning, then sleeping the next turn.`
                  )
                  .build(),
               faintAttack
            )
            .withSpecies('Slaking')
            .withTypes(PokemonType.NORMAL)
            .withIconUrl(Sprites.SLAKING.icon_url)
            .withSpriteUrl(Sprites.SLAKING.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Vital Spirit')
            .withLevel(30)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Slash')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withPower(70)
                  .withAccuracy(100)
                  .withDescription(
                     `Slashes with claws, etc. Has a high critical-hit ratio.`
                  )
                  .build(),
               faintAttack,
               facade,
               encore
            )
            .withSpecies('Vigoroth')
            .withTypes(PokemonType.NORMAL)
            .withIconUrl(Sprites.VIGOROTH.icon_url)
            .withSpriteUrl(Sprites.VIGOROTH.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withAbility('Truant')
            .withLevel(31)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Focus Punch')
                  .withType(PokemonType.FIGHTING)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withPower(150)
                  .withAccuracy(100)
                  .withPriority(MovePriority.MINUS3)
                  .withDescription(`Powerful, but makes the user flinch if hit by foe.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Slack Off')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(10)
                  .withDescription(`Slacks off and restores half the maximum HP.`)
                  .build(),
               facade,
               faintAttack
            )
            .withSpecies('Slaking')
            .withTypes(PokemonType.NORMAL)
            .withIconUrl(Sprites.SLAKING.icon_url)
            .withSpriteUrl(Sprites.SLAKING.sprite_url)
            .build(),
      ];
      const leader = GymLeader.builder()
         .withFlavorText('A man in pursuit of power!')
         .withLabel('Norman')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/7/75/Spr_RS_Norman.png')
         .build();
      return Gym.builder()
         .withBadge(GymBadges.BALANCE)
         .withDominantType(PokemonType.NORMAL)
         .withLabel('Petalburg Gym')
         .withLeader(leader)
         .withLocation('Petalburg City')
         .withPokemons(pokemons)
         .withSortId(5)
         .build();
   }
   getWinona() {
      const aerialAce = GymPokemonMove.builder()
         .withLabel('Aerial Ace')
         .withType(PokemonType.FLYING)
         .withDamageClass(DamageClass.PHYSICAL)
         .withPP(20)
         .withPower(60)
         .withDescription(`An extremely fast attack that can't be avoided.`)
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withAbility('Guts')
            .withLevel(31)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Quick Attack')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(30)
                  .withPower(40)
                  .withAccuracy(100)
                  .withPriority(MovePriority.PLUS1)
                  .withDescription(`An extremely fast attack that always strikes first.`)
                  .build(),
               aerialAce,
               GymPokemonMove.builder()
                  .withLabel('Double Team')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(15)
                  .withDescription(`Creates illusory copies to raise evasiveness.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Endeavor')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(5)
                  .withAccuracy(100)
                  .withDescription(
                     `Gains power if the user's HP is lower than the foe's HP.`
                  )
                  .build()
            )
            .withTypes(PokemonType.NORMAL, PokemonType.FLYING)
            .withSpecies('Swellow')
            .withIconUrl(Sprites.SWELLOW.icon_url)
            .withSpriteUrl(Sprites.SWELLOW.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Keen Eye')
            .withLevel(30)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Water Gun')
                  .withType(PokemonType.WATER)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(25)
                  .withPower(40)
                  .withAccuracy(100)
                  .withDescription(`Squirts water to attack the foe.`)
                  .build(),
               supersonic,
               GymPokemonMove.builder()
                  .withLabel('Protect')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(10)
                  .withPriority(MovePriority.PLUS3)
                  .withDescription(
                     `Negates all damage, but may fail if used in succession.`
                  )
                  .build(),
               aerialAce
            )
            .withTypes(PokemonType.WATER, PokemonType.FLYING)
            .withSpecies('Pelipper')
            .withIconUrl(Sprites.PELIPPER.icon_url)
            .withSpriteUrl(Sprites.PELIPPER.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withAbility('Keen Eye')
            .withLevel(32)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Sand Attack')
                  .withType(PokemonType.GROUND)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(15)
                  .withAccuracy(100)
                  .withDescription(
                     `Reduces the foe's accuracy by hurling sand in its face.`
                  )
                  .build(),
               furyAttack,
               GymPokemonMove.builder()
                  .withLabel('Steel Wing')
                  .withType(PokemonType.STEEL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(25)
                  .withPower(70)
                  .withAccuracy(90)
                  .withDescription(`Spreads hard-edged wings and slams into the foe.`)
                  .build(),
               aerialAce
            )
            .withTypes(PokemonType.STEEL, PokemonType.FLYING)
            .withSpecies('Skarmory')
            .withIconUrl(Sprites.SKARMORY.icon_url)
            .withSpriteUrl(Sprites.SKARMORY.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(4)
            .withAbility('Natural Cure')
            .withLevel(33)
            .withMoves(
               earthquake,
               GymPokemonMove.builder()
                  .withLabel('DragonBreath')
                  .withType(PokemonType.DRAGON)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(20)
                  .withPower(60)
                  .withAccuracy(100)
                  .withDescription(`Strikes the foe with an incredible blast of breath.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Dragon Dance')
                  .withType(PokemonType.DRAGON)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(20)
                  .withDescription(`A mystical dance that ups Attack and Speed.`)
                  .build(),
               aerialAce
            )
            .withTypes(PokemonType.DRAGON, PokemonType.FLYING)
            .withSpecies('Altaria')
            .withIconUrl(Sprites.ALTARIA.icon_url)
            .withSpriteUrl(Sprites.ALTARIA.sprite_url)
            .build(),
      ];
      const leader = GymLeader.builder()
         .withFlavorText('The bird user taking flight into the world.')
         .withLabel('Winona')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/0/0e/Spr_RS_Winona.png')
         .build();
      return Gym.builder()
         .withBadge(GymBadges.FEATHER)
         .withDominantType(PokemonType.FLYING)
         .withLabel('Fortree Gym')
         .withLeader(leader)
         .withLocation('Fortree City')
         .withPokemons(pokemons)
         .withSortId(6)
         .build();
   }
   getTateLiza() {
      const psychic = GymPokemonMove.builder()
         .withLabel('Psychic')
         .withType(PokemonType.PSYCHIC)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(10)
         .withPower(90)
         .withAccuracy(100)
         .withDescription(`A powerful psychic attack that may lower Sp. Def.`)
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withAbility('Levitate')
            .withLevel(42)
            .withMoves(
               lightScreen,
               psychic,
               GymPokemonMove.builder()
                  .withLabel('Hypnosis')
                  .withType(PokemonType.PSYCHIC)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(20)
                  .withAccuracy(60)
                  .withDescription(`A hypnotizing move that may induce sleep.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Calm Mind')
                  .withType(PokemonType.PSYCHIC)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(20)
                  .withDescription(`Raises Sp. Atk and Sp. Def by focusing the mind.`)
                  .build()
            )
            .withSpecies('Lunatone')
            .withTypes(PokemonType.ROCK, PokemonType.PSYCHIC)
            .withIconUrl(Sprites.LUNATONE.icon_url)
            .withSpriteUrl(Sprites.LUNATONE.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Levitate')
            .withLevel(42)
            .withMoves(
               sunnyDay,
               GymPokemonMove.builder()
                  .withLabel('SolarBeam')
                  .withType(PokemonType.GRASS)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(10)
                  .withPower(120)
                  .withAccuracy(100)
                  .withDescription(
                     `Absorbs sunlight in the 1st turn, then attacks next turn.`
                  )
                  .build(),
               psychic,
               flamethrower
            )
            .withSpecies('Solrock')
            .withTypes(PokemonType.ROCK, PokemonType.PSYCHIC)
            .withIconUrl(Sprites.SOLROCK.icon_url)
            .withSpriteUrl(Sprites.SOLROCK.sprite_url)
            .build(),
      ];
      const leader = GymLeader.builder()
         .withFlavorText('The mystic combination!')
         .withLabel('Tate & Liza')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/3/38/Spr_RS_Tate_and_Liza.png')
         .build();
      return Gym.builder()
         .withBadge(GymBadges.MIND)
         .withDominantType(PokemonType.PSYCHIC)
         .withLabel('Mossdeep Gym')
         .withLeader(leader)
         .withLocation('Mossdeep City')
         .withPokemons(pokemons)
         .withSortId(7)
         .build();
   }
   getWallace() {
      const waterPulse = GymPokemonMove.builder()
         .withLabel('Water Pulse')
         .withType(PokemonType.WATER)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(20)
         .withPower(60)
         .withAccuracy(100)
         .withDescription(`Attacks with ultrasonic waves. May confuse the foe.`)
         .build();
      const rainDance = GymPokemonMove.builder()
         .withLabel('Rain Dance')
         .withType(PokemonType.WATER)
         .withDamageClass(DamageClass.STATUS)
         .withPP(5)
         .withDescription(`Raises the power of Water-type moves for 5 turns.`)
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withLevel(40)
            .withAbility('Swift Swim')
            .withMoves(
               flail,
               attract,
               GymPokemonMove.builder()
                  .withLabel('Sweet Kiss')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(10)
                  .withAccuracy(75)
                  .withDescription(
                     `Demands a kiss with a cute look. May cause confusion.`
                  )
                  .build(),
               waterPulse
            )
            .withTypes(PokemonType.WATER)
            .withIconUrl(Sprites.LUVDISC.icon_url)
            .withSpriteUrl(Sprites.LUVDISC.sprite_url)
            .withSpecies('Luvdisc')
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withLevel(40)
            .withAbility('Thick Fat')
            .withMoves(
               encore,
               bodySlam,
               GymPokemonMove.builder()
                  .withLabel('Aurora Beam')
                  .withType(PokemonType.ICE)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(20)
                  .withPower(65)
                  .withAccuracy(100)
                  .withDescription(`Fires a rainbow-colored beam that may lower Attack.`)
                  .build(),
               waterPulse
            )
            .withTypes(PokemonType.ICE, PokemonType.WATER)
            .withIconUrl(Sprites.SEALEO.icon_url)
            .withSpriteUrl(Sprites.SEALEO.sprite_url)
            .withSpecies('Sealeo')
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withLevel(42)
            .withAbility('Swift Swim')
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Horn Drill')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withAccuracy(30)
                  .withDescription(`A one-hit KO attack that uses a horn like a drill.`)
                  .build(),
               furyAttack,
               rainDance,
               waterPulse
            )
            .withTypes(PokemonType.WATER)
            .withIconUrl(Sprites.SEAKING.icon_url)
            .withSpriteUrl(Sprites.SEAKING.sprite_url)
            .withSpecies('Seaking')
            .build(),
         GymPokemon.builder()
            .withSortId(4)
            .withLevel(42)
            .withAbility('Oblivious')
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Amnesia')
                  .withType(PokemonType.PSYCHIC)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(20)
                  .withDescription(`Forgets about something and sharply raises Sp. Def.`)
                  .build(),
               rainDance,
               earthquake,
               waterPulse
            )
            .withTypes(PokemonType.WATER, PokemonType.GROUND)
            .withIconUrl(Sprites.WHISCASH.icon_url)
            .withSpriteUrl(Sprites.WHISCASH.sprite_url)
            .withSpecies('Whiscash')
            .build(),
         GymPokemon.builder()
            .withSortId(5)
            .withLevel(43)
            .withAbility('Marvel Scale')
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Recover')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(20)
                  .withDescription(`Recovers up to half the user's maximum HP.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Twister')
                  .withType(PokemonType.DRAGON)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(20)
                  .withPower(40)
                  .withAccuracy(100)
                  .withDescription(`Whips up a vicious twister to tear at the foe.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Ice Beam')
                  .withType(PokemonType.ICE)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(10)
                  .withPower(95)
                  .withAccuracy(100)
                  .withDescription(`Fires an icy cold beam that may freeze the foe.`)
                  .build(),
               waterPulse
            )
            .withTypes(PokemonType.WATER)
            .withIconUrl(Sprites.MILOTIC.icon_url)
            .withSpriteUrl(Sprites.MILOTIC.sprite_url)
            .withSpecies('Milotic')
            .build(),
      ];
      const leader = GymLeader.builder()
         .withFlavorText('Artist, and lover of water.')
         .withLabel('Wallace')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/b/b1/Spr_RS_Wallace.png')
         .build();
      return Gym.builder()
         .withBadge(GymBadges.RAIN)
         .withDominantType(PokemonType.WATER)
         .withLabel('Sootopolis Gym')
         .withLeader(leader)
         .withLocation('Sootopolis City')
         .withPokemons(pokemons)
         .withSortId(8)
         .build();
   }
}

const supersonic = GymPokemonMove.builder()
   .withLabel('Supersonic')
   .withType(PokemonType.NORMAL)
   .withDamageClass(DamageClass.STATUS)
   .withPP(20)
   .withAccuracy(55)
   .withDescription(`Emits bizarre sound waves that may confuse the foe.`)
   .build();

const lightScreen = GymPokemonMove.builder()
   .withLabel('Light Screen')
   .withType(PokemonType.PSYCHIC)
   .withDamageClass(DamageClass.STATUS)
   .withPP(30)
   .withDescription(`Creates a wall of light that lowers Sp. Atk damage.`)
   .build();

const flamethrower = GymPokemonMove.builder()
   .withLabel('Flamethrower')
   .withType(PokemonType.FIRE)
   .withDamageClass(DamageClass.SPECIAL)
   .withPP(15)
   .withPower(95)
   .withAccuracy(100)
   .withDescription(`Looses a stream of fire that may burn the foe.`)
   .build();

const sunnyDay = GymPokemonMove.builder()
   .withLabel('Sunny Day')
   .withType(PokemonType.FIRE)
   .withDamageClass(DamageClass.STATUS)
   .withPP(5)
   .withDescription(`Raises the power of Fire-type moves for 5 turns.`)
   .build();

const flail = GymPokemonMove.builder()
   .withLabel('Flail')
   .withType(PokemonType.NORMAL)
   .withDamageClass(DamageClass.PHYSICAL)
   .withPP(15)
   .withAccuracy(100)
   .withDescription(`Inflicts more damage when the user's HP is down.`)
   .build();

const attract = GymPokemonMove.builder()
   .withLabel('Attract')
   .withType(PokemonType.NORMAL)
   .withDamageClass(DamageClass.STATUS)
   .withPP(15)
   .withAccuracy(100)
   .withDescription(`Makes it tough to attack a foe of the opposite gender.`)
   .build();

const encore = GymPokemonMove.builder()
   .withLabel('Encore')
   .withType(PokemonType.NORMAL)
   .withDamageClass(DamageClass.STATUS)
   .withPP(5)
   .withAccuracy(100)
   .withDescription(`Makes the foe repeat its last move over 2 to 6 turns.`)
   .build();

const bodySlam = GymPokemonMove.builder()
   .withLabel('Body Slam')
   .withType(PokemonType.NORMAL)
   .withDamageClass(DamageClass.PHYSICAL)
   .withPP(15)
   .withPower(85)
   .withAccuracy(100)
   .withDescription(`A full-body slam that may cause paralysis.`)
   .build();

const furyAttack = GymPokemonMove.builder()
   .withLabel('Fury Attack')
   .withType(PokemonType.NORMAL)
   .withDamageClass(DamageClass.PHYSICAL)
   .withPP(20)
   .withPower(15)
   .withAccuracy(85)
   .withDescription(`Jabs the foe 2 to 5 times with sharp horns, etc.`)
   .build();

const earthquake = GymPokemonMove.builder()
   .withLabel('Earthquake')
   .withType(PokemonType.GROUND)
   .withDamageClass(DamageClass.PHYSICAL)
   .withPP(10)
   .withPower(100)
   .withAccuracy(100)
   .withDescription(`A powerful quake, but has no effect on flying foes.`)
   .build();
