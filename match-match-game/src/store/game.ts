import categoriesAndImages from './images.json';
import { PubSub } from './pubsub';
import { pagesStore } from './page-store';
import { Card } from './card';

type CategoriesAndImages = {
  category: string;
  images: string[];
};

// const SHOW_TIME = 10000;
const BASIC_START_QUANTITY_IMAGES = 5;

class Game {
  categoriesAndImages: Array<CategoriesAndImages>;

  readonly events: PubSub;

  cards: Card[];

  isFinished: boolean;

  difficulty: string;

  delayStart: string;

  cartCategory: string;

  validateUser: boolean;

  constructor() {
    this.categoriesAndImages = categoriesAndImages;
    this.events = new PubSub();
    this.cards = [];
    this.difficulty = '10 cards';
    this.cartCategory = 'cosmetic-ingredients';
    this.delayStart = '1 sec';
    this.isFinished = true;
    this.validateUser = false;

    pagesStore.events.subscribe(() => {
      if (pagesStore.active === 'start-game') {
        if (this.validateUser) {
          this.startNewGame();
        }
      }
    });
  }

  choiceCategory() {
    switch (this.cartCategory) {
      case 'cosmetic-ingredients': {
        return 0;
      }
      case 'flags': {
        return 1;
      }
      case 'pets': {
        return 2;
      }
      case 'soccer': {
        return 3;
      }
      case 'tropic': {
        return 4;
      }
      default:
        return 0;
    }
  }

  choiceDelayStart() {
    switch (this.delayStart) {
      case '1 sec': {
        return 1000;
      }
      case '3 sec': {
        return 3000;
      }
      case '5 sec': {
        return 5000;
      }
      case '10 sec': {
        return 10000;
      }
      case '20 sec': {
        return 20000;
      }
      case '30 sec': {
        return 30000;
      }
      default:
        return 0;
    }
  }

  sliceImages(images: string[]): string[] {
    images.sort(() => Math.random() - 0.5);

    switch (this.difficulty) {
      case '10 cards': {
        return images.slice(0, BASIC_START_QUANTITY_IMAGES);
      }
      case '20 cards': {
        return images.slice(0, BASIC_START_QUANTITY_IMAGES * 2);
      }
      case '30 cards': {
        return images.slice(0, BASIC_START_QUANTITY_IMAGES * 3);
      }
      case '40 cards': {
        return images.slice(0, BASIC_START_QUANTITY_IMAGES * 4);
      }
      case '50 cards': {
        return images.slice(0, BASIC_START_QUANTITY_IMAGES * 5);
      }
      case '60 cards': {
        return images.slice(0, BASIC_START_QUANTITY_IMAGES * 6);
      }
      default:
        return images;
    }
  }

  startNewGame() {
    const choiceCat = this.choiceCategory();

    const category: CategoriesAndImages = this.categoriesAndImages[choiceCat];
    const images = this.sliceImages(category.images).map(
      (name) => `${category.category}/${name}`
    );

    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    setTimeout(() => {
      cards.forEach((card) => {
        card.turnoverToBack();
      });
    }, this.choiceDelayStart());

    this.isFinished = false;
    this.cards = cards;
    this.events.publish();
  }
}

export const game = new Game();
