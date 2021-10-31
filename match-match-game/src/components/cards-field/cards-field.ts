import './cards-field.scss';
import { CreateBaseElement } from '../shared/create-base-element';
import { CardElement } from '../card/card';

export class CardsField extends CreateBaseElement {
  private cards: CardElement[] = [];

  constructor() {
    super('div', ['cards-field']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: CardElement[]): void {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
  }
}
