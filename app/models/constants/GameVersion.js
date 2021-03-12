export const GameVersion = Object.freeze({
   LETSGOPIKACHU: {
      label: `Let's Go Pikachu`,
      artwork_url:
         'https://cdn.bulbagarden.net/upload/a/ae/Lets_Go_Pikachu_EN_boxart.png',
      version_family: VersionFamily.LETSGO,
   },
   LETSGOEEVEE: {
      label: `Let's Go Eevee`,
      artwork_url: 'https://cdn.bulbagarden.net/upload/1/1e/Lets_Go_Eevee_EN_boxart.png',
      version_family: VersionFamily.LETSGO,
   },
   RUBY: {
      label: `Ruby`,
      artwork_url: 'https://cdn.bulbagarden.net/upload/5/5f/Ruby_EN_boxart.png',
      version_family: VersionFamily.RUBYSAPPHIRE,
   },
   SAPPHIRE: {
      label: `Sapphire`,
      artwork_url: 'https://cdn.bulbagarden.net/upload/6/62/Sapphire_EN_boxart.png',
      version_family: VersionFamily.RUBYSAPPHIRE,
   },
   EMERALD: {
      label: `Emerald`,
      artwork_url:
         'https://cdn.bulbagarden.net/upload/archive/6/65/20100729165716%21Emerald_EN_boxart.jpg',
      version_family: VersionFamily.EMERALD,
   },

});

export const getVersion = version => {
   return {
      label: GameVersion[version].label,
      artwork_url: GameVersion[version].artwork_url,
      family: GameVersion[version].version_family,
   };
},

export const VersionFamily = Object.freeze({
   LETSGO: 'letsgo',
   RUBYSAPPHIRE: 'rubysapphire',
   EMERALD: 'emerald',
});
