import './car.scss';
import { Car as CarType } from '../../API/api';
import { renderCarImage } from './car-image';

class Car {
  renderCar = ({
    id, name, color, isEngineStarted
  }: CarType): string => {
    const disabledAttribute = (disabled: boolean): string => (disabled ? 'disabled' : '');

    return `
    <div class="general-buttons">
      <button class="button select-button" id="select-car-${id}">Select</button>
      <button class="button remove-button" id="remove-car-${id}">Remove</button>
        <span class="car-name">${name}</span>
    </div>
    <div class="road">
      <div class="launch-pad">
        <div class="control-panel">
          <button class="button icon start-engine-button" id="start-engine-car-${id}" ${disabledAttribute(isEngineStarted)}>Start</button>
          <button class="button icon stop-engine-button" id="stop-engine-car-${id}" ${disabledAttribute(!isEngineStarted)}>Stop</button>
        </div>
        <div class="car" id="car-${id}">
          ${renderCarImage(color)}
        </div>
      </div>
      <div class="flag" id="flag-${id}">Finish</div>
    </div>
  `;
  };
}

export const car = new Car();
