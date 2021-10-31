import { user } from '../../../store/registration-store';
import { validateLastName } from '../../shared/validations/validate-last-name';

export class RegistrationLastName {
  element: HTMLInputElement;

  constructor() {
    this.element = document.createElement('input');
    this.element.classList.add('registration__last-name');

    this.element.addEventListener('change', () => {
      if (validateLastName(this.element.value)) {
        this.element.classList.add('valid');

        user.setLastName(this.element.value);
        user.lastNameValid = true;
      } else {
        this.element.classList.remove('valid');

        user.lastNameValid = false;
      }
    });
  }
}
