import './footer.scss';
import CreateBaseElement from '../shared/create-base-element';

export default class Footer extends CreateBaseElement {
  constructor() {
    super('footer', ['footer']);

    this.element.innerHTML = `
    <div class="container footer-container">
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
  }
}

export const footer = new Footer();
