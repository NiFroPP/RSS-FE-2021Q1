import { car } from './car';
import store from '../../store/store';

export const renderGarage = (): string => `
  <h3 class="garage__title">Garage (You have ${store.carsCount} cars)</h3>
  <h3 class="garage__pages">Page #${store.carsPage}</h3>
  <ul class="garage">
    ${store.cars
    .map(
      (element) => `
    <li>${car.renderCar(element)}</li>
    `
    )
    .join('')}
  </ul>
`;
