export class Company {
  _id: number;
  _name: string;
  _postalCode: string;
  _address: string;

  static fromJSON(data: any) {
    return Object.assign(new this, data)
  }

  // Getters and setters
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get postalCode(): string {
    return this._postalCode;
  }

  set postalCode(value: string) {
    this._postalCode = value;
  }

  get address(): string {
    return this.address;
  }

  set address(value: string) {
    this._address = value;
  }
}
