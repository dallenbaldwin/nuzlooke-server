export const VersionFamily = Object.freeze({
   LETSGO: 'letsgo',
   RUBYSAPPHIRE: 'rubysapphire',
   EMERALD: 'emerald',
});

export const APIGeneration = Object.freeze({
   GEN7: 'generation-vii',
   GEN3: 'generation-iii',
});

export const APIVersion = Object.freeze({
   LETSGOPIKACHU: 'lets-go-pikachu',
   LETSGOEEVEE: 'lets-go-eevee',
   RUBY: 'ruby',
   SAPPHIRE: 'sapphire',
   EMERALD: 'emerald',
});

export const APIVersionGroup = Object.freeze({
   LETSGO: 'lets-go',
   RUBYSAPPHIRE: 'ruby-sapphire',
   EMERALD: 'emerald',
});

export const GameVersion = Object.freeze({
   LETSGOPIKACHU: {
      label: `Let's Go Pikachu`,
      artwork_url:
         'https://cdn.bulbagarden.net/upload/a/ae/Lets_Go_Pikachu_EN_boxart.png',
      version_family: VersionFamily.LETSGO,
      api_data: {
         generation: APIGeneration.GEN7,
         version: APIVersion.LETSGOPIKACHU,
         version_group: APIVersionGroup.LETSGO,
      },
   },
   LETSGOEEVEE: {
      label: `Let's Go Eevee`,
      artwork_url: 'https://cdn.bulbagarden.net/upload/1/1e/Lets_Go_Eevee_EN_boxart.png',
      version_family: VersionFamily.LETSGO,
      api_data: {
         generation: APIGeneration.GEN7,
         version: APIVersion.LETSGOEEVEE,
         version_group: APIVersionGroup.LETSGO,
      },
   },
   RUBY: {
      label: `Ruby`,
      artwork_url: 'https://cdn.bulbagarden.net/upload/5/5f/Ruby_EN_boxart.png',
      version_family: VersionFamily.RUBYSAPPHIRE,
      api_data: {
         generation: APIGeneration.GEN3,
         version: APIVersion.RUBY,
         version_group: APIVersionGroup.RUBYSAPPHIRE,
      },
   },
   SAPPHIRE: {
      label: `Sapphire`,
      artwork_url: 'https://cdn.bulbagarden.net/upload/6/62/Sapphire_EN_boxart.png',
      version_family: VersionFamily.RUBYSAPPHIRE,
      api_data: {
         generation: APIGeneration.GEN3,
         version: APIVersion.SAPPHIRE,
         version_group: APIVersionGroup.RUBYSAPPHIRE,
      },
   },
   EMERALD: {
      label: `Emerald`,
      artwork_url:
         'https://cdn.bulbagarden.net/upload/archive/6/65/20100729165716%21Emerald_EN_boxart.jpg',
      version_family: VersionFamily.EMERALD,
      api_data: {
         generation: APIGeneration.GEN3,
         version: APIVersion.EMERALD,
         version_group: APIVersionGroup.EMERALD,
      },
   },
});

export const getVersion = version => {
   return {
      label: GameVersion[version].label,
      artwork_url: GameVersion[version].artwork_url,
      family: GameVersion[version].version_family,
      api_data: GameVersion[version].api_data,
   };
};
