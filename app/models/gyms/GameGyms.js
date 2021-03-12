import * as lets_go from './constants/lets-go.json';
import * as ruby_sapphire from './constants/ruby-sapphire.json';
import * as emerald from './constants/emerald.json';

export default version => {
   switch (version) {
      case 'letsgopikachu':
         return lets_go;
      case 'letsgoeevee':
         return lets_go;
      case 'ruby':
         return ruby_sapphire;
      case 'sapphire':
         return ruby_sapphire;
      case 'emerald':
         return emerald;
      default:
         return null;
   }
};
