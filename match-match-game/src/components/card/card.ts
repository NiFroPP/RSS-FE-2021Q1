import { CreateBaseElement } from '../shared/create-base-element';
import { Card as CardInstance } from '../../store/card';
import './card.scss';

const turnoverClass = 'turnover';

export class CardElement extends CreateBaseElement {
  private readonly card: CardInstance;

  constructor(card: CardInstance) {
    super('div', ['card-container']);

    this.card = card;
    this.card.events.subscribe(() => {
      this.flip(this.card.isTurnover);
    });

    this.element.innerHTML = `
      <div class="card">
        <div class="card__front" style="background-image: url('./images/${this.card.url}')"></div>
        <div class="card__back"></div>
      </div>
    `;
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(turnoverClass, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}
