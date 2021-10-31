import { PubSub } from './publish-subscribe';

class OpenMenu {
  active: string;

  events: PubSub;

  constructor() {
    this.active = '';
    this.events = new PubSub();
  }

  setActive(active: string) {
    this.active = active;
    this.events.publish();
  }
}

export const openMenu = new OpenMenu();
