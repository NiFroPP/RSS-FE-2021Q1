import './registration.scss';
import { CreateBaseElement } from '../shared/create-base-element';
import { RegistrationMenu } from './menu/menu';
import { RegistrationButtons } from './buttons/buttons';
import { pagesStore } from '../../store/page-store';

export class Registrationt extends CreateBaseElement {
  private registrationMenu?: RegistrationMenu;

  private registrationButtons?: RegistrationButtons;

  constructor() {
    super('div', ['main__registration']);

    pagesStore.events.subscribe(() => {
      if (pagesStore.active === 'registration') {
        this.createRegistration();
      } else {
        this.cleanRegistration();
      }
    });
  }

  createRegistration(): void {
    this.cleanRegistration();

    this.registrationMenu = new RegistrationMenu();
    this.registrationButtons = new RegistrationButtons();

    const registrationHeading = document.createElement('h2');
    registrationHeading.classList.add('registration__title');
    registrationHeading.innerHTML = 'Registration new Player:';

    this.element.appendChild(registrationHeading);
    this.element.appendChild(this.registrationMenu.element);
    this.element.appendChild(this.registrationButtons.element);
  }

  cleanRegistration(): void {
    this.element.innerHTML = '';
  }
}
