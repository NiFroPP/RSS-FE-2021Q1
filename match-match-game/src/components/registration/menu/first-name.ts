import { user } from '../../../store/registration-store';
import { validateFirstName } from '../../shared/validations/validate-first-name';

export class RegistrationFirstName {
  element: HTMLInputElement;

  constructor() {
    this.element = document.createElement('input');
    this.element.classList.add('registration__first-name');

    this.element.addEventListener('change', () => {
      if (validateFirstName(this.element.value)) {
        this.element.classList.add('valid');
        user.setFirstName(this.element.value);

        user.firstNameValid = true;
      } else {
        this.element.classList.remove('valid');

        user.firstNameValid = false;
      }
    });
  }
}
