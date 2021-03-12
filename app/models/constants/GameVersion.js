export default version => {
   const artwork_urls = {
      letsgopikachu:
         'https://cdn.bulbagarden.net/upload/a/ae/Lets_Go_Pikachu_EN_boxart.png',
      letsgoeevee: 'https://cdn.bulbagarden.net/upload/1/1e/Lets_Go_Eevee_EN_boxart.png',
      ruby: 'https://cdn.bulbagarden.net/upload/5/5f/Ruby_EN_boxart.png',
      sapphire: 'https://cdn.bulbagarden.net/upload/6/62/Sapphire_EN_boxart.png',
      emerald:
         'https://cdn.bulbagarden.net/upload/archive/6/65/20100729165716%21Emerald_EN_boxart.jpg',
   };
   return {
      version_name: version,
      artwork_url: artwork_urls[version],
   };
};
