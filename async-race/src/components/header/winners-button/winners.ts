import CreateBaseElement from '../../shared/create-base-element';
import { pagesStore } from '../../../store/page-store';

class HeaderWinners extends CreateBaseElement {
  constructor() {
    super('div', ['menu__winners']);

    this.element.innerHTML = 'Winners';
    this.element.setAttribute('id', 'menu-winners');

    this.element.addEventListener('click', () => {
      pagesStore.setActive('winners');
    });
  }
}

export const headerWinners = new HeaderWinners();
