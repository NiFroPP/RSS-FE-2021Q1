export class User {
  firstNameValid: boolean;

  lastNameValid: boolean;

  emailNameValid: boolean;

  firstName: string;

  lastName: string;

  emailName: string;

  constructor() {
    this.firstNameValid = false;
    this.lastNameValid = false;
    this.emailNameValid = false;

    this.firstName = '';
    this.lastName = '';
    this.emailName = '';
  }

  getFirstName(): string {
    return this.firstName;
  }

  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  getEmailName(): string {
    return this.emailName;
  }

  setEmailName(emai: string): void {
    this.emailName = emai;
  }

  cleanValidate(): void {
    this.firstNameValid = false;
    this.lastNameValid = false;
    this.emailNameValid = false;
    this.firstName = '';
    this.lastName = '';
    this.emailName = '';
  }
}

export const user = new User();
