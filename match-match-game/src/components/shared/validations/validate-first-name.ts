export function validateFirstName(name: string): boolean {
  const re = /^([a-zA-Z])+/;
  return re.test(name);
}
