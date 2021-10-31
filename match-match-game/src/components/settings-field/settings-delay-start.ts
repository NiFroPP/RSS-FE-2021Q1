import { game } from '../../store/game';

export class SettingsDelayStart {
  element: HTMLSelectElement;

  constructor() {
    this.element = document.createElement('select');
    this.element.classList.add('settings__delay-start');

    [
      { title: '1 sec', value: '1 sec' },
      { title: '3 sec', value: '3 sec' },
      { title: '5 sec', value: '5 sec' },
      { title: '10 sec', value: '10 sec' },
      { title: '20 sec', value: '20 sec' },
      { title: '30 sec', value: '30 sec' },
    ].forEach((item) => {
      const option = document.createElement('option');
      option.textContent = item.title;
      option.value = item.value;
      this.element.appendChild(option);
    });

    game.delayStart = '1 sec';

    this.element.addEventListener('change', () => {
      game.delayStart = this.element.value;
    });
  }
}
