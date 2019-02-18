import { Message } from './message';

export class Ticket {
  private _id: number;
  private _title: string;
  private _description: string;
  private _messages: Message[] = [];
  private _creationDate: Date;

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

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get messages(): Message[] {
    return this._messages;
  }

  set messages(args: Message[]) {
    this.clear();
    this.messages = args;
  }

  get creationDate(): Date {
    return this._creationDate;
  }

  set creationDate(value: Date) {
    this._creationDate = value;
  }

  // Class methods
  public clear(): void {
    this._messages = [];
  }

  public addMessage(message: Message): void {
    this._messages.push(message);
  }
}
