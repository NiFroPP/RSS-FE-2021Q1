import './header.scss';
import Menu from './menu/menu';
import ModeButton from './mode/modeButton';

export default function header(): HTMLElement {
  const headerElement = document.createElement('header');
  headerElement.classList.add('header');

  const headerContainer = document.createElement('div');
  headerContainer.classList.add('header__container');

  const menu = Menu();

  const heading = document.createElement('h1');
  heading.classList.add('header__title');
  heading.innerHTML = 'English for Kids';

  const mode = ModeButton();

  headerElement.append(headerContainer);
  headerContainer.append(menu, heading, mode);

  return headerElement;
}
