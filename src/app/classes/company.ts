export class Company {
  id: number;
  name: string;
  postalCode: string;
  address: string;

  constructor(name: string, postalCode: string, address: string, id?: number) {
    this.id = id;
    this.name = name;
    this.postalCode = postalCode;
    this.address = address;
  }
}
