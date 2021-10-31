import { user } from '../../../store/registration-store';
import { validateEmail } from '../../shared/validations/validate-email';

export class RegistrationEmailName {
  element: HTMLInputElement;

  constructor() {
    this.element = document.createElement('input');
    this.element.classList.add('registration__email-name');

    this.element.addEventListener('change', () => {
      if (validateEmail(this.element.value)) {
        this.element.classList.add('valid');

        user.setEmailName(this.element.value);
        user.emailNameValid = true;
      } else {
        this.element.classList.remove('valid');

        user.emailNameValid = false;
      }
    });
  }
}
