import Gym from '../../models/gyms/Gym.js';
import GymBadges from '../GymBadges.js';
import GymLeader from '../../models/gyms/GymLeader.js';
import GymPokemon from '../../models/pokemons/GymPokemon.js';
import GymPokemonMove from '../../models/gyms/GymPokemonMove.js';
import PokemonType from '../PokemonType.js';
import DamageClass from '../DamageClass.js';
import MovePriority from '../MovePriority.js';
import Sprites from '../Sprites.js';

export default class Emerald {
   constructor() {
      this.gyms = [
         this.getRoxanne(),
         this.getBrawly(),
         this.getWattson(),
         this.getFlannery(),
         this.getNorman(),
         this.getWinona(),
         this.getTateLiza(),
         this.getJuan(),
      ];
   }
   getRoxanne() {
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
      const defenseCurl = GymPokemonMove.builder()
         .withDescription(`Curls up to conceal weak spots and raise Defense.`)
         .withLabel('Defense Curl')
         .withPP(40)
         .withDamageClass(DamageClass.STATUS)
         .withType(PokemonType.NORMAL)
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withAbility('Rock Head')
            .withLevel(12)
            .withMoves(tackle, defenseCurl, rockThrow, rockTomb)
            .withSpecies('Geodude')
            .withIconUrl(Sprites.GEODUDE.icon_url)
            .withSpriteUrl(Sprites.GEODUDE.sprite_url)
            .withTypes(PokemonType.ROCK, PokemonType.GROUND)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Rock Head')
            .withLevel(12)
            .withMoves(tackle, defenseCurl, rockThrow, rockTomb)
            .withSpecies('Geodude')
            .withIconUrl(Sprites.GEODUDE.icon_url)
            .withSpriteUrl(Sprites.GEODUDE.sprite_url)
            .withTypes(PokemonType.ROCK, PokemonType.GROUND)
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withAbility('Sturdy')
            .withHeldItem('Oran Berry')
            .withLevel(15)
            .withMoves(
               GymPokemonMove.builder()
                  .withDamageClass(DamageClass.STATUS)
                  .withDescription(`Blocks the foe's way to prevent escape.`)
                  .withLabel('Block')
                  .withPP(5)
                  .withType(PokemonType.NORMAL)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Harden')
                  .withDamageClass(DamageClass.STATUS)
                  .withDescription(`Stiffens the body's muscles to raise Defense.`)
                  .withPP(30)
                  .withType(PokemonType.NORMAL)
                  .build(),
               tackle,
               rockTomb
            )
            .withIconUrl(Sprites.NOSEPASS.icon_url)
            .withSpecies('Nosepass')
            .withSpriteUrl(Sprites.NOSEPASS.sprite_url)
            .withTypes(PokemonType.ROCK)
            .build(),
      ];
      const leader = GymLeader.builder()
         .withFlavorText('The Rock-Loving Honors Student')
         .withLabel('Roxanne')
         .withSpritUrl('https://cdn2.bulbagarden.net/upload/e/ef/Spr_RS_Roxanne.png')
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
            .withLevel(16)
            .withMoves(
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
                  .withLabel('Low Kick')
                  .withType(PokemonType.FIGHTING)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withAccuracy(100)
                  .withDescription(`A kick that inflicts more damage on heavier foes.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Seismic Toss')
                  .withType(PokemonType.FIGHTING)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withAccuracy(100)
                  .withDescription(`Inflicts damage identical to the user's level.`)
                  .build(),
               bulkUp
            )
            .withTypes(PokemonType.FIGHTING)
            .withIconUrl(Sprites.MACHOP.icon_url)
            .withSpriteUrl(Sprites.MACHOP.sprite_url)
            .withSpecies('Machop')
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withLevel(16)
            .withAbility('Pure Power')
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
               lightScreen,
               GymPokemonMove.builder()
                  .withLabel('Reflect')
                  .withType(PokemonType.PSYCHIC)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(20)
                  .withDescription(
                     `Creates a wall of light that weakens physical attacks.`
                  )
                  .withType(PokemonType.PSYCHIC)
                  .build(),
               bulkUp
            )
            .withSpecies('Meditite')
            .withIconUrl(Sprites.MEDITITE.icon_url)
            .withSpriteUrl(Sprites.MEDITITE.sprite_url)
            .withTypes(PokemonType.FIGHTING, PokemonType.PSYCHIC)
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withAbility('Guts')
            .withLevel(19)
            .withHeldItem('Sitrus Berry')
            .withMoves(
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
                  .withLabel('Vital Throw')
                  .withType(PokemonType.FIGHTING)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(10)
                  .withPower(70)
                  .withPriority(MovePriority.MINUS1)
                  .withDescription(`Makes the user's move last, but it never misses.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Reversal')
                  .withType(PokemonType.FIGHTING)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(15)
                  .withAccuracy(100)
                  .withDescription(`Inflicts more damage when the user's HP is down.`)
                  .build(),
               bulkUp
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
         .withSpritUrl('https://cdn2.bulbagarden.net/upload/9/92/Spr_RS_Brawly.png')
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
      const shockWave = GymPokemonMove.builder()
         .withLabel('Shock Wave')
         .withType(PokemonType.ELECTRIC)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(20)
         .withPower(60)
         .withDescription(`Zaps the foe with a jolt of electricity that never misses.`)
         .build();
      const quickAttack = GymPokemonMove.builder()
         .withLabel('Quick Attack')
         .withType(PokemonType.NORMAL)
         .withDamageClass(DamageClass.PHYSICAL)
         .withPP(30)
         .withPower(40)
         .withAccuracy(100)
         .withPriority(MovePriority.PLUS1)
         .withDescription(`An extremely fast attack that always strikes first.`)
         .build();
      const thunderWave = GymPokemonMove.builder()
         .withLabel('Thunder Wave')
         .withType(PokemonType.ELECTRIC)
         .withDamageClass(DamageClass.STATUS)
         .withPP(20)
         .withAccuracy(100)
         .withDescription('A weak jolt of electricity that paralyzes the foe.')
         .build();
      const howl = GymPokemonMove.builder()
         .withLabel('Howl')
         .withType(PokemonType.ELECTRIC)
         .withDamageClass(DamageClass.STATUS)
         .withPP(40)
         .withDescription(`Howls to raise the spirit and boosts Attack.`)
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
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
               GymPokemonMove.builder()
                  .withLabel('Selfdestruct')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(5)
                  .withPower(200)
                  .withAccuracy(100)
                  .withDescription(`Inflicts severe damage but makes the user faint.`)
                  .build(),
               shockWave
            )
            .withSpecies('Voltorb')
            .withIconUrl(Sprites.VOLTORB.icon_url)
            .withSpriteUrl(Sprites.VOLTORB.sprite_url)
            .withTypes(PokemonType.ELECTRIC)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Static')
            .withLevel(20)
            .withMoves(shockWave, leer, quickAttack, howl)
            .withSpecies('Electrike')
            .withIconUrl(Sprites.ELECTRIKE.icon_url)
            .withSpriteUrl(Sprites.ELECTRIKE.sprite_url)
            .withTypes(PokemonType.ELECTRIC)
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withAbility('Magnet Pull')
            .withLevel(22)
            .withMoves(
               supersonic,
               shockWave,
               thunderWave,
               GymPokemonMove.builder()
                  .withLabel('SonicBoom')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(20)
                  .withAccuracy(90)
                  .withDescription(
                     'Launches shock waves that always inflict 20 HP damage.'
                  )
                  .build()
            )
            .withSpecies('Magneton')
            .withIconUrl(Sprites.MAGNETON.icon_url)
            .withSpriteUrl(Sprites.MAGNETON.sprite_url)
            .withTypes(PokemonType.ELECTRIC, PokemonType.STEEL)
            .build(),
         GymPokemon.builder()
            .withSortId(4)
            .withAbility('Static')
            .withLevel(24)
            .withHeldItem('Sitrus Berry')
            .withMoves(quickAttack, thunderWave, shockWave, howl)
            .withTypes(PokemonType.ELECTRIC)
            .withIconUrl(Sprites.MANECTRIC.icon_url)
            .withSpriteUrl(Sprites.MANECTRIC.sprite_url)
            .withSpecies('Manectric')
            .build(),
      ];
      const leader = GymLeader.builder()
         .withFlavorText('The cheerfully electrifying man!')
         .withLabel('Wattson')
         .withSpritUrl('https://cdn2.bulbagarden.net/upload/b/b2/Spr_RS_Wattson.png')
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
            .withAbility('Oblivious')
            .withLevel(24)
            .withMoves(
               overheat,
               GymPokemonMove.builder()
                  .withLabel('Take Down')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withPower(90)
                  .withAccuracy(85)
                  .withDescription(`A reckless charge attack that also hurts the user.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Magnitude')
                  .withType(PokemonType.GROUND)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(30)
                  .withAccuracy(100)
                  .withDescription(`A ground-shaking attack of random intensity.`)
                  .build(),
               sunnyDay
            )
            .withIconUrl(Sprites.NUMEL.icon_url)
            .withSpriteUrl(Sprites.NUMEL.sprite_url)
            .withSpecies('Numel')
            .withTypes(PokemonType.FIRE, PokemonType.GROUND)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Magma Armor')
            .withLevel(24)
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
            .withSortId(3)
            .withAbility('Magma Armor')
            .withLevel(26)
            .withMoves(overheat, tackle, sunnyDay, attract)
            .withIconUrl(Sprites.CAMERUPT.icon_url)
            .withSpriteUrl(Sprites.CAMERUPT.sprite_url)
            .withSpecies('Camerupt')
            .withTypes(PokemonType.FIRE, PokemonType.GROUND)
            .build(),
         GymPokemon.builder()
            .withSortId(4)
            .withAbility('White Smoke')
            .withHeldItem('White Herb')
            .withLevel(29)
            .withMoves(overheat, sunnyDay, bodySlam, attract)
            .withTypes(PokemonType.FIRE)
            .withIconUrl(Sprites.TORKOAL.icon_url)
            .withSpriteUrl(Sprites.TORKOAL.sprite_url)
            .withSpecies('Torkoal')
            .build(),
      ];
      const leader = GymLeader.builder()
         .withFlavorText('One with a fiery passion that burns!')
         .withLabel('Flannery')
         .withSpritUrl('https://cdn2.bulbagarden.net/upload/b/be/Spr_RS_Flannery.png')
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
      const slash = GymPokemonMove.builder()
         .withLabel('Slash')
         .withType(PokemonType.NORMAL)
         .withDamageClass(DamageClass.PHYSICAL)
         .withPP(20)
         .withPower(70)
         .withAccuracy(100)
         .withDescription(`Slashes with claws, etc. Has a high critical-hit ratio.`)
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
            .withAbility('Own Tempo')
            .withLevel(27)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Teeter Dance')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(20)
                  .withAccuracy(100)
                  .withDescription(`Confuses all Pokémon on the scene.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Psybeam')
                  .withType(PokemonType.PSYCHIC)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(20)
                  .withPower(65)
                  .withAccuracy(100)
                  .withDescription(`Fires a peculiar ray that may confuse the foe.`)
                  .build(),
               facade,
               encore
            )
            .withSpecies('Spinda')
            .withTypes(PokemonType.NORMAL)
            .withIconUrl(Sprites.SPINDA.icon_url)
            .withSpriteUrl(Sprites.SPINDA.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Vital Spirit')
            .withLevel(27)
            .withMoves(slash, facade, encore, faintAttack)
            .withSpecies('Vigoroth')
            .withTypes(PokemonType.NORMAL)
            .withIconUrl(Sprites.VIGOROTH.icon_url)
            .withSpriteUrl(Sprites.VIGOROTH.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withAbility('Pickup')
            .withLevel(29)
            .withMoves(
               slash,
               GymPokemonMove.builder()
                  .withLabel('Belly Drum')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(10)
                  .withDescription(`Maximizes Attack while sacrificing HP.`)
                  .build(),
               facade,
               GymPokemonMove.builder()
                  .withLabel('Headbutt')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(15)
                  .withPower(70)
                  .withAccuracy(100)
                  .withDescription(`A ramming attack that may cause flinching.`)
                  .build()
            )
            .withSpecies('Linoone')
            .withTypes(PokemonType.NORMAL)
            .withIconUrl(Sprites.LINOONE.icon_url)
            .withSpriteUrl(Sprites.LINOONE.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(4)
            .withAbility('Truant')
            .withLevel(31)
            .withHeldItem('Sitrus Berry')
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Counter')
                  .withType(PokemonType.FIGHTING)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withAccuracy(100)
                  .withPriority(MovePriority.MINUS5)
                  .withDescription(`Retaliates any physical hit with double the power.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Yawn')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(10)
                  .withDescription(
                     `Lulls the foe into yawning, then sleeping the next turn.`
                  )
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
         .withSpritUrl('https://cdn2.bulbagarden.net/upload/7/75/Spr_RS_Norman.png')
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
            .withAbility('Natural Cure')
            .withLevel(29)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Perish Song')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(5)
                  .withDescription(`Any Pokémon hearing this song faints in 3 turns.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Mirror Move')
                  .withType(PokemonType.FLYING)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(20)
                  .withDescription(`Counters the foe's attack with the same move.`)
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Safeguard')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(25)
                  .withDescription(`A mystical force prevents all status problems.`)
                  .build(),
               aerialAce
            )
            .withSpecies('Swablu')
            .withTypes(PokemonType.NORMAL, PokemonType.FLYING)
            .withIconUrl(Sprites.SWABLU.icon_url)
            .withSpriteUrl(Sprites.SWABLU.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Chlorophyll')
            .withLevel(29)
            .withMoves(
               sunnyDay,
               aerialAce,
               solarbeam,
               GymPokemonMove.builder()
                  .withLabel('Synthesis')
                  .withType(PokemonType.GRASS)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(5)
                  .withDescription(`Restores HP. The amount varies with the weather.`)
                  .build()
            )
            .withSpecies('Tropius')
            .withTypes(PokemonType.GRASS, PokemonType.FLYING)
            .withIconUrl(Sprites.TROPIUS.icon_url)
            .withSpriteUrl(Sprites.TROPIUS.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(3)
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
            .withSortId(4)
            .withAbility('Keen Eye')
            .withLevel(31)
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
               GymPokemonMove.builder()
                  .withLabel('Fury Attack')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withPower(15)
                  .withAccuracy(85)
                  .withDescription(`Jabs the foe 2 to 5 times with sharp horns, etc.`)
                  .build(),
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
            .withSortId(5)
            .withAbility('Natural Cure')
            .withLevel(33)
            .withHeldItem('Oran Berry')
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
         .withSpritUrl('https://cdn2.bulbagarden.net/upload/0/0e/Spr_RS_Winona.png')
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
      const calmMind = GymPokemonMove.builder()
         .withLabel('Calm Mind')
         .withType(PokemonType.PSYCHIC)
         .withDamageClass(DamageClass.STATUS)
         .withPP(20)
         .withDescription(`Raises Sp. Atk and Sp. Def by focusing the mind.`)
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withLevel(41)
            .withAbility('Levitate')
            .withMoves(
               earthquake,
               GymPokemonMove.builder()
                  .withLabel('AncientPower')
                  .withType(PokemonType.ROCK)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(5)
                  .withPower(60)
                  .withAccuracy(100)
                  .withDescription(`An attack that may raise all stats.`)
                  .build(),
               psychic,
               lightScreen
            )
            .withSpecies('Claydol')
            .withTypes(PokemonType.GROUND, PokemonType.PSYCHIC)
            .withIconUrl(Sprites.CLAYDOL.icon_url)
            .withSpriteUrl(Sprites.CLAYDOL.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withLevel(41)
            .withAbility('Synchronize')
            .withMoves(
               psychic,
               sunnyDay,
               GymPokemonMove.builder()
                  .withLabel('Confuse Ray')
                  .withType(PokemonType.GHOST)
                  .withDamageClass(DamageClass.STATUS)
                  .withAccuracy(100)
                  .withDescription(`A sinister ray that confuses the foe.`)
                  .build(),
               calmMind
            )
            .withSpecies('Xatu')
            .withTypes(PokemonType.PSYCHIC, PokemonType.FLYING)
            .withIconUrl(Sprites.XATU.icon_url)
            .withSpriteUrl(Sprites.XATU.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withLevel(42)
            .withAbility('Levitate')
            .withHeldItem('Sitrus Berry')
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
               calmMind
            )
            .withSpecies('Lunatone')
            .withTypes(PokemonType.ROCK, PokemonType.PSYCHIC)
            .withIconUrl(Sprites.LUNATONE.icon_url)
            .withSpriteUrl(Sprites.LUNATONE.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(4)
            .withLevel(42)
            .withAbility('Levitate')
            .withHeldItem('Sitrus Berry')
            .withMoves(
               sunnyDay,
               solarbeam,
               psychic,
               GymPokemonMove.builder()
                  .withLabel('Flamethrower')
                  .withType(PokemonType.FIRE)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(15)
                  .withPower(95)
                  .withAccuracy(100)
                  .withDescription(`Looses a stream of fire that may burn the foe.`)
                  .build()
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
         .withSpritUrl(
            'https://cdn2.bulbagarden.net/upload/3/38/Spr_RS_Tate_and_Liza.png'
         )
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
   getJuan() {
      const waterPulse = GymPokemonMove.builder()
         .withLabel('Water Pulse')
         .withType(PokemonType.WATER)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(20)
         .withPower(60)
         .withAccuracy(100)
         .withDescription(`Attacks with ultrasonic waves. May confuse the foe.`)
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withLevel(41)
            .withAbility('Swift Swim')
            .withMoves(
               waterPulse,
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
               GymPokemonMove.builder()
                  .withLabel('Flail')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(15)
                  .withAccuracy(100)
                  .withDescription(`Inflicts more damage when the user's HP is down.`)
                  .build()
            )
            .withTypes(PokemonType.WATER)
            .withIconUrl(Sprites.LUVDISC.icon_url)
            .withSpriteUrl(Sprites.LUVDISC.sprite_url)
            .withSpecies('Luvdisc')
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withLevel(41)
            .withAbility('Oblivious')
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Rain Dance')
                  .withType(PokemonType.WATER)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(5)
                  .withDescription(`Raises the power of Water-type moves for 5 turns.`)
                  .build(),
               waterPulse,
               GymPokemonMove.builder()
                  .withLabel('Amnesia')
                  .withType(PokemonType.PSYCHIC)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(20)
                  .withDescription(`Forgets about something and sharply raises Sp. Def.`)
                  .build(),
               earthquake
            )
            .withTypes(PokemonType.WATER, PokemonType.GROUND)
            .withIconUrl(Sprites.WHISCASH.icon_url)
            .withSpriteUrl(Sprites.WHISCASH.sprite_url)
            .withSpecies('Whiscash')
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withLevel(43)
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
            .withSortId(4)
            .withAbility('Hyper Cutter')
            .withLevel(43)
            .withMoves(
               waterPulse,
               GymPokemonMove.builder()
                  .withLabel('Crabhammer')
                  .withType(PokemonType.WATER)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(10)
                  .withPower(90)
                  .withAccuracy(85)
                  .withDescription(
                     `Hammers with a pincer. Has a high critical-hit ratio.`
                  )
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Taunt')
                  .withType(PokemonType.DARK)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(20)
                  .withAccuracy(100)
                  .withDescription(`Taunts the foe into only using attack moves.`)
                  .build(),
               leer
            )
            .withSpecies('Crawdaunt')
            .withIconUrl(Sprites.CRAWDAUNT.icon_url)
            .withSpriteUrl(Sprites.CRAWDAUNT.sprite_url)
            .withTypes(PokemonType.WATER, PokemonType.DARK)
            .build(),
         GymPokemon.builder()
            .withSortId(5)
            .withAbility('Swift Swim')
            .withHeldItem('Chesto Berry')
            .withLevel(46)
            .withMoves(
               waterPulse,
               GymPokemonMove.builder()
                  .withLabel('Double Team')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(15)
                  .withDescription(`Creates illusory copies to raise evasiveness.`)
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
               GymPokemonMove.builder()
                  .withLabel('Rest')
                  .withType(PokemonType.PSYCHIC)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(10)
                  .withDescription(
                     `The user sleeps for 2 turns, restoring HP and status.`
                  )
                  .build()
            )
            .withSpecies('Kingdra')
            .withTypes(PokemonType.WATER, PokemonType.DRAGON)
            .withIconUrl(Sprites.KINGDRA.icon_url)
            .withSpriteUrl(Sprites.KINGDRA.sprite_url)
            .build(),
      ];
      const leader = GymLeader.builder()
         .withFlavorText('The Gym Leader with the beauty of pure water!')
         .withLabel('Juan')
         .withSpritUrl('https://cdn2.bulbagarden.net/upload/1/16/Spr_E_Juan.png')
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

const lightScreen = GymPokemonMove.builder()
   .withLabel('Light Screen')
   .withType(PokemonType.PSYCHIC)
   .withDamageClass(DamageClass.STATUS)
   .withPP(30)
   .withDescription(`Creates a wall of light that lowers Sp. Atk damage.`)
   .build();

const tackle = GymPokemonMove.builder()
   .withAccuracy(95)
   .withDamageClass(DamageClass.PHYSICAL)
   .withDescription(`Charges the foe with a full-body tackle.`)
   .withLabel('Tackle')
   .withPP(35)
   .withPower(35)
   .withType(PokemonType.NORMAL)
   .build();

const supersonic = GymPokemonMove.builder()
   .withLabel('Supersonic')
   .withType(PokemonType.NORMAL)
   .withDamageClass(DamageClass.STATUS)
   .withPP(20)
   .withAccuracy(55)
   .withDescription(`Emits bizarre sound waves that may confuse the foe.`)
   .build();

const sunnyDay = GymPokemonMove.builder()
   .withLabel('Sunny Day')
   .withType(PokemonType.FIRE)
   .withDamageClass(DamageClass.STATUS)
   .withPP(5)
   .withDescription(`Raises the power of Fire-type moves for 5 turns.`)
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

const solarbeam = GymPokemonMove.builder()
   .withLabel('SolarBeam')
   .withType(PokemonType.GRASS)
   .withDamageClass(DamageClass.SPECIAL)
   .withPP(10)
   .withPower(120)
   .withAccuracy(100)
   .withDescription(`Absorbs sunlight in the 1st turn, then attacks next turn.`)
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

const leer = GymPokemonMove.builder()
   .withLabel('Leer')
   .withType(PokemonType.NORMAL)
   .withDamageClass(DamageClass.STATUS)
   .withPP(30)
   .withAccuracy(100)
   .withDescription(`Frightens the foe with a leer to lower Defense.`)
   .build();
