import { HeaderMenu } from './menu/menu';
import { HeaderGame } from './game/game';
import { HeaderPlayer } from './registration/registration';
import { CreateBaseElement } from '../shared/create-base-element';

export class HeaderContainer extends CreateBaseElement {
  private readonly headerGame: HeaderGame;

  private readonly headerMenu: HeaderMenu;

  private readonly headerPlayer: HeaderPlayer;

  constructor() {
    super('header', ['header']);

    this.headerGame = new HeaderGame();
    this.headerMenu = new HeaderMenu();
    this.headerPlayer = new HeaderPlayer();

    const headerHeading = document.createElement('h1');
    headerHeading.classList.add('header__heading');
    headerHeading.innerHTML = 'Match-Match-Game';

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');

    const headerLogo = document.createElement('div');
    headerLogo.classList.add('header__logo');
    headerLogo.innerHTML = 'Match-Match-Game';

    const headerPlayer = document.createElement('div');
    headerPlayer.classList.add('header__player');

    this.element.appendChild(headerHeading);
    this.element.appendChild(headerContainer);

    headerContainer.appendChild(headerLogo);
    headerContainer.appendChild(this.headerMenu.element);
    headerContainer.appendChild(this.headerGame.element);
    headerContainer.appendChild(this.headerPlayer.element);
  }
}
