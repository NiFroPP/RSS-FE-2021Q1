import { PubSub } from './pubsub';

export class Card {
  isTurnover: boolean;

  readonly url: string;

  readonly events: PubSub;

  constructor(url: string) {
    this.url = url;
    this.isTurnover = false;
    this.events = new PubSub();
  }

  compare(card: Card): boolean {
    return this.url === card.url;
  }

  flip(): void {
    this.isTurnover = !this.isTurnover;
    this.events.publish();
  }

  turnoverToBack(): void {
    this.isTurnover = true;
    this.events.publish();
  }

  turnoverToFront(): void {
    this.isTurnover = false;
    this.events.publish();
  }
}
