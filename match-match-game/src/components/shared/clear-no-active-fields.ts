function clearClassName(mainField: HTMLElement) {
  mainField.classList.remove('about-game--active');
  mainField.classList.remove('best-score--active');
  mainField.classList.remove('settings--active');
  mainField.classList.remove('game--active');
  mainField.classList.remove('registration--active');
}

export function clearNoActiveFields(): void {
  const mainField = document.querySelector('main');
  if (mainField) {
    clearClassName(mainField);
  }

  const headerField = document.querySelector('header');
  if (headerField) {
    clearClassName(headerField);
  }
}
