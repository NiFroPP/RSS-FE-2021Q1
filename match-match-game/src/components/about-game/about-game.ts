import './about-game.scss';
import { CreateBaseElement } from '../shared/create-base-element';
import { pagesStore } from '../../store/page-store';

export class AboutGame extends CreateBaseElement {
  constructor() {
    super('div', ['main__about-game']);

    pagesStore.events.subscribe(() => {
      if (pagesStore.active === 'about') {
        this.createAboutGame();
      } else {
        this.cleanAboutGame();
      }
    });
  }

  createAboutGame(): void {
    this.cleanAboutGame();

    this.element.innerHTML = `
      <h2 class="about-game__title">How to play?</h2>
      <div class="about-game__content">
        <div class="about-game__rigistration">
          1. Register new player in game
        </div>
        <div class="about-game__sittings">
          2. Configure your game settings
        </div>
        <div class="about-game__start-game">
          3. Start you new game! Remember card positions and match it before
          times up
        </div>
        <div class="about-game__total-scores">
          4. The points earned are counted as the difference between
          successful pairs, incorrect pairs and time spent.
        </div>
      </div>
    `;
  }

  cleanAboutGame(): void {
    this.element.innerHTML = '';
  }
}
