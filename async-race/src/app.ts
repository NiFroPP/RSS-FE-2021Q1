import { pagination } from './components/pagination/pagination';
import { footer } from './components/footer/footer';
import { renderWinners } from './components/winners/winners';
import { header } from './components/header/header';
import { renderGarage } from './components/garage/garage';

export const render = (): void => {
  const main = `
  <div class="container">
    <div class="garage-page" id="garage-view">
      <div class="garage__create-update-cars">
        <form class="garage__create-cars" id="create">
          <input class="garage__create-name" id="create-name" name="name" type="text">
          <input class="garage__create-color" id="create-color" name="color" type="color" value="#ffffff">
          <button class="button garage__create" type="submit">Create Car</button>
        </form>
        <form class="garage__update-cars" id="update">
          <input class="garage__update-name" id="update-name" name="name" type="text" disabled>
          <input class="garage__update-color" id="update-color" name="color" type="color" value="#ffffff" disabled>
          <button class="button garage__update" id="update-submit" type="submit" disabled>Update Car</button>
        </form>
      </div>
      <div class="race-controls">
        <button class="button race" id="race">Race</button>
        <button class="button race-reset" id="reset">Reset</button>
        <button class="button race-generator" id="generator">Generator cars</button>
      </div>
      <div class="garage" id="garage">
        ${renderGarage()}
      </div>
      <div class="garage__message">
        <p class="message" id="message"></p>
      </div>
    </div>
    <div class="winners-page" id="winners-view" style="display: none">
      ${renderWinners()}
    </div>
    <div class="pagination">
    </div>
  </div>
  `;
  const root = document.createElement('main');
  root.classList.add('main');
  root.innerHTML = main;

  document.body.append(header.element);
  document.body.append(root);
  document.querySelector('.pagination')?.append(pagination.element);
  document.body.append(footer.element);
};
