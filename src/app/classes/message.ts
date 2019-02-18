export class Message {
  _id: number;
  _messageText: string;
  _creationDate: Date;

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

  get messageText(): string {
    return this._messageText;
  }

  set messageText(value: string) {
    this._messageText = value;
  }

  get creationDate(): Date {
    return this._creationDate;
  }

  set creationDate(value: Date) {
    this._creationDate = value;
  }
}
