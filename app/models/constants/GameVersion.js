export const GameVersion = Object.freeze({
   LETSGOPIKACHU: {
      version_name: `Let's Go Pikachu`,
      artwork_url:
         'https://cdn.bulbagarden.net/upload/a/ae/Lets_Go_Pikachu_EN_boxart.png',
      version_family: VersionFamily.LETSGO,
   },
   LETSGOEEVEE: {
      version_name: `Let's Go Eevee`,
      artwork_url: 'https://cdn.bulbagarden.net/upload/1/1e/Lets_Go_Eevee_EN_boxart.png',
      version_family: VersionFamily.LETSGO,
   },
   RUBY: {
      version_name: `Ruby`,
      artwork_url: 'https://cdn.bulbagarden.net/upload/5/5f/Ruby_EN_boxart.png',
      version_family: VersionFamily.RUBYSAPPHIRE,
   },
   SAPPHIRE: {
      version_name: `Sapphire`,
      artwork_url: 'https://cdn.bulbagarden.net/upload/6/62/Sapphire_EN_boxart.png',
      version_family: VersionFamily.RUBYSAPPHIRE,
   },
   EMERALD: {
      version_name: `Emerald`,
      artwork_url:
         'https://cdn.bulbagarden.net/upload/archive/6/65/20100729165716%21Emerald_EN_boxart.jpg',
      version_family: VersionFamily.EMERALD,
   },

});

export const getVersion = version => {
   return {
      label: GameVersion[version].version_name,
      artwork_url: GameVersion[version].artwork_url,
      family: GameVersion[version].version_family,
   };
},

export const VersionFamily = Object.freeze({
   LETSGO: 'letsgo',
   RUBYSAPPHIRE: 'rubysapphire',
   EMERALD: 'emerald',
});
