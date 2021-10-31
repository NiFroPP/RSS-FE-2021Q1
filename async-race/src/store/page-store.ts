import { PubSub } from './pub-sub';

class PagesStore {
  active: string;

  events: PubSub;

  constructor() {
    this.active = 'garage';
    this.events = new PubSub();
  }

  setActive(active: string) {
    this.active = active;
    this.events.publish();
  }
}

export const pagesStore = new PagesStore();
