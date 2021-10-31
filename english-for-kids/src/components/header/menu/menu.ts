import './menu.scss';
import Data from '../../../constants/data.json';
import MenuButton from './menuButton/menuButton';
import MenuSide from './menuSide/menuSide';
import { openMenu } from '../../store/open-side-menu';

export default function menu(): HTMLElement {
  const navigation = document.createElement('nav');
  navigation.classList.add('nav');

  const menuOverlay = document.createElement('div');
  menuOverlay.classList.add('menu__overlay');

  const menuSide = MenuSide(Data);

  const menuButton = MenuButton();

  navigation.append(menuOverlay, menuSide, menuButton);

  openMenu.events.subscribe(() => {
    if (openMenu.active === 'open') {
      navigation.classList.toggle('open');
    }
  });

  menuOverlay.addEventListener('click', () => {
    navigation.classList.toggle('open');

    const menuSwitch = document.getElementById(
      'menu-toggle'
    ) as HTMLInputElement;
    menuSwitch.checked = false;
  });

  return navigation;
}
