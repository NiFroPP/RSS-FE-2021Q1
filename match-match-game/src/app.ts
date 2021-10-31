import { AboutGame } from './components/about-game/about-game';
import { SettingsField } from './components/settings-field/settings';
import { BestPlayers } from './components/best-players/best-players';
import { Game } from './components/game/game';
import { Registrationt } from './components/registration/registration';

import { pagesStore } from './store/page-store';
import { addClassActiveField } from './components/shared/add-class-active-field';

export class App {
  private readonly aboutGame: AboutGame;

  private readonly bestPlayers: BestPlayers;

  private readonly settings: SettingsField;

  private readonly game: Game;

  private readonly registrationt: Registrationt;

  constructor(private readonly rootElement: HTMLElement) {
    const main = document.createElement('main');
    main.className = 'main';

    this.rootElement.appendChild(main);

    this.aboutGame = new AboutGame();
    this.bestPlayers = new BestPlayers();
    this.settings = new SettingsField();
    this.game = new Game();
    this.registrationt = new Registrationt();

    main.appendChild(this.aboutGame.element);
    main.appendChild(this.bestPlayers.element);
    main.appendChild(this.settings.element);
    main.appendChild(this.game.element);
    main.appendChild(this.registrationt.element);

    addClassActiveField('about-game--active');
    pagesStore.setActive('about');
  }
}
