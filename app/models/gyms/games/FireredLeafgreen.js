import Gym from '../Gym.js';
import GymLeader from '../GymLeader.js';
import GymPokemon from '../../pokemons/GymPokemon.js';
import GymPokemonMove from '../GymPokemonMove.js';
import PokemonType from '../../constants/PokemonType.js';
import DamageClass from '../../constants/DamageClass.js';
import MovePriority from '../../constants/MovePriority.js';
import Sprites from '../../pokemons/Sprites.js';
import GymBadges from '../GymBadges.js';
export default class FireredLeafgreen {
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
            .withAbility('Rock Head')
            .withMoves(
               tackle,
               GymPokemonMove.builder()
                  .withDescription(
                     `The user curls up to conceal weak spots and raise its Defense stat.`
                  )
                  .withLabel('Defense Curl')
                  .withPP(40)
                  .withDamageClass(DamageClass.STATUS)
                  .withType(PokemonType.NORMAL)
                  .build()
            )
            .withLevel(12)
            .withTypes(PokemonType.ROCK, PokemonType.GROUND)
            .withSpecies('Geodude')
            .withIconUrl(Sprites.GEODUDE.icon_url)
            .withSpriteUrl(Sprites.GEODUDE.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Rock Head')
            .withMoves(
               tackle,
               harden,
               GymPokemonMove.builder()
                  .withLabel('Bind')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withPower(15)
                  .withAccuracy(75)
                  .withDescription(
                     `A long body or tentacles are used to bind the foe for two to five turns.`
                  )
                  .build(),
               GymPokemonMove.builder()
                  .withAccuracy(80)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withDescription(
                     `Boulders are hurled at the foe. It also lowers the foe's Speed if it hits.`
                  )
                  .withLabel('Rock Tomb')
                  .withPP(10)
                  .withPower(60)
                  .withType(PokemonType.ROCK)
                  .build()
            )
            .withLevel(14)
            .withTypes(PokemonType.ROCK, PokemonType.GROUND)
            .withSpecies('Onix')
            .withIconUrl(Sprites.ONIX.icon_url)
            .withSpriteUrl(Sprites.ONIX.sprite_url)
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Brock')
         .withFlavorText('The Rock-Solid Pokémon Trainer!')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/7/7c/Spr_FRLG_Brock.png')
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
      const waterPulse = GymPokemonMove.builder()
         .withLabel('Water Pulse')
         .withType(PokemonType.WATER)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(20)
         .withPower(60)
         .withAccuracy(100)
         .withDescription(
            `An attack with a pulsing blast of water. It may also confuse the foe.`
         )
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withLevel(18)
            .withAbility('Natural Cure')
            .withMoves(tackle, harden, recover, waterPulse)
            .withSpecies('Staryu')
            .withTypes(PokemonType.WATER)
            .withIconUrl(Sprites.STARYU.icon_url)
            .withSpriteUrl(Sprites.STARYU.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withLevel(21)
            .withAbility('Natural Cure')
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Rapid Spin')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(40)
                  .withPower(20)
                  .withAccuracy(100)
                  .withDescription(
                     `An attack that frees the user from Bind, Wrap, Leech Seed, and Spikes.`
                  )
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Swift')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(20)
                  .withPower(60)
                  .withDescription(
                     `Star-shaped rays that never miss are fired at all foes in battle.`
                  )
                  .build(),
               recover,
               waterPulse
            )
            .withSpecies('Starmie')
            .withTypes(PokemonType.WATER, PokemonType.PSYCHIC)
            .withIconUrl(Sprites.STARMIE.icon_url)
            .withSpriteUrl(Sprites.STARMIE.sprite_url)
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Misty')
         .withFlavorText('The Tomboyish Mermaid!')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/2/2c/Spr_FRLG_Misty.png')
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
      const shockWave = GymPokemonMove.builder()
         .withLabel('Shock Wave')
         .withType(PokemonType.ELECTRIC)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(20)
         .withPower(60)
         .withDescription(
            `	A rapid jolt of electricity strikes the foe. It can't be evaded.`
         )
         .build();
      const quickAttack = GymPokemonMove.builder()
         .withLabel('Quick Attack')
         .withType(PokemonType.NORMAL)
         .withDamageClass(DamageClass.PHYSICAL)
         .withPP(30)
         .withPower(40)
         .withAccuracy(100)
         .withPriority(MovePriority.PLUS1)
         .withDescription(
            `An almost invisibly fast attack that is certain to strike first.`
         )
         .build();
      const thunderWave = GymPokemonMove.builder()
         .withLabel('Thunder Wave')
         .withType(PokemonType.ELECTRIC)
         .withDamageClass(DamageClass.STATUS)
         .withPP(20)
         .withAccuracy(100)
         .withDescription(
            `A weak electric shock that is sure to cause paralysis if it hits.`
         )
         .build();
      const doubleTeam = GymPokemonMove.builder()
         .withLabel('Double Team')
         .withType(PokemonType.NORMAL)
         .withDamageClass(DamageClass.STATUS)
         .withPP(15)
         .withDescription(
            `The user creates illusory copies of itself to raise its evasiveness.`
         )
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withLevel(21)
            .withSortId(1)
            .withAbility('Soundproof')
            .withMoves(
               shockWave,
               tackle,
               GymPokemonMove.builder()
                  .withLabel('Screech')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(40)
                  .withAccuracy(85)
                  .withDescription(
                     `An ear-splitting screech is emitted to sharply reduce the foe's Defense.`
                  )
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('SonicBoom')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(20)
                  .withAccuracy(90)
                  .withDescription(
                     `The foe is hit with a shock wave that always inflicts 20-HP damage.`
                  )
                  .build()
            )
            .withIconUrl(Sprites.VOLTORB.icon_url)
            .withSpriteUrl(Sprites.VOLTORB.sprite_url)
            .withTypes(PokemonType.ELECTRIC)
            .withSpecies('Voltorb')
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withLevel(18)
            .withAbility('Static')
            .withMoves(shockWave, thunderWave, quickAttack, doubleTeam)
            .withIconUrl(Sprites.PIKACHU.icon_url)
            .withSpriteUrl(Sprites.PIKACHU.sprite_url)
            .withTypes(PokemonType.ELECTRIC)
            .withSpecies('Pikachu')
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withLevel(24)
            .withAbility('Static')
            .withMoves(shockWave, thunderWave, quickAttack, doubleTeam)
            .withIconUrl(Sprites.RAICHU.icon_url)
            .withSpriteUrl(Sprites.RAICHU.sprite_url)
            .withTypes(PokemonType.ELECTRIC)
            .withSpecies('Raichu')
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Lt. Surge')
         .withFlavorText('Lightning Lieutenant')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/5/5c/Spr_FRLG_Lt_Surge.png')
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
      const stunSpore = GymPokemonMove.builder()
         .withLabel('Stun Spore')
         .withType(PokemonType.GRASS)
         .withDamageClass(DamageClass.STATUS)
         .withPP(30)
         .withAccuracy(75)
         .withDescription(`Paralyzing dust is scattered wildly. It may paralyze the foe.`)
         .build();
      const acid = GymPokemonMove.builder()
         .withLabel('Acid')
         .withType(PokemonType.POISON)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(30)
         .withPower(40)
         .withAccuracy(100)
         .withDescription(
            `The foe is sprayed with a harsh, hide-melting acid that may lower Defense.`
         )
         .build();
      const poisonPowder = GymPokemonMove.builder()
         .withLabel('PoisonPowder')
         .withType(PokemonType.POISON)
         .withDamageClass(DamageClass.STATUS)
         .withPP(35)
         .withAccuracy(75)
         .withDescription(`A cloud of toxic dust is scattered. It may poison the foe.`)
         .build();
      const gigaDrain = GymPokemonMove.builder()
         .withLabel('Giga Drain')
         .withType(PokemonType.GRASS)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(5)
         .withPower(60)
         .withAccuracy(100)
         .withDescription(
            `A harsh attack that absorbs half the damage it inflicted to restore HP.`
         )
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withLevel(29)
            .withMoves(stunSpore, acid, poisonPowder, gigaDrain)
            .withAbility('Chlorophyll')
            .withSpecies('Victreebel')
            .withIconUrl(Sprites.VICTREEBEL.icon_url)
            .withSpriteUrl(Sprites.VICTREEBEL.sprite_url)
            .withTypes(PokemonType.GRASS, PokemonType.POISON)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withLevel(24)
            .withMoves(
               poisonPowder,
               GymPokemonMove.builder()
                  .withLabel('Constrict')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withType(PokemonType.NORMAL)
                  .withPP(35)
                  .withPower(10)
                  .withAccuracy(100)
                  .withDescription(
                     `The foe is attacked with long tentacles or vines. It may lower Speed.`
                  )
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Ingrain')
                  .withType(PokemonType.GRASS)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(20)
                  .withDescription(
                     `The user lays roots that restore HP on every turn. It can't switch out.`
                  )
                  .build(),
               gigaDrain
            )
            .withAbility('Chlorophyll')
            .withSpecies('Tangela')
            .withIconUrl(Sprites.TANGELA.icon_url)
            .withSpriteUrl(Sprites.TANGELA.sprite_url)
            .withTypes(PokemonType.GRASS)
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withLevel(29)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Sleep Powder')
                  .withType(PokemonType.GRASS)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(15)
                  .withAccuracy(75)
                  .withDescription(
                     `A sleep-inducing dust is scattered in high volume around a foe.`
                  )
                  .build(),
               acid,
               stunSpore,
               gigaDrain
            )
            .withAbility('Chlorophyll')
            .withSpecies('Vileplume')
            .withIconUrl(Sprites.VILEPLUME.icon_url)
            .withSpriteUrl(Sprites.VILEPLUME.sprite_url)
            .withTypes(PokemonType.GRASS, PokemonType.POISON)
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Erika')
         .withFlavorText('The Nature-Loving Princess!')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/c/c9/Spr_FRLG_Erika.png')
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
      const selfdestruct = GymPokemonMove.builder()
         .withLabel('Selfdestruct')
         .withType(PokemonType.NORMAL)
         .withDamageClass(DamageClass.PHYSICAL)
         .withPP(5)
         .withPower(200)
         .withAccuracy(100)
         .withDescription(
            `The user blows up to inflict severe damage, even making itself faint.`
         )
         .build();
      const sludge = GymPokemonMove.builder()
         .withLabel('Sludge')
         .withType(PokemonType.POISON)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(20)
         .withPower(65)
         .withAccuracy(100)
         .withDescription(`Toxic sludge is hurled at the foe. It may poison the target.`)
         .build();
      const smokescreen = GymPokemonMove.builder()
         .withLabel('SmokeScreen')
         .withType(PokemonType.NORMAL)
         .withDamageClass(DamageClass.STATUS)
         .withPP(20)
         .withAccuracy(100)
         .withDescription(
            `An obscuring cloud of smoke or ink reduces the foe's accuracy.`
         )
         .build();
      const toxic = GymPokemonMove.builder()
         .withLabel('Toxic')
         .withType(PokemonType.POISON)
         .withDamageClass(DamageClass.STATUS)
         .withPP(10)
         .withAccuracy(85)
         .withDescription(
            `A move that badly poisons the foe. Its poison damage worsens every turn.`
         )
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withAbility('Levitate')
            .withLevel(37)
            .withMoves(selfdestruct, sludge, smokescreen, toxic)
            .withSpecies('Koffing')
            .withIconUrl(Sprites.KOFFING.icon_url)
            .withSpriteUrl(Sprites.KOFFING.sprite_url)
            .withTypes(PokemonType.POISON)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Sticky Hold')
            .withLevel(39)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Minimize')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(20)
                  .withDescription(
                     `The user compresses all the cells in its body to raise its evasiveness.`
                  )
                  .build(),
               sludge,
               GymPokemonMove.builder()
                  .withLabel('Acid Armor')
                  .withType(PokemonType.POISON)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(40)
                  .withDescription(
                     `The user alters its cells to liquefy itself and sharply raise Defense.`
                  )
                  .build(),
               toxic
            )
            .withSpecies('Muk')
            .withIconUrl(Sprites.MUK.icon_url)
            .withSpriteUrl(Sprites.MUK.sprite_url)
            .withTypes(PokemonType.POISON)
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withAbility('Levitate')
            .withLevel(37)
            .withMoves(selfdestruct, sludge, smokescreen, toxic)
            .withSpecies('Koffing')
            .withIconUrl(Sprites.KOFFING.icon_url)
            .withSpriteUrl(Sprites.KOFFING.sprite_url)
            .withTypes(PokemonType.POISON)
            .build(),
         GymPokemon.builder()
            .withSortId(4)
            .withAbility('Levitate')
            .withLevel(43)
            .withMoves(tackle, sludge, smokescreen, toxic)
            .withSpecies('Weezing')
            .withIconUrl(Sprites.WEEZING.icon_url)
            .withSpriteUrl(Sprites.WEEZING.sprite_url)
            .withTypes(PokemonType.POISON)
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Koga')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/0/02/Spr_FRLG_Koga.png')
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
      const psybeam = GymPokemonMove.builder()
         .withLabel('Psybeam')
         .withType(PokemonType.PSYCHIC)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(20)
         .withPower(65)
         .withAccuracy(100)
         .withDescription(
            `A peculiar ray is shot at the foe. It may leave the foe confused.`
         )
         .build();
      const futureSight = GymPokemonMove.builder()
         .withLabel('Future Sight')
         .withType(PokemonType.PSYCHIC)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(15)
         .withPower(80)
         .withAccuracy(90)
         .withDescription(
            `Two turns after this move is used, the foe is attacked psychically.`
         )
         .build();
      const calmMind = GymPokemonMove.builder()
         .withLabel('Calm Mind')
         .withType(PokemonType.PSYCHIC)
         .withDamageClass(DamageClass.STATUS)
         .withPP(20)
         .withDescription(
            `The user focuses its mind to raise the Sp. Atk and Sp. Def stats.`
         )
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withAbility('Synchronize')
            .withLevel(38)
            .withMoves(
               psybeam,
               GymPokemonMove.builder()
                  .withLabel('Reflect')
                  .withType(PokemonType.PSYCHIC)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(20)
                  .withDescription(
                     `A wall of light cuts damage from physical attacks for five turns.`
                  )
                  .build(),
               futureSight,
               calmMind
            )
            .withIconUrl(Sprites.KADABRA.icon_url)
            .withSpriteUrl(Sprites.KADABRA.sprite_url)
            .withSpecies('Kadabra')
            .withTypes(PokemonType.PSYCHIC)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Soundproof')
            .withLevel(37)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Barrier')
                  .withType(PokemonType.PSYCHIC)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(30)
                  .withDescription(
                     `The user throws up a sturdy wall that sharply raises its Defense stat.`
                  )
                  .build(),
               psybeam,
               GymPokemonMove.builder()
                  .withLabel('Baton Pass')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(40)
                  .withDescription(
                     `The user switches out, passing along any stat changes to the new battler.`
                  )
                  .build(),
               calmMind
            )
            .withIconUrl(Sprites.MRMIME.icon_url)
            .withSpriteUrl(Sprites.MRMIME.sprite_url)
            .withSpecies('Mr. Mime')
            .withTypes(PokemonType.PSYCHIC)
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withAbility('Shield Dust')
            .withLevel(38)
            .withMoves(
               psybeam,
               GymPokemonMove.builder()
                  .withLabel('Gust')
                  .withType(PokemonType.FLYING)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(35)
                  .withPower(40)
                  .withAccuracy(100)
                  .withDescription(
                     `Strikes the foe with a gust of wind whipped up by wings.`
                  )
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Leech Life')
                  .withType(PokemonType.BUG)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(15)
                  .withPower(20)
                  .withAccuracy(100)
                  .withDescription(
                     `An attack that absorbs half the damage it inflicted to restore HP.`
                  )
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Supersonic')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.STATUS)
                  .withPP(20)
                  .withAccuracy(55)
                  .withDescription(
                     `The user generates odd sound waves. It may confuse the foe.`
                  )
                  .build()
            )
            .withIconUrl(Sprites.VENOMOTH.icon_url)
            .withSpriteUrl(Sprites.VENOMOTH.sprite_url)
            .withSpecies('Venomoth')
            .withTypes(PokemonType.BUG, PokemonType.POISON)
            .build(),
         GymPokemon.builder()
            .withSortId(4)
            .withAbility('Synchronize')
            .withLevel(43)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Psychic')
                  .withType(PokemonType.PSYCHIC)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(10)
                  .withPower(90)
                  .withAccuracy(100)
                  .withDescription(
                     `A strong telekinetic attack. It may also lower the foe's Sp. Def stat.`
                  )
                  .build(),
               recover,
               futureSight,
               calmMind
            )
            .withIconUrl(Sprites.ALAKAZAM.icon_url)
            .withSpriteUrl(Sprites.ALAKAZAM.sprite_url)
            .withSpecies('Alakazam')
            .withTypes(PokemonType.PSYCHIC)
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Sabrina')
         .withFlavorText('The Master of Psychic Pokémon!')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/d/dd/Spr_FRLG_Sabrina.png')
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
      const bite = GymPokemonMove.builder()
         .withLabel('Bite')
         .withType(PokemonType.DARK)
         .withDamageClass(DamageClass.PHYSICAL)
         .withPP(25)
         .withPower(60)
         .withAccuracy(100)
         .withDescription(`Bites with vicious fangs. May cause flinching.`)
         .build();
      const roar = GymPokemonMove.builder()
         .withLabel('Roar')
         .withType(PokemonType.NORMAL)
         .withDamageClass(DamageClass.STATUS)
         .withPP(20)
         .withAccuracy(100)
         .withPriority(MovePriority.MINUS6)
         .withDescription(
            `The foe is made to switch out with an ally. In the wild, the battle ends.`
         )
         .build();
      const stomp = GymPokemonMove.builder()
         .withLabel('Stomp')
         .withType(PokemonType.NORMAL)
         .withDamageClass(DamageClass.PHYSICAL)
         .withPP(20)
         .withPower(65)
         .withAccuracy(100)
         .withDescription(
            `The foe is stomped with a big foot. It may make the foe flinch.`
         )
         .build();
      const fireBlast = GymPokemonMove.builder()
         .withLabel('Fire Blast')
         .withType(PokemonType.FIRE)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(5)
         .withPower(120)
         .withAccuracy(85)
         .withDescription(
            `The foe is hit with an intense flame. It may leave the target with a burn.`
         )
         .build();
      const fireSpin = GymPokemonMove.builder()
         .withLabel('Fire Spin')
         .withType(PokemonType.FIRE)
         .withDamageClass(DamageClass.SPECIAL)
         .withPP(15)
         .withPower(15)
         .withAccuracy(70)
         .withDescription(
            `The foe is trapped in an intense spiral of fire that rages two to five turns.`
         )
         .build();
      const bounce = GymPokemonMove.builder()
         .withLabel('Bounce')
         .withType(PokemonType.FLYING)
         .withDamageClass(DamageClass.PHYSICAL)
         .withPP(5)
         .withPower(85)
         .withAccuracy(85)
         .withDescription(
            `The user bounces on the foe on the 2nd turn. It may paralyze the foe.`
         )
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withAbility('Intimidate')
            .withLevel(42)
            .withMoves(bite, roar, takeDown, fireBlast)
            .withSpecies('Growlithe')
            .withTypes(PokemonType.FIRE)
            .withIconUrl(Sprites.GROWLITHE.icon_url)
            .withSpriteUrl(Sprites.GROWLITHE.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Flash Fire')
            .withLevel(40)
            .withMoves(stomp, bounce, fireSpin, fireBlast)
            .withSpecies('Ponyta')
            .withTypes(PokemonType.FIRE)
            .withIconUrl(Sprites.PONYTA.icon_url)
            .withSpriteUrl(Sprites.PONYTA.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withAbility('Flash Fire')
            .withLevel(42)
            .withMoves(stomp, bounce, fireSpin, fireBlast)
            .withSpecies('Rapidash')
            .withTypes(PokemonType.FIRE)
            .withIconUrl(Sprites.RAPIDASH.icon_url)
            .withSpriteUrl(Sprites.RAPIDASH.sprite_url)
            .build(),
         GymPokemon.builder()
            .withSortId(4)
            .withAbility('Intimidate')
            .withLevel(47)
            .withMoves(bite, roar, takeDown, fireBlast)
            .withSpecies('Arcanine')
            .withTypes(PokemonType.FIRE)
            .withIconUrl(Sprites.ARCANINE.icon_url)
            .withSpriteUrl(Sprites.ARCANINE.sprite_url)
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Blaine')
         .withFlavorText('The Hotheaded Quiz Master!')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/6/6d/Spr_FRLG_Blaine.png')
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
      const rockBlast = GymPokemonMove.builder()
         .withLabel('Rock Blast')
         .withType(PokemonType.ROCK)
         .withDamageClass(DamageClass.PHYSICAL)
         .withPP(10)
         .withPower(25)
         .withAccuracy(80)
         .withDescription(`The user hurls two to five hard rocks at the foe to attack.`)
         .build();
      const scaryFace = GymPokemonMove.builder()
         .withLabel('Scary Face')
         .withType(PokemonType.NORMAL)
         .withDamageClass(DamageClass.STATUS)
         .withPP(10)
         .withAccuracy(90)
         .withDescription(
            `Frightens the foe with a scary face to sharply reduce its Speed.`
         )
         .build();
      const earthquake = GymPokemonMove.builder()
         .withLabel('Earthquake')
         .withType(PokemonType.GROUND)
         .withDamageClass(DamageClass.PHYSICAL)
         .withPP(10)
         .withPower(100)
         .withAccuracy(100)
         .withDescription(
            `An earthquake that strikes all Pokémon in battle excluding the user.`
         )
         .build();
      const doubleKick = GymPokemonMove.builder()
         .withLabel('Double Kick')
         .withType(PokemonType.FIGHTING)
         .withDamageClass(DamageClass.PHYSICAL)
         .withPP(30)
         .withPower(30)
         .withAccuracy(100)
         .withDescription(`Two legs are used to quickly kick the foe twice in one turn.`)
         .build();
      const poisonSting = GymPokemonMove.builder()
         .withLabel('Poison Sting')
         .withType(PokemonType.POISON)
         .withDamageClass(DamageClass.STATUS)
         .withPP(35)
         .withPower(15)
         .withAccuracy(100)
         .withDescription(
            `The foe is stabbed with a toxic barb, etc. It may poison the foe.`
         )
         .build();
      const pokemons = [
         GymPokemon.builder()
            .withSortId(1)
            .withAbility('Lightning Rod')
            .withLevel(45)
            .withMoves(takeDown, rockBlast, scaryFace, earthquake)
            .withSpecies('Rhyhorn')
            .withIconUrl(Sprites.RHYHORN.icon_url)
            .withSpriteUrl(Sprites.RHYHORN.sprite_url)
            .withTypes(PokemonType.GROUND, PokemonType.ROCK)
            .build(),
         GymPokemon.builder()
            .withSortId(2)
            .withAbility('Sand Veil')
            .withLevel(42)
            .withMoves(
               GymPokemonMove.builder()
                  .withLabel('Slash')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withPower(70)
                  .withAccuracy(100)
                  .withDescription(
                     `The foe is slashed with claws, etc. It has a high critical-hit ratio.`
                  )
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Sand Tomb')
                  .withType(PokemonType.GROUND)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(15)
                  .withPower(15)
                  .withAccuracy(70)
                  .withDescription(
                     `The foe is trapped inside a painful sandstorm for two to five turns.`
                  )
                  .build(),
               GymPokemonMove.builder()
                  .withLabel('Mud-Slap')
                  .withType(PokemonType.GROUND)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withPP(10)
                  .withPower(20)
                  .withAccuracy(100)
                  .withDescription(
                     `Mud is hurled in the foe's face to inflict damage and lower its accuracy.`
                  )
                  .build(),
               earthquake
            )
            .withSpecies('Dugtrio')
            .withIconUrl(Sprites.DUGTRIO.icon_url)
            .withSpriteUrl(Sprites.DUGTRIO.sprite_url)
            .withTypes(PokemonType.GROUND)
            .build(),
         GymPokemon.builder()
            .withSortId(3)
            .withAbility('Poison Point')
            .withLevel(44)
            .withMoves(
               doubleKick,
               earthquake,
               poisonSting,
               GymPokemonMove.builder()
                  .withLabel('Body Slam')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(15)
                  .withPower(85)
                  .withAccuracy(100)
                  .withDescription(
                     `The user drops its full body on the foe. It may leave the foe paralyzed.`
                  )
                  .build()
            )
            .withSpecies('Nidoqueen')
            .withIconUrl(Sprites.NIDOQUEEN.icon_url)
            .withSpriteUrl(Sprites.NIDOQUEEN.sprite_url)
            .withTypes(PokemonType.POISON, PokemonType.GROUND)
            .build(),
         GymPokemon.builder()
            .withSortId(4)
            .withAbility('Poison Point')
            .withLevel(45)
            .withMoves(
               doubleKick,
               earthquake,
               poisonSting,
               GymPokemonMove.builder()
                  .withLabel('Thrash')
                  .withType(PokemonType.NORMAL)
                  .withDamageClass(DamageClass.PHYSICAL)
                  .withPP(20)
                  .withPower(90)
                  .withAccuracy(100)
                  .withDescription(
                     `The user rampages about for two to three turns, then becomes confused.`
                  )
                  .build()
            )
            .withSpecies('Nidoking')
            .withIconUrl(Sprites.NIDOKING.icon_url)
            .withSpriteUrl(Sprites.NIDOKING.sprite_url)
            .withTypes(PokemonType.POISON, PokemonType.GROUND)
            .build(),
         GymPokemon.builder()
            .withSortId(5)
            .withAbility('Lightning Rod')
            .withLevel(50)
            .withMoves(takeDown, rockBlast, scaryFace, earthquake)
            .withSpecies('Rhyhorn')
            .withIconUrl(Sprites.RHYHORN.icon_url)
            .withSpriteUrl(Sprites.RHYHORN.sprite_url)
            .withTypes(PokemonType.GROUND, PokemonType.ROCK)
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Giovanni')
         .withFlavorText('The Self-Proclaimed Strongest Trainer')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/4/41/Spr_FRLG_Giovanni.png')
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

const tackle = GymPokemonMove.builder()
   .withAccuracy(95)
   .withDamageClass(DamageClass.PHYSICAL)
   .withDescription(
      `A physical attack in which the user charges, full body, into the foe.`
   )
   .withLabel('Tackle')
   .withPP(35)
   .withPower(35)
   .withType(PokemonType.NORMAL)
   .build();

const harden = GymPokemonMove.builder()
   .withLabel('Harden')
   .withType(PokemonType.NORMAL)
   .withDamageClass(DamageClass.STATUS)
   .withPP(30)
   .withDescription(
      `The user stiffens all the muscles in its body to raise its Defense stat.`
   )
   .build();

const recover = GymPokemonMove.builder()
   .withLabel('Recover')
   .withType(PokemonType.NORMAL)
   .withDamageClass(DamageClass.STATUS)
   .withPP(20)
   .withDescription(
      `A self-healing move that restores HP by up to half of the user's maximum HP.`
   )
   .build();

const takeDown = GymPokemonMove.builder()
   .withLabel('Take Down')
   .withType(PokemonType.NORMAL)
   .withDamageClass(DamageClass.PHYSICAL)
   .withPP(20)
   .withPower(90)
   .withAccuracy(85)
   .withDescription(
      `A reckless, full-body charge attack that also hurts the user a little.`
   )
   .build();
