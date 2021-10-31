import './pagination.scss';
import CreateBaseElement from '../shared/create-base-element';
import store from '../../store/store';
import { updateState } from '../../store/update-state';
import { renderGarage } from '../garage/garage';
import { renderWinners } from '../winners/winners';

class Pagination extends CreateBaseElement {
  constructor() {
    super('div', ['pagination-container', 'container']);

    this.element.innerHTML = `
      <button class="button pagination__prev" id="prev" disabled>Prev</button>
      <button class="button pagination__next" id="next" disabled>Next</button>
    `;

    this.element
      .querySelector('.pagination__prev')
      ?.addEventListener('click', async () => {
        switch (store.view) {
          case 'garage': {
            store.carsPage--;
            await updateState.updateStateGarage();

            const garage = document.getElementById('garage') as HTMLElement;
            garage.innerHTML = renderGarage();

            break;
          }
          case 'winners': {
            store.winnersPage--;
            await updateState.updateStateWinners();

            const winnerView = document.getElementById(
              'winners-view'
            ) as HTMLElement;
            winnerView.innerHTML = renderWinners();

            break;
          }

          default: {
            throw new TypeError('Unexpected');
          }
        }
      });

    this.element
      .querySelector('.pagination__next')
      ?.addEventListener('click', async () => {
        switch (store.view) {
          case 'garage': {
            store.carsPage++;
            await updateState.updateStateGarage();

            const garage = document.getElementById('garage') as HTMLElement;
            garage.innerHTML = renderGarage();
            break;
          }
          case 'winners': {
            store.winnersPage++;
            await updateState.updateStateWinners();

            const winnerView = document.getElementById(
              'winners-view'
            ) as HTMLElement;
            winnerView.innerHTML = renderWinners();

            break;
          }

          default: {
            throw new TypeError('Unexpected');
          }
        }
      });
  }
}

export const pagination = new Pagination();
