import { CreateBaseElement } from '../../shared/create-base-element';
import { clearNoActiveFields } from '../../shared/clear-no-active-fields';
import { addClassActiveField } from '../../shared/add-class-active-field';
import { pagesStore } from '../../../store/page-store';

export class HeaderSettings extends CreateBaseElement {
  constructor() {
    super('li', ['header__settings']);

    this.element.innerHTML = 'Settings';

    this.element.addEventListener('click', () => {
      clearNoActiveFields();
      addClassActiveField('settings--active');

      pagesStore.setActive('settings');
    });
  }
}
