import CreateBaseElement from '../../shared/create-base-element';
import { pagesStore } from '../../../store/page-store';

class HeaderGarage extends CreateBaseElement {
  constructor() {
    super('div', ['menu__garage']);

    this.element.innerHTML = 'Garage';
    this.element.setAttribute('id', 'menu-garage');

    this.element.addEventListener('click', () => {
      pagesStore.setActive('garage');
    });
  }
}

export const headerGarage = new HeaderGarage();
