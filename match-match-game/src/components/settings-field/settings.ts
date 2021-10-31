import './settings.scss';
import { CreateBaseElement } from '../shared/create-base-element';
import { SettingsGameCards } from './settings-game-cards';
import { SettingsDifficulty } from './settings-difficulty';
import { SettingsDelayStart } from './settings-delay-start';
import { pagesStore } from '../../store/page-store';

export class SettingsField extends CreateBaseElement {
  constructor() {
    super('div', ['main__settings']);

    pagesStore.events.subscribe(() => {
      if (pagesStore.active === 'settings') {
        this.createSettingsMenu();
      } else {
        this.cleanSittings();
      }
    });
  }

  createSettingsMenu(): void {
    this.cleanSittings();

    this.createSettingsMenuItem('Game Cards');

    const settingsGameCards = new SettingsGameCards();
    this.element.appendChild(settingsGameCards.element);

    this.createSettingsMenuItem('Difficulty');

    const settingsDifficulty = new SettingsDifficulty();
    this.element.appendChild(settingsDifficulty.element);

    this.createSettingsMenuItem('Delay Start');

    const settingsDelayStart = new SettingsDelayStart();
    this.element.appendChild(settingsDelayStart.element);
  }

  createSettingsMenuItem(inner: string): void {
    const settingsLogo = document.createElement('h2');
    const settingsSeparator = document.createElement('hr');

    settingsLogo.classList.add('settings__logo');
    settingsLogo.innerHTML = `${inner}`;

    this.element.appendChild(settingsSeparator);
    this.element.appendChild(settingsLogo);
  }

  cleanSittings(): void {
    this.element.innerHTML = '';
  }
}
