import { HeaderContainer } from './container';
import './header.scss';

export class Header {
  private readonly headerContainer: HeaderContainer;

  constructor(private readonly body: HTMLElement) {
    this.headerContainer = new HeaderContainer();

    this.body.appendChild(this.headerContainer.element);
  }
}
