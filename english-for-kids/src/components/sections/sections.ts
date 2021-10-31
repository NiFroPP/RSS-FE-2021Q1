import './sections.scss';
// eslint-disable-next-line import/no-cycle
import { sectionSelection } from '../store/section-selection';

export type DataCards = {
  name: string;
  nameRU: string;
  image: string;
  sound: string;
};

export type Data = {
  name: string;
  image: string;
  cards: DataCards[];
};

export default function Sections(data: Data[]): HTMLElement {
  const mainContent = document.createElement('div');
  mainContent.classList.add('cards');
  mainContent.setAttribute('id', 'cards');

  data.forEach((section) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitle = document.createElement('div');
    cardTitle.classList.add('card__title');
    cardTitle.innerHTML = section.name;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card__image');
    cardContent.style.backgroundImage = `url(./images/${section.name}/${section.image})`;

    card.addEventListener('click', () => {
      sectionSelection('Cards', section.cards, section.name);
    });

    mainContent.append(card);
    card.append(cardTitle, cardContent);
  });

  return mainContent;
}
