import { Company } from './company';

export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  company: Company;

  constructor(firstName: string, lastName: string, company: Company, id?: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
  }
}
