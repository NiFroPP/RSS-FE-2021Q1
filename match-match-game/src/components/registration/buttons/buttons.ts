import { CreateBaseElement } from '../../shared/create-base-element';
import { RegistrationAddUser } from './add-user';
import { RegistrationCancel } from './cancel';

export class RegistrationButtons extends CreateBaseElement {
  constructor() {
    super('div', ['registration__buttons']);

    const addUser = new RegistrationAddUser();
    const cancel = new RegistrationCancel();

    this.element.appendChild(addUser.element);
    this.element.appendChild(cancel.element);
  }
}
