import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './css/bootstrap.min.css';
import './css/style.css';

import { PokemonAPI } from './PokeTCG_API';
import { createPokeCard } from './homepage';

PokemonAPI.TCGpokemon.getTwelveCardsSwSh().then((data) => {
  console.log(data);
  data.data.forEach( pokemon => {
    createPokeCard(pokemon);
  });
});