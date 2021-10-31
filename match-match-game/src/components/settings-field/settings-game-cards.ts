import { game } from '../../store/game';

export class SettingsGameCards {
  element: HTMLSelectElement;

  constructor() {
    this.element = document.createElement('select');
    this.element.classList.add('settings__difficulty');

    [
      { title: 'Cosmetic Ingredients', value: 'cosmetic-ingredients' },
      { title: 'Flags', value: 'flags' },
      { title: 'Pets', value: 'pets' },
      { title: 'Soccer', value: 'soccer' },
      { title: 'Tropic', value: 'tropic' },
    ].forEach((item) => {
      const option = document.createElement('option');
      option.textContent = item.title;
      option.value = item.value;
      this.element.appendChild(option);
    });

    game.cartCategory = 'cosmetic-ingredients';

    this.element.addEventListener('change', () => {
      game.cartCategory = this.element.value;
    });
  }
}
