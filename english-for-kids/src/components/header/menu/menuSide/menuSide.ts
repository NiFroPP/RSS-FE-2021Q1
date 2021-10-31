import './menuSide.scss';

import { openSection } from '../../../store/section-observable';
// import openSection from '../../../store/section-observable';
import { sectionSelection } from '../../../store/section-selection';
import { openMenu } from '../../../store/open-side-menu';
import { Data } from '../../../sections/sections';
// import menuChecked from '../../../store/menu-checked';

export default function menuSide(sections: Data[]): HTMLUListElement {
  const menu = document.createElement('ul');
  menu.classList.add('menu');

  sections.forEach((section) => {
    const menuItem = document.createElement('li');
    menuItem.classList.add('menu__item');

    const menuItemLink = document.createElement('a');
    menuItemLink.classList.add('menu__item-name');

    menuItemLink.textContent = section.name;

    openSection.events.subscribe(() => {
      if (section.name !== openSection.active) {
        menuItem.classList.remove('open-section');

        openMenu.setActive('open');

        const menuSwitch = document.getElementById(
          'menu-toggle'
        ) as HTMLInputElement;
        menuSwitch.checked = false;
      }
    });

    menuItemLink.addEventListener('click', () => {
      menuItem.classList.add('open-section');

      openSection.setActive(section.name);

      sectionSelection('Cards', section.cards, section.name);
    });

    menuItem.append(menuItemLink);
    menu.append(menuItem);
  });

  // const mainMenuItem = document.createElement('li');
  // mainMenuItem.classList.add('menu__item');

  // const mainMenuLink = document.createElement('a');
  // mainMenuLink.classList.add('menu__item-name');
  // mainMenuLink.innerHTML = 'main menu';

  // mainMenuItem.prepend(mainMenuLink);
  // menu.prepend(mainMenuItem);

  // mainMenuLink.addEventListener('click', () => {
  //   sectionSelection('Sections', sections, '');

  //   openMenu.setActive('open');

  //   const menuSwitch = document.getElementById(
  //     'menu-toggle'
  //   ) as HTMLInputElement;
  //   menuSwitch.checked = false;

  //   openSection.setActive('');
  // });

  return menu;
}
