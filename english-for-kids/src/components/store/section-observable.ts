import { PubSub } from './publish-subscribe';

class OpenSection {
  active: string;

  events: PubSub;

  constructor() {
    this.active = '';
    this.events = new PubSub();
  }

  setActive(active: string): void {
    this.active = active;
    this.events.publish();
  }
}

export const openSection = new OpenSection();
