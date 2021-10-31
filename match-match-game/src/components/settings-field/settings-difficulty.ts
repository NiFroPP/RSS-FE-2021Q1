import { game } from '../../store/game';

export class SettingsDifficulty {
  element: HTMLSelectElement;

  constructor() {
    this.element = document.createElement('select');
    this.element.classList.add('settings__difficulty');

    [
      { title: '10 cards', value: '10 cards' },
      { title: '20 cards', value: '20 cards' },
      { title: '30 cards', value: '30 cards' },
      { title: '40 cards', value: '40 cards' },
      { title: '50 cards', value: '50 cards' },
      { title: '60 cards', value: '60 cards' },
    ].forEach((item) => {
      const option = document.createElement('option');
      option.textContent = item.title;
      option.value = item.value;
      this.element.appendChild(option);
    });

    game.difficulty = '10 cards';

    this.element.addEventListener('change', () => {
      game.difficulty = this.element.value;
    });
  }
}
