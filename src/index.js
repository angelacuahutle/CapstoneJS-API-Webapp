import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './css/bootstrap.min.css';
import './css/style.css';

import { PokemonAPI } from './PokeTCG_API';

const PokeCards = document.getElementById('pokeCards');

PokemonAPI.TCGpokemon.getTwelveCardsSwSh().then((data) => {
  console.log(data);
  data.data.forEach( pokemon => {
    const cardContainer = document.createElement('div');
    const card = document.createElement('div');
    const imgContainer = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const likeIconContainer = document.createElement('a');
    const likeIcon = document.createElement('i');
    const likeCount = document.createElement('span');
    const cardText = document.createElement('p');
    const commentButton = document.createElement('a');
    cardContainer.classList.add('col-12', 'col-sm-6', 'col-md-3','pt-4');
    card.classList.add('card', 'border', 'border-2', 'border-black', 'card-style');
    imgContainer.classList.add('card-img-top');
    imgContainer.alt = `Pokemon Card image of ${pokemon.name}`;
    imgContainer.src = pokemon.images.small; 
    cardBody.classList.add('card-body', 'row', 'justify-content-center', 'align-items-center');
    cardTitle.classList.add('card-title', 'pb-2', 'col-6', 'd-flex', 'justify-content-center', 'align-items-center');
    cardTitle.innerText = pokemon.name;
    likeIconContainer.classList.add('col-4', 'pb-2', 'd-flex', 'justify-content-center', 'align-items-center', 'iconLike');
    likeIcon.classList.add('fas', 'fa-heart', 'fa-2x', 'col-4', 'd-flex', 'justify-content-center', 'align-items-center');
    likeCount.classList.add('col-2', 'd-flex', 'justify-content-center', 'align-items-center');
    likeCount.innerText = 0;
    cardText.classList.add('card-text', 'd-flex', 'justify-content-evenly', 'align-items-center');
    cardText.innerText = pokemon.flavorText || 'No Description';
    commentButton.classList.add('btn', 'btn-primary', 'col-6');
    commentButton.innerText = 'Comments';

    likeIconContainer.appendChild(likeIcon);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(likeIconContainer);
    cardBody.appendChild(likeCount);
    cardBody.appendChild(cardText);
    cardBody.appendChild(commentButton);
    card.appendChild(imgContainer);
    card.appendChild(cardBody);
    cardContainer.appendChild(card);
    PokeCards.appendChild(cardContainer);
  });


});