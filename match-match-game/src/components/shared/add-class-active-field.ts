export function addClassActiveField(classHeader: string): void {
  const mainVisionActiveElement = document.querySelector('main');
  mainVisionActiveElement?.classList.add(classHeader);

  const headerVisionActiveElement = document.querySelector('header');
  headerVisionActiveElement?.classList.add(classHeader);
}
