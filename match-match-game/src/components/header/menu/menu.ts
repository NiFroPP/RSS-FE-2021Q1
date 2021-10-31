import { CreateBaseElement } from '../../shared/create-base-element';
import { HeaderAboutGame } from './about-game';
import { HeaderBestScore } from './best-score';
import { HeaderSettings } from './settings';

export class HeaderMenu extends CreateBaseElement {
  private readonly headerAboutGame: HeaderAboutGame;

  private readonly headerBestScore: HeaderBestScore;

  private readonly headerSettings: HeaderSettings;

  constructor() {
    super('ul', ['header__menu']);

    this.headerAboutGame = new HeaderAboutGame();
    this.headerBestScore = new HeaderBestScore();
    this.headerSettings = new HeaderSettings();

    this.element.appendChild(this.headerAboutGame.element);
    this.element.appendChild(this.headerBestScore.element);
    this.element.appendChild(this.headerSettings.element);
  }
}
