import { renderGarage } from './garage';
import { updateState } from '../../store/update-state';
import { api } from '../../API/api';
import { generateRandomCars } from '../shared/generate-random-cars';

type SelectedCar = {
  name?: string;
  color?: string;
  id?: number;
};

const DEFAULT_COLOR = '#ffffff';
let selectedCar: SelectedCar = {};

export const listenerCar = (): void => {
  const garage = document.getElementById('garage') as HTMLElement;
  const update = document.getElementById('update') as HTMLElement;
  const updateName = document.getElementById('update-name') as HTMLFormElement;
  const updateColor = document.getElementById(
    'update-color'
  ) as HTMLFormElement;
  const updateSubmit = document.getElementById(
    'update-submit'
  ) as HTMLFormElement;

  document.body.addEventListener('click', async (event) => {
    const target = event.target as HTMLFormElement;

    if (target.classList.contains('select-button')) {
      const targetId = +target.id.split('select-car-')[1];

      selectedCar = await api.getCar(targetId);

      updateName.value = selectedCar.name;
      updateName.disabled = false;

      updateColor.value = selectedCar.color;
      updateColor.disabled = false;

      updateSubmit.disabled = false;
    }

    if (target.classList.contains('remove-button')) {
      const id = +target.id.split('remove-car-')[1];
      await api.deleteCar(id);
      await api.deleteWinner(id);
      await updateState.updateStateGarage();

      garage.innerHTML = renderGarage();
    }
  });

  update.addEventListener('submit', async (event: Event) => {
    const submitTarget = event.target as HTMLFormElement;

    event.preventDefault();

    const formData = new FormData(submitTarget);

    const car = {
      name: formData.get('name')?.toString() || '',
      color: formData.get('color')?.toString() || DEFAULT_COLOR
    };

    if (selectedCar.id) {
      await api.updateCar(selectedCar.id, car);
    }

    await updateState.updateStateGarage();

    garage.innerHTML = renderGarage();

    updateName.value = '';
    updateName.disabled = true;

    updateColor.value = DEFAULT_COLOR;
    updateColor.disabled = true;

    updateSubmit.disabled = true;

    selectedCar = {};
  });
};

export const listenerCreateCar = (): void => {
  const garage = document.getElementById('garage') as HTMLElement;
  const generator = document.getElementById('generator') as HTMLElement;
  const create = document.getElementById('create') as HTMLElement;
  const createName = document.getElementById('create-name') as HTMLFormElement;

  create.addEventListener('submit', async (event) => {
    const target = event.target as HTMLFormElement;

    event.preventDefault();

    const formData = new FormData(target);

    const car = {
      name: formData.get('name')?.toString() || '',
      color: formData.get('color')?.toString() || DEFAULT_COLOR
    };

    await api.createCar(car);
    await updateState.updateStateGarage();

    garage.innerHTML = renderGarage();

    createName.value = '';

    target.disabled = true;
  });

  generator.addEventListener('click', async (event) => {
    const target = event.target as HTMLFormElement;

    target.disabled = true;

    const cars = generateRandomCars();

    await Promise.all(cars.map(async (car) => api.createCar(car)));
    await updateState.updateStateGarage();

    garage.innerHTML = renderGarage();

    target.disabled = false;
  });
};
