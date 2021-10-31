import { CreateBaseElement } from '../../shared/create-base-element';

export class RegistrationAvatar extends CreateBaseElement {
  constructor() {
    super('div', ['registration__player-avatar']);

    this.element.innerHTML = 'Avatar';
  }
}
