import './trainingMode.scss';
// eslint-disable-next-line import/no-cycle
import { DataCards } from '../sections';

export default function trainingMode(
  data: DataCards[],
  sectionName: string
): HTMLElement {
  const mainElement = document.createElement('div');
  mainElement.classList.add('cards');
  mainElement.setAttribute('id', 'cards');

  data.forEach((section) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card__front');

    const cardFrontImage = document.createElement('div');
    cardFrontImage.classList.add('card__front-image');

    const cardFrontTitle = document.createElement('span');
    cardFrontTitle.classList.add('card__front-title');
    cardFrontTitle.innerHTML = section.name;

    const cardFrontButton = document.createElement('button');
    cardFrontButton.classList.add('card__front-RU');
    cardFrontButton.setAttribute('type', 'button');
    cardFrontButton.innerHTML = 'ru';

    const cardBack = document.createElement('div');
    cardBack.classList.add('card__back');

    const cardBackTitle = document.createElement('div');
    cardBackTitle.classList.add('card__back-title');
    cardBackTitle.innerHTML = section.nameRU;

    const cardBackImage = document.createElement('div');
    cardBackImage.classList.add('card__back-image');

    const audio = document.createElement('audio');
    audio.setAttribute('src', `./audio/${sectionName}/${section.sound}`);

    cardFrontImage.style.backgroundImage = `url(./images/${sectionName}/${section.image})`;
    cardBackImage.style.backgroundImage = `url(./images/${sectionName}/${section.image})`;

    mainElement.append(card);
    card.prepend(cardFront, cardBack);
    cardFront.prepend(cardFrontImage, cardFrontButton, cardFrontTitle, audio);
    cardBack.prepend(cardBackImage, cardBackTitle);

    cardFront.addEventListener('click', () => {
      audio.play();
    });

    cardFrontButton.addEventListener('click', () => {
      card.classList.add('turn');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('turn');
    });
  });

  return mainElement;
}
