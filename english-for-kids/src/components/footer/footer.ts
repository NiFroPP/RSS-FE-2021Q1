import './footer.scss';

export default function footer(): HTMLElement {
  const footerElement = document.createElement('footer');
  footerElement.classList.add('footer');
  footerElement.innerHTML = `
    <div class="footer__container">
      <a
        class="footer__github"
        href="https://github.com/NiFroPP"
        target="_blank"
        >Github</a
      >
      <a class="footer__rss" href="https://rs.school/js/" target="_blank">
        <div class="footer__rss-content">
          <div class="footer__rss-image"></div>
          <div class="footer__rss-year">'21</div>
        </div>
      </a>
    </div>
  `;

  return footerElement;
}
