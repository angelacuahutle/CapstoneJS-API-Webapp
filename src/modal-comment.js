import {
  DataAPI
} from "./Involvement_API";

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
  const formContainer = document.createElement('div');
  //const addComment = document.querySelector('commentBtn');
  const firstdivContainer = document.createElement('div');
  const seconddivContainer = document.createElement('div');
  const labelName = document.createElement('label');
  const labelComment = document.createElement('label');
  const firstInputContainer = document.createElement('div');
  const secondInputContainer = document.createElement('div');
  const inputName = document.createElement('input');
  const inputComment = document.createElement('input');
  const commentBtn = document.createElement('button');
  /*const imputForm = document.getElementsById('YourName');
  const imputComment = document.getElementById('inputComment');*/

  labelName.classList.add('col-sm-2', 'col-form-label');
  labelComment.classList.add('col-sm-2', 'col-form-label');
  firstdivContainer.classList.add('form-group', 'row');
  seconddivContainer.classList.add('form-group', 'row');
  firstInputContainer.classList.add('col-sm-10');
  secondInputContainer.classList.add('col-sm-10');
  inputName.classList.add('form-name-plaintext');
  inputComment.classList.add('form-comment-control');
  inputName.setAttribute('type', 'text');
  inputComment.setAttribute('type', 'text');
  commentBtn.classList.add('btn', 'btn-primary', 'commentBtn');

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
  labelName.innerText = 'Your Name:';
  labelComment.innerText = 'Comment:';
  inputName.setAttribute('placeholder', 'Your Name');
  inputName.id = 'YourName';
  inputComment.setAttribute('placeholder', 'Comment');
  inputComment.id = 'YourComment';
  commentBtn.innerText = 'Add Comment';
  commentBtn.setAttribute('type', 'submit');
  commentBtn.id = `commentBtn_${pokemonObject.id}`;

  firstInputContainer.appendChild(inputName);
  firstdivContainer.appendChild(labelName);
  firstdivContainer.appendChild(firstInputContainer);
  secondInputContainer.appendChild(inputComment);
  seconddivContainer.appendChild(labelComment);
  seconddivContainer.appendChild(secondInputContainer);
  formContainer.appendChild(firstdivContainer);
  formContainer.appendChild(seconddivContainer);
  formContainer.appendChild(commentBtn);

  closeCol.appendChild(closeIcon);
  bodyModal.appendChild(imageContainer);
  bodyModal.appendChild(titleContainer);
  bodyModal.appendChild(divHpLabel);
  bodyModal.appendChild(divHpValue);
  bodyModal.appendChild(divRarityLabel);
  bodyModal.appendChild(divRarityValue);
  bodyModal.appendChild(textContainer);
  bodyModal.appendChild(formContainer);

  /*formContainer.appendChild(imputForm);
  formContainer.appendChild();*/
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

  /*window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });*/
  /*
  const testinputele = document.querySelector('#YourName');
  testinputele.addEventListener('keyup', (event) => {
    console.log(event.target.value);
  });*/

  const btnpostComment = document.querySelector(`#commentBtn_${pokemonObject.id}`);
  console.log(btnpostComment);
  btnpostComment.addEventListener('click', () => {
    console.log('clicked');
    const inputNamevalue = inputName.value;
    const inputCommentvalue = inputComment.value;
    const bodyObj = {
      item_id: pokemonObject.id,
      username: inputNamevalue,
      comment: inputCommentvalue
    };
    console.log(bodyObj);

    DataAPI.microverseInvolvement.postComment(bodyObj).then((response) => {
      console.log(response);
    });
  });
};
//const displayComments = document.createElement('input');
//  console.log(commentObj);
//  const inputNamevalue = inputName.value;
//  const inputCommentvalue = inputComment.value;
//  const bodyObj = {
//    item_id: pokemonObject.id,
//    username: inputNamevalue,
//    comment: inputCommentvalue
//  };
//};
//return this.microverseInvolvement.basicCall2Api('POST', 'comments', commentObj);

export const getComments = async (id) => {
  const response = await fetch(${commentsEndpoint}?item_id=${id});
  const comments = await response.json();
  return comments;
};

export const commentsEndpoint = ${URL}/${PIKey}/comments;


const defyJSLinter = () => {
  console.log('Created in order to not only import one thing but also to not have a linter error.');
};

export {
  createModalPopUp,
  defyJSLinter
};