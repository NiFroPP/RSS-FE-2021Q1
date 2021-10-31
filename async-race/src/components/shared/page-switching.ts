import { api } from './../../API/api';
import { renderWinners } from '../winners/winners';
import { updateState } from '../../store/update-state';
import { pagesStore } from '../../store/page-store';
import store from '../../store/store';

export const pageSwitching = (): void => {
  pagesStore.events.subscribe(async () => {
    const garageView = document.getElementById('garage-view') as HTMLElement;
    const winnersView = document.getElementById('winners-view') as HTMLElement;

    if (pagesStore.active === 'garage') {
      garageView.style.display = 'block';
      winnersView.style.display = 'none';
      store.view = 'garage';

      await updateState.updateStateGarage();
    } else {
      winnersView.style.display = 'block';
      garageView.style.display = 'none';
      store.view = 'winners';

      await updateState.updateStateWinners();
      winnersView.innerHTML = renderWinners();
    }
  });
};
