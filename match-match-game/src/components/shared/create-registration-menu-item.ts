export function createRegistrationMenuItem(
  inner: string,
  elem: HTMLElement
): void {
  const registrationLogo = document.createElement('h3');
  const registrationSeparator = document.createElement('hr');

  registrationLogo.classList.add('registration__name');
  registrationLogo.innerHTML = `${inner}`;

  elem.appendChild(registrationSeparator);
  elem.appendChild(registrationLogo);
}
