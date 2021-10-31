import { CreateBaseElement } from '../../shared/create-base-element';
import { RegistrationFirstName } from './first-name';
import { RegistrationLastName } from './last-name';
import { RegistrationEmailName } from './email-name';
import { RegistrationAvatar } from './avatar';
import { createRegistrationMenuItem } from '../../shared/create-registration-menu-item';

export class RegistrationMenu extends CreateBaseElement {
  private registrationFirstName?: RegistrationFirstName;

  private registrationLastName?: RegistrationLastName;

  private registrationEmailName?: RegistrationEmailName;

  private registrationAvatar?: RegistrationAvatar;

  constructor() {
    super('div', ['registration__player']);

    const registrationFirstName = new RegistrationFirstName();
    const registrationLastName = new RegistrationLastName();
    const registrationEmailName = new RegistrationEmailName();
    const registrationAvatar = new RegistrationAvatar();

    const playerNameField = document.createElement('div');
    playerNameField.classList.add('registration__player-name');

    this.element.appendChild(playerNameField);
    this.element.appendChild(registrationAvatar.element);

    createRegistrationMenuItem('First Name:', playerNameField);
    playerNameField.appendChild(registrationFirstName.element);

    createRegistrationMenuItem('Last Name:', playerNameField);
    playerNameField.appendChild(registrationLastName.element);

    createRegistrationMenuItem('Email:', playerNameField);
    playerNameField.appendChild(registrationEmailName.element);
  }
}
