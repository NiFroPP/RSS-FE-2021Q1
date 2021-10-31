import './modeButton.scss';

export default function modeButton(): HTMLElement {
  const modeBtn = document.createElement('div');
  modeBtn.classList.add('game-mode');

  const modeCheckbox = document.createElement('input');
  modeCheckbox.classList.add('menu__checkbox');
  modeCheckbox.setAttribute('id', 'game-mode');
  modeCheckbox.setAttribute('type', 'checkbox');

  const modeSwitch = document.createElement('label');
  modeSwitch.classList.add('game-mode__switch');
  modeSwitch.setAttribute('for', 'game-mode');

  modeBtn.append(modeCheckbox, modeSwitch);

  return modeBtn;
}
