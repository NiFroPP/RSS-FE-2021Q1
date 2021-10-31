import { CreateBaseElement } from '../../shared/create-base-element';
import { clearNoActiveFields } from '../../shared/clear-no-active-fields';
import { addClassActiveField } from '../../shared/add-class-active-field';
import { pagesStore } from '../../../store/page-store';

export class HeaderBestScore extends CreateBaseElement {
  constructor() {
    super('li', ['header__best-score']);

    this.element.innerHTML = 'Best Score';

    this.element.addEventListener('click', () => {
      clearNoActiveFields();
      addClassActiveField('best-score--active');

      pagesStore.setActive('best-score');
    });
  }
}
