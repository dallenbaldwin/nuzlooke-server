import Gym from '../components/Gym.js';
import GymBadge from '../components/GymBadge.js';
import GymLeader from '../components/GymLeader.js';
import GymPokemon from '../components/GymPokemon.js';
import GymPokemonMove from '../components/GymPokemonMove.js';
import PokemonType from '../../constants/PokemonType.js';
import UtilConst from '../../constants/UtilConst.js';
import DamageClass from '../../constants/DamageClass.js';

// convert everyone to use builders
// isPriority can be false by default with builder
// remove nulls and opt for skipping the builder method
// remove the utilconst.none
// listify the builder methods that take arrays??

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
            .withSpecies('Geodude')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/74.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png'
            )
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
            .withSpecies('Onix')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/95.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png'
            )
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
         .withFlavorText('The Rock-Solid Pokémon Trainer')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/e/e2/VSBrock_PE.png')
         .build();
      const badge = GymBadge.builder()
         .withLabel('Boulder Badge')
         .withSpriteUrl(
            'https://cdn.bulbagarden.net/upload/archive/d/dd/20160212104017%21Boulder_Badge.png'
         )
         .build();
      return Gym.builder()
         .withLabel('Pewter Gym')
         .withLocation('Pewter City')
         .withDominantType(PokemonType.ROCK)
         .withBadge(badge)
         .withLeader(leader)
         .withPokemons(pokemons)
         .build();
   }
   getMisty() {
      const pokemons = [
         GymPokemon.builder()
            .withSpecies('Psyduck')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/54.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png'
            )
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
            .withSpecies('Starmie')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/121.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png'
            )
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
         .withFlavorText('The Tomboyish Mermaid')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/0/0c/VSMisty_PE.png')
         .build();
      const badge = GymBadge.builder()
         .withLabel('Cascade Badge')
         .withSpriteUrl(
            'https://cdn.bulbagarden.net/upload/archive/9/9c/20160212103957%21Cascade_Badge.png'
         )
         .build();
      return Gym.builder()
         .withLabel('Cerulean Gym')
         .withLocation('Cerulean City')
         .withDominantType(PokemonType.WATER)
         .withBadge(badge)
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
            .withLevel(25)
            .withTypes([PokemonType.ELECTRIC])
            .withSpecies('Voltorb')
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png'
            )
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/100.png'
            )
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
            .withSpecies('Magnemite')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/81.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png'
            )
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
            .withSpecies('Raichu')
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'
            )
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/26.png'
            )
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
         .withFlavorText('The Lightning American')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/c/c6/VSLt_Surge_PE.png')
         .build();
      const badge = GymBadge.builder()
         .withLabel('Thunder Badge')
         .withSpriteUrl(
            'https://cdn.bulbagarden.net/upload/archive/a/a6/20160212103845%21Thunder_Badge.png'
         )
         .build();
      return Gym.builder()
         .withLabel('Vermilion Gym')
         .withLocation('Vermilion City')
         .withDominantType(PokemonType.ELECTRIC)
         .withBadge(badge)
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
            .withSpecies('Tangela')
            .withLevel(33)
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png'
            )
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/114.png'
            )
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
            .withSpecies('Weepinbell')
            .withTypes([PokemonType.GRASS, PokemonType.POISON])
            .withLevel(33)
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png'
            )
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/70.png'
            )
            .withMoves([megaDrain, poisonJab])
            .build(),
         GymPokemon.builder()
            .withSpecies('Vileplume')
            .withLevel(34)
            .withTypes([PokemonType.GRASS, PokemonType.POISON])
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png'
            )
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/45.png'
            )
            .withMoves([
               megaDrain,
               GymPokemonMove.builder()
                  .withLabel('Moonblast')
                  .withAccuracy(100)
                  .withPP(15)
                  .withPower(95)
                  .withDamageClass(DamageClass.SPECIAL)
                  .withType(PokemonType.FAIRY)
                  .withDescription(
                     `Borrowing the power of the moon, the user attacks the target. This may also lower the target's Sp. Atk stat.`
                  )
                  .build(),
            ])
            .build(),
      ];
      const leader = GymLeader.builder()
         .withLabel('Erika')
         .withFlavorText('The Nature-Loving Princess!')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/3/35/VSErika_PE.png')
         .build();
      const badge = GymBadge.builder()
         .withLabel('Rainbow Badge')
         .withSpriteUrl(
            'https://cdn.bulbagarden.net/upload/archive/b/b5/20160212103830%21Rainbow_Badge.png'
         )
         .build();
      return Gym.builder()
         .withBadge(badge)
         .withLabel('Celadon Gym')
         .withDominantType(PokemonType.GRASS)
         .withLocation('Celadon City')
         .withLeader(leader)
         .withPokemons(pokemons)
         .build();
   }
   // TODO
   getKoga() {
      const pokemons = [];
      const leader = new GymLeader();
      const badge = new GymBadge();
      return new Gym(null, null, null, badge, leader, pokemons);
   }
   getSabrina() {
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
      const pokemons = [
         GymPokemon.builder()
            .withSpecies('Mr. Mime')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/122.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png'
            )
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
            .withSpecies('Slowbro')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/80.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png'
            )
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
            .withSpecies('Jynx')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/124.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png'
            )
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
            .withSpecies('Alakazam')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/65.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png'
            )
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
      const badge = GymBadge.builder()
         .withLabel('Marsh Badge')
         .withSpriteUrl(
            'https://cdn.bulbagarden.net/upload/archive/6/6b/20160212103714%21Marsh_Badge.png'
         )
         .build();
      const leader = GymLeader.builder()
         .withLabel('Sabrina')
         .withFlavorText('The Mistress of Psychic-type Pokémon')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/2/20/VSSabrina_PE.png')
         .build();
      return Gym.builder()
         .withLabel('Saffron Gym')
         .withLocation('Saffron City')
         .withDominantType(PokemonType.PSYCHIC)
         .withBadge(badge)
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
            .withSpecies('Magmar')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/126.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png'
            )
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
            .withSpecies('Rapidash')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/78.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png'
            )
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
            .withSpecies('Ninetales')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/38.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png'
            )
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
            .withSpecies('Arcanine')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/59.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png'
            )
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
      const badge = GymBadge.builder()
         .withLabel('Volcano Badge')
         .withSpriteUrl(
            'https://cdn.bulbagarden.net/upload/archive/1/12/20160212101506%21Volcano_Badge.png'
         )
         .build();
      return Gym.builder()
         .withLabel('Cinnabar Gym')
         .withLocation('Cinnabar Island')
         .withDominantType(PokemonType.FIRE)
         .withBadge(badge)
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
            .withSpecies('Dugtrio')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/51.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png'
            )
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
                  .withIsPriority()
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
            .withSpecies('Nidoqueen')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/31.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png'
            )
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
            .withSpecies('Nidoking')
            .withIconUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/34.png'
            )
            .withSpriteUrl(
               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png'
            )
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
         new GymPokemon(
            'Rhydon',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/112.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png',
            [PokemonType.GROUND, PokemonType.ROCK],
            50,
            UtilConst.NONE,
            UtilConst.NONE,
            [
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
            ]
         ),
      ];
      const leader = GymLeader.builder()
         .withLabel('...')
         .withFlavorText('The rest of the text is illegible...')
         .withSpritUrl('https://cdn.bulbagarden.net/upload/4/4a/VSGiovanni_PE.png')
         .build();
      const badge = GymBadge.builder()
         .withLabel('Earth Badge')
         .withSpriteUrl(
            'https://cdn.bulbagarden.net/upload/archive/7/78/20160212101002%21Earth_Badge.png'
         )
         .build();
      return Gym.builder()
         .withLabel('Viridian Gym')
         .withLocation('Viridian City')
         .withDominantType(PokemonType.GROUND)
         .withBadge(badge)
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
   .withIsPriority()
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

console.log(new LetsGo().gyms[7].pokemons[1].moves);
