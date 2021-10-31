import { CreateBaseElement } from '../../shared/create-base-element';
import { clearNoActiveFields } from '../../shared/clear-no-active-fields';
import { addClassActiveField } from '../../shared/add-class-active-field';
import { pagesStore } from '../../../store/page-store';

export class HeaderAboutGame extends CreateBaseElement {
  constructor() {
    super('li', ['header__about-game']);

    this.element.innerHTML = 'About Game';

    this.element.addEventListener('click', () => {
      clearNoActiveFields();
      addClassActiveField('about-game--active');

      pagesStore.setActive('about');
    });
  }
}
