import { api } from '../API/api';

const { items: cars, count: carsCount } = await api.getCars(1);
const { items: winners, count: winnersCount } = await api.getWinners({
  page: 1,
});

export default {
  carsPage: 1,
  cars,
  carsCount,
  winnersPage: 1,
  winners,
  winnersCount,
  view: 'garage',
  sortBy: '',
  sortOrder: '',
};
