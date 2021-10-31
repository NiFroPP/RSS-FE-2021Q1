type Handler = () => void;

export class PubSub {
  private readonly handlers: Array<Handler>;

  constructor() {
    this.handlers = [];
  }

  subscribe(handler: Handler): void {
    this.handlers.push(handler);
  }

  publish(): void {
    this.handlers.forEach((handler) => {
      handler();
    });
  }
}
