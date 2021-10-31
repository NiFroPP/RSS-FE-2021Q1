import { api, Winner } from '../API/api';
import { AnimationCar, State } from './animation-car';
import store from './store';

type DrivingResult = { success: boolean; id: number; time: number };

type StartDriving = (id: number) => Promise<DrivingResult>;

let animationId: { [key: string]: State } = {};
class Car {
  startDriving: StartDriving = async (id: number): Promise<DrivingResult> => {
    const startButton = document.getElementById(
      `start-engine-car-${id}`
    ) as HTMLFormElement;
    startButton.disabled = true;
    startButton?.classList.toggle('enabling', true);

    const { velocity, distance } = await api.startEngine(id);
    const time = Math.round(distance / velocity);

    startButton?.classList.toggle('enabling', false);

    const stopEngineCar = document.getElementById(
      `stop-engine-car-${id}`
    ) as HTMLFormElement;
    stopEngineCar.disabled = false;

    const car = document.getElementById(`car-${id}`) as HTMLElement;
    const flag = document.getElementById(`flag-${id}`) as HTMLElement;
    const htmlDistance = Math.floor(
      AnimationCar.getDistanceBetweenElements(car, flag)
    );

    animationId[id] = AnimationCar.animation(car, htmlDistance, time);

    const { success } = await api.drive(id);

    const animationState = animationId[id];
    if (!success && animationState && animationState.id)
      window.cancelAnimationFrame(animationState.id);

    return { success, id, time };
  };

  stopDriving = async (id: number): Promise<void> => {
    const stopButton = document.getElementById(
      `stop-engine-car-${id}`
    ) as HTMLFormElement;
    stopButton.disabled = true;
    stopButton?.classList.toggle('enabling', true);

    await api.stopEngine(id);

    stopButton?.classList.toggle('enabling', false);

    const startEngineCar = document.getElementById(
      `start-engine-car-${id}`
    ) as HTMLFormElement;
    startEngineCar.disabled = false;

    const car = document.getElementById(`car-${id}`) as HTMLFormElement;
    car.style.transform = 'translateX(0)';

    const animationState = animationId[id];
    if (animationId[id] && animationState.id) {
      window.cancelAnimationFrame(animationState.id);
    }

    animationId = {};
  };

  race = async (action: StartDriving): Promise<Winner> => {
    const raceAll = async (
      promises: Array<Promise<DrivingResult>>,
      ids: Array<number>
    ): Promise<Winner> => {
      const { success, id, time } = await Promise.race(promises);

      if (!success) {
        const failedIndex = ids.findIndex((index: number) => index === id);
        const restPromises = [
          ...promises.slice(0, failedIndex),
          ...promises.slice(failedIndex + 1, promises.length),
        ];
        const restIds = [
          ...ids.slice(0, failedIndex),
          ...ids.slice(failedIndex + 1, ids.length),
        ];
        return raceAll(restPromises, restIds);
      }

      return {
        id,
        time: +(time / 1000).toFixed(2),
      };
    };

    const promises = store.cars.map(({ id }) => action(id));

    return raceAll(
      promises,
      store.cars.map((car) => car.id)
    );
  };

  listenerCarStart = (): void => {
    document.body.addEventListener('click', async (event) => {
      const target = event.target as HTMLFormElement;

      if (target.classList.contains('start-engine-button')) {
        const id = +target.id.split('start-engine-car-')[1];
        this.startDriving(id);
      }

      if (target.classList.contains('stop-engine-button')) {
        const id = +target.id.split('stop-engine-car-')[1];
        this.stopDriving(id);
      }

      if (target.classList.contains('race')) {
        target.disabled = true;

        const winner = await this.race(this.startDriving);
        const winnerCar = store.cars.find((car) => car.id === winner.id);

        if (winnerCar) {
          await api.saveWinner(winner);

          const message = document.getElementById('message') as HTMLElement;
          message.innerHTML = `${winnerCar.name} -- First Place (${winner.time}s)!`;
          message.classList.toggle('visible', true);

          const reset = document.getElementById('reset') as HTMLFormElement;
          reset.disabled = false;
        }
      }

      if (target.classList.contains('race-reset')) {
        target.disabled = true;
        store.cars.map(({ id }) => this.stopDriving(id));

        const message = document.getElementById('message') as HTMLElement;
        message.classList.toggle('visible', false);

        const race = document.getElementById('race') as HTMLFormElement;
        race.disabled = false;
      }
    });
  };
}

export const carDrive = new Car();
