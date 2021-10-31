import { CreateBaseElement } from '../../shared/create-base-element';
import { clearNoActiveFields } from '../../shared/clear-no-active-fields';
import { addClassActiveField } from '../../shared/add-class-active-field';
import { pagesStore } from '../../../store/page-store';

export class HeaderPlayer extends CreateBaseElement {
  constructor() {
    super('div', ['header__registration']);

    this.element.innerHTML = 'Registration';
    this.element.setAttribute('id', 'avatar');

    this.element.addEventListener('click', () => {
      clearNoActiveFields();
      addClassActiveField('registration--active');

      pagesStore.setActive('registration');
    });
  }
}
