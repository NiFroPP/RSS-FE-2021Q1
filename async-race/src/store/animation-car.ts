export type State = {
  id?: number;
};

type Position = {
  x: number;
  y: number;
};

export class AnimationCar {
  static getPositionAtCenter(element: Element): Position {
    const {
      top, left, width, height
    } = element.getBoundingClientRect();
    return {
      x: left + width / 2,
      y: top + height / 2,
    };
  }

  static getDistanceBetweenElements(a: Element | HTMLElement, b: Element): number {
    const aPosition = AnimationCar.getPositionAtCenter(a);
    const bPosition = AnimationCar.getPositionAtCenter(b);

    return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
  }

  static animation(car: HTMLElement, distance: number, animationTime: number): State {
    let start: number | null = null;
    const state: State = {};

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const time = timestamp - start;
      const passed = Math.round(time * (distance / animationTime));

      car.style.transform = `translateX(${Math.min(passed, distance)}px)`;

      if (passed < distance) {
        state.id = window.requestAnimationFrame(step);
      }
    }

    state.id = window.requestAnimationFrame(step);

    return state;
  }
}
