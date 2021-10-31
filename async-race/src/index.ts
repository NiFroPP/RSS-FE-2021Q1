import { listenerSortWinners } from './components/winners/winners';
import { carDrive } from './store/car';
import {
  listenerCar,
  listenerCreateCar,
} from './components/garage/listener-car';
import { pageSwitching } from './components/shared/page-switching';
import { updateState } from './store/update-state';
import { render } from './app';
import './style.scss';

render();
await updateState.updateStateGarage();
pageSwitching();
listenerCar();
listenerCreateCar();
carDrive.listenerCarStart();
listenerSortWinners();
