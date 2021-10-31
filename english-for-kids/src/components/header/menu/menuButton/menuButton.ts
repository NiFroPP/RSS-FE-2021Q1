import './menuButton.scss';
import { openMenu } from '../../../store/open-side-menu';

export default function menuButton(): HTMLElement {
  const menuToggle = document.createElement('div');
  menuToggle.classList.add('menu__toggle');

  const menuCheckbox = document.createElement('input');
  menuCheckbox.classList.add('menu__checkbox');
  menuCheckbox.setAttribute('type', 'checkbox');
  menuCheckbox.setAttribute('id', 'menu-toggle');

  const menuTop = document.createElement('span');
  menuTop.classList.add('menu__top');

  const menuCenter = document.createElement('span');
  menuCenter.classList.add('menu__center');

  const menuBottom = document.createElement('span');
  menuBottom.classList.add('menu__bottom');

  menuToggle.append(menuCheckbox, menuTop, menuCenter, menuBottom);

  menuCheckbox.addEventListener('click', () => {
    openMenu.setActive('open');
  });

  return menuToggle;
}
