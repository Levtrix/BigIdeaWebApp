import { Company } from './company';

export class Customer {
  _id: number;
  _firstName: string;
  _lastName: string;
  _company: Company;

  static fromJSON(data: any) {
    return Object.assign(new this, data);
  }

  // Getters and setters
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get company(): Company {
    return this._company;
  }

  set company(value: Company) {
    this._company = value;
  }
}
