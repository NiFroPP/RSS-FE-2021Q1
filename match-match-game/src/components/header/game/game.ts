import { CreateBaseElement } from '../../shared/create-base-element';
import { clearNoActiveFields } from '../../shared/clear-no-active-fields';
import { addClassActiveField } from '../../shared/add-class-active-field';
import { pagesStore } from '../../../store/page-store';

export class HeaderGame extends CreateBaseElement {
  constructor() {
    super('div', ['header__game']);

    this.element.innerHTML = 'Start';
    this.element.addEventListener('click', () => {
      clearNoActiveFields();
      addClassActiveField('game--active');

      const mainGame = document.querySelector('main');
      mainGame?.classList.add('game--active');

      pagesStore.setActive('start-game');
    });
  }
}
