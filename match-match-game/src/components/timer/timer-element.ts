import './timer.scss';
import { CreateBaseElement } from '../shared/create-base-element';

export class TimerElement extends CreateBaseElement {
  constructor() {
    super('div', ['timer']);
  }

  clearTimer(): void {
    this.element.innerHTML = '';
  }

  showTimer(time: number): void {
    const mins = Math.floor(time / 10 / 60);
    const secs = Math.floor((time / 10) % 60);

    let minsSting = '';
    let secString = '';

    if (mins < 10) {
      minsSting = `0${mins}`;
    } else {
      minsSting = `${mins}`;
    }
    if (secs < 10) {
      secString = `0${secs}`;
    } else {
      secString = `${secs}`;
    }
    this.element.innerHTML = `Time: ${minsSting}:${secString}`;
  }
}
