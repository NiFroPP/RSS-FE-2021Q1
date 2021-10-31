import './footer.scss';
import { CreateBaseElement } from '../shared/create-base-element';

export class Footer extends CreateBaseElement {
  constructor(private readonly body: HTMLElement) {
    super('footer', ['footer']);

    this.element.innerHTML = `
      <div class="footer-container">
        <a
          class="footer__github"
          href="https://github.com/NiFroPP"
          target="_blank"
          >Github</a
        >
        <a class="footer__rss" href="https://rs.school/js/" target="_blank">
          <span class="footer__rss-year">'21</span>
        </a>
      </div>
    `;

    this.body.appendChild(this.element);
  }
}
