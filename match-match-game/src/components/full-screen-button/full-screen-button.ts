import './full-screen-button.scss';
import { CreateBaseElement } from '../shared/create-base-element';

export class FullScreenBtn extends CreateBaseElement {
  constructor(private readonly fullScreenBtn: HTMLElement) {
    super('button', ['fullscreen']);

    this.fullScreenBtn.appendChild(this.element);
  }

  ifFullScreen(): void {
    this.element.addEventListener('click', () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
      document.documentElement.requestFullscreen();
    });
  }
}
