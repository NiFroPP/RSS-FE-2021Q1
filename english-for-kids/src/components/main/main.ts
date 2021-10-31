import './main.scss';
import Sections from '../sections/sections';
import Data from '../../constants/data.json';

export default function main(): HTMLElement {
  const mainElement = document.createElement('main');
  mainElement.classList.add('main');

  const sectionsElement = Sections(Data);

  document.body.append(mainElement);
  mainElement.append(sectionsElement);

  return mainElement;
}
