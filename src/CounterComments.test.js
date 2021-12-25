import { displayCountComments} from './modal-comment';

describe('CountCommets', () => {
  test('Counting Elements added to the DOM', () => {
    const basicBody = document.createElement('div');
    const pokeComment1 = document.createElement('div');
    const pokeComment2 = document.createElement('div');
    pokeComment1.classList.add('commentsRow');
    pokeComment2.classList.add('commentsRow');
    basicBody.appendChild(pokeComment1);
    basicBody.appendChild(pokeComment2);
    document.body.appendChild(basicBody);
    const numberOfCards = displayCountComments();
    expect(numberOfCards).toBe(2);
  });
});