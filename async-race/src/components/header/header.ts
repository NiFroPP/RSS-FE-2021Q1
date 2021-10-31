import './header.scss';
import CreateBaseElement from '../shared/create-base-element';
import { headerGarage } from './garage-button/garage';
import { headerWinners } from './winners-button/winners';

class Header extends CreateBaseElement {
  constructor() {
    super('header', ['header']);

    this.element.innerHTML = `
      <div class="container header-container">
        <h1 class="header__title">Async-race</h1>
        <nav class="menu">
        </nav>
      </div>
    `;

    this.element.querySelector('.menu')?.append(headerGarage.element);
    this.element.querySelector('.menu')?.append(headerWinners.element);
  }
}

export const header = new Header();
