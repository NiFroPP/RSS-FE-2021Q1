import { pagesStore } from '../../../store/page-store';
import { game } from '../../../store/game';
import { user } from '../../../store/registration-store';
import { clearNoActiveFields } from '../../shared/clear-no-active-fields';
import { addClassActiveField } from '../../shared/add-class-active-field';

import { CreateBaseElement } from '../../shared/create-base-element';

export class RegistrationAddUser extends CreateBaseElement {
  constructor() {
    super('div', ['registration__add-user']);

    this.element.innerHTML = 'Add User';

    this.element.addEventListener('click', () => {
      if (user.firstNameValid && user.lastNameValid && user.emailNameValid) {
        game.validateUser = true;

        clearNoActiveFields();
        addClassActiveField('game--active');

        pagesStore.setActive('start-game');
      }
    });
  }
}
