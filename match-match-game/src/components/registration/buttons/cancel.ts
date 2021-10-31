import { CreateBaseElement } from '../../shared/create-base-element';
import { user } from '../../../store/registration-store';

export class RegistrationCancel extends CreateBaseElement {
  constructor() {
    super('div', ['registration__cancel']);

    this.element.innerHTML = 'Cancel';

    this.element.addEventListener('click', () => {
      user.cleanValidate();
    });
  }
}
