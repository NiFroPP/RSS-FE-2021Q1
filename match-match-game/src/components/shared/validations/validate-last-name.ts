export function validateLastName(name: string): boolean {
  const re = /^([a-zA-Z])+/;
  return re.test(name);
}
