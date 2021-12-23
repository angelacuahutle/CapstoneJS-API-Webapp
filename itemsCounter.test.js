import { countNumberOfCards } from './src/homepage';

const htmlTemplate = `
<section id="pokeCards" class="row align-items-center">
</section>`;

describe('CountItems', () => {
    test('Counting Elements added to the DOM', () => {
        const basicBody = document.createElement('div');
        const pokeCard1 = document.createElement('div');
        const pokeCard2 = document.createElement('div');
        pokeCard1.classList.add('card');
        pokeCard2.classList.add('card');
        basicBody.appendChild(pokeCard1);
        basicBody.appendChild(pokeCard2);
        document.body.appendChild(basicBody);
        const numberOfCards = countNumberOfCards();
        expect(numberOfCards).toBe(2);
    })
});