import { PubSub } from './pubsub';

class PagesStore {
  active: string;

  events: PubSub;

  constructor() {
    this.active = 'about';
    this.events = new PubSub();
  }

  setActive(active: string) {
    this.active = active;
    this.events.publish();
  }
}

export const pagesStore = new PagesStore();
