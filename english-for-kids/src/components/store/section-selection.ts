// eslint-disable-next-line import/no-cycle
import { DataCards } from '../sections/sections';
// eslint-disable-next-line import/no-cycle
import trainingMode from '../sections/train-mode/trainingMode';
// import Sections from './../sections/sections';

export const sectionSelection = (
  name: string,
  data: DataCards[],
  sectionName: string
): void => {
  const clearMain = document.getElementById('cards');
  clearMain?.remove();

  switch (name) {
    // case 'Sections': {
    //   const section = Sections(data);

    //   const main = document.querySelector('main');
    //   main?.append(section);
    //   break;
    // }
    case 'Cards': {
      const training = trainingMode(data, sectionName);

      const main = document.querySelector('main');
      main?.append(training);
      break;
    }

    default:
  }
};
