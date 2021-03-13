import Gym from '../components/Gym.js';
import GymBadge from '../components/GymBadge.js';
import GymLeader from '../components/GymLeader.js';
import GymPokemon from '../components/GymPokemon.js';
import GymPokemonMove from '../components/GymPokemonMove.js';
import PokemonType from '../../constants/PokemonType.js';
import UtilConst from '../../constants/UtilConst.js';
import DamageClass from '../../constants/DamageClass.js';

// TODO: implement builders for all components and start using them. maybe convert old declarations into builders

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
         new GymPokemon(
            'Geodude',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/74.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png',
            [PokemonType.ROCK, PokemonType.GROUND],
            11,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               new GymPokemonMove(
                  'Tackle',
                  'A physical attack in which the user charges and slams into the target with its whole body.',
                  false,
                  DamageClass.PHYSICAL,
                  PokemonType.NORMAL,
                  35,
                  40,
                  100
               ),
            ]
         ),
         new GymPokemon(
            'Onix',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/95.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png',
            [PokemonType.ROCK, PokemonType.GROUND],
            12,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               new GymPokemonMove(
                  'Headbutt',
                  'The user sticks out its head and attacks by charging straight into the target. This may also make the target flinch.',
                  false,
                  DamageClass.PHYSICAL,
                  PokemonType.NORMAL,
                  15,
                  70,
                  100
               ),
               new GymPokemonMove(
                  'Bind',
                  'Things such as long bodies or tentacles are used to bind and squeeze the target for four to five turns.',
                  false,
                  DamageClass.PHYSICAL,
                  PokemonType.NORMAL,
                  20,
                  15,
                  85
               ),
               new GymPokemonMove(
                  'Rock Throw',
                  'The user picks up and throws a small rock at the target to attack.',
                  false,
                  DamageClass.PHYSICAL,
                  PokemonType.ROCK,
                  15,
                  50,
                  90
               ),
            ]
         ),
      ];
      const leader = new GymLeader(
         'Brock',
         'The Rock-Solid Pokémon Trainer',
         'https://cdn.bulbagarden.net/upload/e/e2/VSBrock_PE.png'
      );
      const badge = new GymBadge(
         'Boulder Badge',
         'https://cdn.bulbagarden.net/upload/archive/d/dd/20160212104017%21Boulder_Badge.png'
      );
      return new Gym(
         'Pewter Gym',
         'Pewter City',
         PokemonType.ROCK,
         badge,
         leader,
         pokemons
      );
   }
   getMisty() {
      const pokemons = [
         new GymPokemon(
            'Psyduck',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/54.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
            [PokemonType.WATER],
            18,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               new GymPokemonMove(
                  'Confusion',
                  'The target is hit by a weak telekinetic force. This may also confuse the target.',
                  false,
                  DamageClass.SPECIAL,
                  PokemonType.PSYCHIC,
                  25,
                  50,
                  100
               ),
               new GymPokemonMove(
                  'Water Gun',
                  'The target is blasted with a forceful shot of water.',
                  false,
                  DamageClass.SPECIAL,
                  PokemonType.WATER,
                  25,
                  40,
                  100
               ),
            ]
         ),
         new GymPokemon(
            'Starmie',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/121.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png',
            [PokemonType.WATER, PokemonType.PSYCHIC],
            19,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               new GymPokemonMove(
                  'Scald',
                  'The user shoots boiling hot water at its target. This may also leave the target with a burn.',
                  false,
                  DamageClass.SPECIAL,
                  PokemonType.WATER,
                  15,
                  80,
                  100
               ),
               new GymPokemonMove(
                  'Swift',
                  'Star-shaped rays are shot at the opposing Pokémon. This attack never misses.',
                  false,
                  DamageClass.SPECIAL,
                  PokemonType.NORMAL,
                  20,
                  60,
                  null
               ),
               new GymPokemonMove(
                  'Psywave',
                  'The target is attacked with an odd psychic wave. The attack varies in intensity.',
                  false,
                  DamageClass.SPECIAL,
                  PokemonType.PSYCHIC,
                  15,
                  null,
                  100
               ),
            ]
         ),
      ];
      const leader = new GymLeader(
         'Misty',
         'The Tomboyish Mermaid',
         'https://cdn.bulbagarden.net/upload/0/0c/VSMisty_PE.png'
      );
      const badge = new GymBadge(
         'Cascade Badge',
         'https://cdn.bulbagarden.net/upload/archive/9/9c/20160212103957%21Cascade_Badge.png'
      );
      return new Gym(
         'Cerulean Gym',
         'Cerulean City',
         PokemonType.WATER,
         badge,
         leader,
         pokemons
      );
   }
   getSurge() {
      const pokemons = [];
      const leader = new GymLeader();
      const badge = new GymBadge();
      return new Gym(
         'Vermilion Gym',
         'Vermilion City',
         PokemonType.ELECTRIC,
         badge,
         leader,
         pokemons
      );
   }
   getErika() {
      const pokemons = [];
      const leader = new GymLeader();
      const badge = new GymBadge();
      return new Gym(null, null, null, badge, leader, pokemons);
   }
   getKoga() {
      const pokemons = [];
      const leader = new GymLeader();
      const badge = new GymBadge();
      return new Gym(null, null, null, badge, leader, pokemons);
   }
   getSabrina() {
      const psychic = new GymPokemonMove(
         'Psychic',
         `The target is hit by a strong telekinetic force. This may also lower the target's Sp. Def stat.`,
         false,
         DamageClass.SPECIAL,
         PokemonType.PSYCHIC,
         10,
         90,
         100
      );
      const pokemons = [
         new GymPokemon(
            'Mr. Mime',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/122.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png',
            [PokemonType.PSYCHIC, PokemonType.FAIRY],
            43,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               psychic,
               new GymPokemonMove(
                  'Reflect',
                  `A wondrous wall of light is put up to reduce damage from physical attacks for five turns.`,
                  false,
                  DamageClass.STATUS,
                  PokemonType.PSYCHIC,
                  20,
                  null,
                  null
               ),
               new GymPokemonMove(
                  'Light Screen',
                  `A wondrous wall of light is put up to reduce damage from special attacks for five turns.`,
                  false,
                  DamageClass.STATUS,
                  PokemonType.PSYCHIC,
                  30,
                  null,
                  null
               ),
               new GymPokemonMove(
                  'Double Slap',
                  `The target is slapped repeatedly, back and forth, two to five times in a row.`,
                  false,
                  DamageClass.PHYSICAL,
                  PokemonType.NORMAL,
                  10,
                  15,
                  85
               ),
            ]
         ),
         new GymPokemon(
            'Slowbro',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/80.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png',
            [PokemonType.WATER, PokemonType.PSYCHIC],
            43,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               psychic,
               new GymPokemonMove(
                  'Yawn',
                  'The user lets loose a huge yawn that lulls the target into falling asleep on the next turn.',
                  false,
                  DamageClass.STATUS,
                  PokemonType.NORMAL,
                  10,
                  null,
                  null
               ),
               new GymPokemonMove(
                  'Surf',
                  `The user attacks everything around it by swamping its surroundings with a giant wave.`,
                  false,
                  DamageClass.SPECIAL,
                  PokemonType.WATER,
                  15,
                  90,
                  100
               ),
               new GymPokemonMove(
                  'Calm Mind',
                  'The user quietly focuses its mind and calms its spirit to raise its Sp. Atk and Sp. Def stats.',
                  false,
                  DamageClass.STATUS,
                  PokemonType.PSYCHIC,
                  20,
                  null,
                  null
               ),
            ]
         ),
         new GymPokemon(
            'Jynx',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/124.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png',
            [PokemonType.ICE, PokemonType.PSYCHIC],
            43,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               psychic,
               new GymPokemonMove(
                  'Lovely Kiss',
                  `With a scary face, the user tries to force a kiss on the target. If it succeeds, the target falls asleep.`,
                  false,
                  DamageClass.STATUS,
                  PokemonType.NORMAL,
                  10,
                  null,
                  75
               ),
               new GymPokemonMove(
                  'Ice Punch',
                  'The target is punched with an icy fist. This may also leave the target frozen.',
                  false,
                  DamageClass.PHYSICAL,
                  PokemonType.ICE,
                  15,
                  75,
                  100
               ),
            ]
         ),
         new GymPokemon(
            'Alakazam',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/65.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png',
            [PokemonType.PSYCHIC],
            44,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               psychic,
               new GymPokemonMove(
                  'Night Shade',
                  `The user makes the target see a frightening mirage. It inflicts damage equal to the user's level.`,
                  false,
                  DamageClass.SPECIAL,
                  PokemonType.GHOST,
                  15,
                  null,
                  100
               ),
            ]
         ),
      ];
      const badge = new GymBadge(
         'Marsh Badge',
         'https://cdn.bulbagarden.net/upload/archive/6/6b/20160212103714%21Marsh_Badge.png'
      );
      const leader = new GymLeader(
         'Sabrina',
         'The Mistress of Psychic-type Pokémon',
         'https://cdn.bulbagarden.net/upload/2/20/VSSabrina_PE.png'
      );
      return new Gym(
         'Saffron Gym',
         'Saffron City',
         PokemonType.PSYCHIC,
         badge,
         leader,
         pokemons
      );
   }
   getBlaine() {
      const flareBlitz = new GymPokemonMove(
         'Flare Blitz',
         'The user cloaks itself in fire and charges the target. This also damages the user quite a lot. This may leave the target with a burn.',
         false,
         DamageClass.PHYSICAL,
         PokemonType.FIRE,
         15,
         120,
         100
      );
      const quickAttack = new GymPokemonMove(
         'Quick Attack',
         'The user lunges at the target at a speed that makes it almost invisible. This move always goes first.',
         true,
         DamageClass.PHYSICAL,
         PokemonType.NORMAL,
         30,
         40,
         100
      );
      const pokemons = [
         new GymPokemon(
            'Magmar',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/126.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png',
            [PokemonType.FIRE],
            47,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               new GymPokemonMove(
                  'Flamethrower',
                  'The target is scorched with an intense blast of fire. This may also leave the target with a burn.',
                  false,
                  DamageClass.SPECIAL,
                  PokemonType.FIRE,
                  15,
                  90,
                  100
               ),
               new GymPokemonMove(
                  'Low Kick',
                  `A powerful low kick that makes the target fall over. The heavier the target, the greater the move's power.`,
                  false,
                  DamageClass.PHYSICAL,
                  PokemonType.FIGHTING,
                  20,
                  null,
                  100
               ),
               new GymPokemonMove(
                  'Confuse Ray',
                  'The target is exposed to a sinister ray that triggers confusion.',
                  false,
                  DamageClass.STATUS,
                  PokemonType.GHOST,
                  10,
                  null,
                  100
               ),
            ]
         ),
         new GymPokemon(
            'Rapidash',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/78.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png',
            [PokemonType.FIRE],
            47,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               flareBlitz,
               quickAttack,
               new GymPokemonMove(
                  'Fury Attack',
                  'The target is jabbed repeatedly with a horn or beak two to five times in a row.',
                  false,
                  DamageClass.PHYSICAL,
                  PokemonType.NORMAL,
                  20,
                  15,
                  85
               ),
            ]
         ),
         new GymPokemon(
            'Ninetales',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/38.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png',
            [PokemonType.FIRE],
            47,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               new GymPokemonMove(
                  'Fire Blast',
                  'The target is attacked with an intense blast of all-consuming fire. This may also leave the target with a burn.',
                  false,
                  DamageClass.SPECIAL,
                  PokemonType.FIRE,
                  5,
                  110,
                  85
               ),
               quickAttack,
            ]
         ),
         new GymPokemon(
            'Arcanine',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/59.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png',
            [PokemonType.FIRE],
            48,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               flareBlitz,
               new GymPokemonMove(
                  'Outrage',
                  'The user rampages and attacks for two to three turns. The user then becomes confused.',
                  false,
                  DamageClass.PHYSICAL,
                  PokemonType.DRAGON,
                  10,
                  120,
                  100
               ),
               crunch,
            ]
         ),
      ];
      const leader = new GymLeader(
         'Blaine',
         'The Hotheaded Quiz Master!',
         'https://cdn.bulbagarden.net/upload/1/11/VSBlaine_PE.png'
      );
      const badge = new GymBadge(
         'Volcano Badge',
         'https://cdn.bulbagarden.net/upload/archive/1/12/20160212101506%21Volcano_Badge.png'
      );
      return new Gym(
         'Cinnabar Gym',
         'Cinnabar Island',
         PokemonType.FIRE,
         badge,
         leader,
         pokemons
      );
   }
   getGiovanni() {
      const earthquake = new GymPokemonMove(
         'Earthquake',
         'The user sets off an earthquake that strikes every Pokémon around it.',
         false,
         DamageClass.PHYSICAL,
         PokemonType.GROUND,
         10,
         100,
         100
      );
      const megahorn = new GymPokemonMove(
         'Megahorn',
         'Using its tough and impressive horn, the user rams into the target with no letup.',
         false,
         DamageClass.PHYSICAL,
         PokemonType.BUG,
         10,
         120,
         85
      );
      const pokemons = [
         new GymPokemon(
            'Dugtrio',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/51.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png',
            [PokemonType.GROUND],
            49,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               new GymPokemonMove(
                  'Slash',
                  'The target is attacked with a slash of claws or blades. Critical hits land more easily.',
                  false,
                  DamageClass.PHYSICAL,
                  PokemonType.NORMAL,
                  20,
                  70,
                  100
               ),
               new GymPokemonMove(
                  'Sucker Punch',
                  'This move enables the user to attack first. This move fails if the target is not readying an attack.',
                  true,
                  DamageClass.PHYSICAL,
                  PokemonType.DARK,
                  5,
                  70,
                  100
               ),
               earthquake,
            ]
         ),
         new GymPokemon(
            'Nidoqueen',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/31.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png',
            [PokemonType.POISON, PokemonType.GROUND],
            49,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               new GymPokemonMove(
                  'Super Fang',
                  `The user chomps hard on the target with its sharp front fangs. This cuts the target's HP in half.`,
                  false,
                  DamageClass.PHYSICAL,
                  PokemonType.NORMAL,
                  10,
                  null,
                  90
               ),
               earthquake,
               crunch,
            ]
         ),
         new GymPokemon(
            'Nidoking',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/34.png',
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png',
            [PokemonType.POISON, PokemonType.GROUND],
            49,
            UtilConst.NONE,
            UtilConst.NONE,
            [
               megahorn,
               earthquake,
               new GymPokemonMove(
                  'Poison Jab',
                  'The target is stabbed with a tentacle or arm steeped in poison. This may also poison the target.',
                  false,
                  DamageClass.PHYSICAL,
                  PokemonType.POISON,
                  20,
                  80,
                  100
               ),
               new GymPokemonMove(
                  'Horn Drill',
                  'The user stabs the target with a horn that rotates like a drill. The target faints instantly if this attack hits.',
                  false,
                  DamageClass.PHYSICAL,
                  PokemonType.NORMAL,
                  null,
                  30
               ),
            ]
         ),
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
               new GymPokemonMove(
                  'Rock Slide',
                  'Large boulders are hurled at the opposing Pokémon to inflict damage. This may also make the opposing Pokémon flinch.',
                  false,
                  DamageClass.PHYSICAL,
                  PokemonType.ROCK,
                  10,
                  75,
                  90
               ),
               megahorn,
            ]
         ),
      ];
      const leader = new GymLeader(
         '...',
         'The rest of the text is illegible...',
         'https://cdn.bulbagarden.net/upload/4/4a/VSGiovanni_PE.png'
      );
      const badge = new GymBadge(
         'Earth Badge',
         'https://cdn.bulbagarden.net/upload/archive/7/78/20160212101002%21Earth_Badge.png'
      );
      return new Gym(
         'Viridian Gym',
         'Viridian City',
         PokemonType.GROUND,
         badge,
         leader,
         pokemons
      );
   }
}

const crunch = new GymPokemonMove(
   'Crunch',
   `The user crunches up the target with sharp fangs. This may also lower the target's Defense stat.`,
   false,
   DamageClass.PHYSICAL,
   PokemonType.DARK,
   15,
   80,
   100
);
