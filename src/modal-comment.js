const modalContainer = document.getElementById('modal-popup-container');
const headerContainer = document.getElementById('navContainer');
const mainContainer = document.getElementById('mainContainer');
const footeContainer = document.getElementById('footerContainer');

const createModalPopUp = (pokemonObject) => {
  console.log(pokemonObject);
  const modal = document.createElement('div');
  const closeCol = document.createElement('div');
  const closeIcon = document.createElement('i');
  const bodyModal = document.createElement('div');
  const imageContainer = document.createElement('img');
  const titleContainer = document.createElement('h5');
  const textContainer = document.createElement('p');
  const divHpLabel = document.createElement('div');
  const divHpValue = document.createElement('div');
  const divRarityLabel = document.createElement('div');
  const divRarityValue = document.createElement('div');
  const formContainer = document.createElement('form');
  const addComment = document.querySelector('commentBtn');
  const firstdivContainer = document.createElement('div');
  const imputForm = document.getElementsById('YourName');
  const imputComment = document.getElementById('inputComment');
  const labelName = document.createElement('label');
  labelName.classList.add('col-sm', 'col-form-label');
  firstdivContainer.classList.add('form-group, row');
  modal.classList.add('row', 'square-container');
  closeCol.classList.add('col-12', 'd-flex', 'justify-content-end', 'align-items-center', 'close-popup');
  closeIcon.classList.add('far', 'fa-times-circle', 'fa-3x');
  bodyModal.classList.add('row', 'justify-content-center', 'align-items-center');
  imageContainer.classList.add('col-12');
  titleContainer.classList.add('col-12', 'd-flex', 'justify-content-center', 'align-items-center');
  textContainer.classList.add('col-12', 'd-flex', 'justify-content-center', 'align-items-center');
  divHpLabel.classList.add('col-3', 'd-flex', 'justify-content-center', 'align-items-center');
  divHpValue.classList.add('col-3', 'd-flex', 'justify-content-center', 'align-items-center');
  divRarityLabel.classList.add('col-3', 'd-flex', 'justify-content-center', 'align-items-center');
  divRarityValue.classList.add('col-3', 'd-flex', 'justify-content-center', 'align-items-center');
  imageContainer.classList.add('card-img-popup');
  imageContainer.src = pokemonObject.images.small;
  titleContainer.innerText = pokemonObject.name;
  textContainer.innerText = pokemonObject.flavorText || 'No Description';
  divHpLabel.innerText = 'HP:';
  divHpValue.innerText = pokemonObject.hp;
  divRarityLabel.innerText = 'Rarity:';
  divRarityValue.innerText = pokemonObject.rarity;
  closeCol.appendChild(closeIcon);
  bodyModal.appendChild(imageContainer);
  bodyModal.appendChild(titleContainer);
  bodyModal.appendChild(divHpLabel);
  bodyModal.appendChild(divHpValue);
  bodyModal.appendChild(divRarityLabel);
  bodyModal.appendChild(divRarityValue);
  bodyModal.appendChild(textContainer);
  formContainer.appendChild(imputForm);
  formContainer.appendChild();
  modal.appendChild(closeCol);
  modal.appendChild(bodyModal);
  modalContainer.appendChild(modal);

  const closeModal = document.querySelector('.close-popup');
  closeModal.addEventListener('click', () => {
    console.log('clicked');
    modalContainer.classList.add('hidden');
    document.querySelector('.modal-popup').removeChild(document.querySelector('.square-container'));
    headerContainer.classList.remove('hidden');
    mainContainer.classList.remove('hidden');
    footeContainer.classList.remove('hidden');
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  const postComment = document.querySelector('commentBtn');
  postComment.addEventListener('click', (e) => {
      const imputForm = document.getElementsById('YourName');
      const imputComment = document.getElementById('inputComment');
      const bodyObj = {
        item_id: cardId,
        addComment
      };
      record
    };

  });
};

const defyJSLinter = () => {
  console.log('Created in order to not only import one thing but also to not have a linter error.');
};

export {
  createModalPopUp,
  defyJSLinter
};