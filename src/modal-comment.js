const modalContainer = document.getElementById('modal-popup-container');
const createModalPopUp = (pokemonObject) => {
    const modal = document.createElement('div');
    const closeCol = document.createElement('div');
    const closeIcon = document.createElement('i');
    const bodyModal = document.createElement('div');
    const imageContainer = document.createElement('img');
    const titleContainer = document.createElement('h5');
    const textContainer = document.createElement('p');
    modal.classList.add('row');
    closeCol.classList.add('col-12', 'd-flex', 'justify-content-end', 'align-items-center', 'close-popup');
    closeIcon.classList.add('far', 'fa-times-circle', 'fa-3x');
    bodyModal.classList.add('row', 'justify-content-center', 'align-items-center');
    imageContainer.classList.add('col-12');
    titleContainer.classList.add('col-12');
    textContainer.classList.add('col-12');
    imageContainer.src = pokemonObject.images.small;
    titleContainer.innerText = pokemonObject.name;
    textContainer.innerText = pokemonObject.flavorText || 'No Description';
    closeCol.appendChild(closeIcon);
    bodyModal.appendChild(imageContainer);
    bodyModal.appendChild(titleContainer);
    bodyModal.appendChild(textContainer);
    modal.appendChild(closeCol);
    modal.appendChild(bodyModal);
    modalContainer.appendChild(modal);
    // When the user clicks on <span> (x), close the modal
    const closeModal = document.querySelector('.close-popup');
    closeModal.addEventListener('click', () => {
        modalContainer.classList.add = 'hidden';
    });
    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}
export { createModalPopUp };