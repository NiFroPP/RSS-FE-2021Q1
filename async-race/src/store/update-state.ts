import { api } from '../API/api';
import store from './store';

const MAX_CARS_FOR_GARAGE = 7;
const MAX_CARS_FOR_WINNERS = 10;

class UpdateState {
  updateStateGarage = async (): Promise<void> => {
    const { items, count } = await api.getCars(store.carsPage);

    store.cars = items;
    store.carsCount = count;

    if (store.carsPage * MAX_CARS_FOR_GARAGE < +store.carsCount) {
      const next = document.getElementById('next') as HTMLFormElement;
      next.disabled = false;
    } else {
      const next = document.getElementById('next') as HTMLFormElement;
      next.disabled = true;
    }

    if (store.carsPage > 1) {
      const prev = document.getElementById('prev') as HTMLFormElement;
      prev.disabled = false;
    } else {
      const prev = document.getElementById('prev') as HTMLFormElement;
      prev.disabled = true;
    }
  };

  updateStateWinners = async (): Promise<void> => {
    const { items, count } = await api.getWinners({
      page: store.winnersPage,
      sort: store.sortBy,
      order: store.sortOrder,
    });

    store.winners = items;
    store.winnersCount = count;

    if (store.winnersPage * MAX_CARS_FOR_WINNERS < +store.winnersCount) {
      const next = document.getElementById('next') as HTMLFormElement;
      next.disabled = false;
    } else {
      const next = document.getElementById('next') as HTMLFormElement;
      next.disabled = true;
    }

    if (store.winnersPage > 1) {
      const prev = document.getElementById('prev') as HTMLFormElement;
      prev.disabled = false;
    } else {
      const prev = document.getElementById('prev') as HTMLFormElement;
      prev.disabled = true;
    }
  };
}

export const updateState = new UpdateState();
