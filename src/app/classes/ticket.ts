import { Customer } from './customer';
import { Message } from './message';

export class Ticket {
  private id: number;
  private title: string;
  private description: string;
  private messages: Message[] = [];
  private creationDate: Date;
  private customer: Customer;

 constructor(title: string, description: string, messages: Message[], creationDate: Date, customer: Customer, id?: number) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.clear();
  this.messages = messages;
  this.creationDate = creationDate;
  this.customer = customer;
 }

  // Class methods
  private clear(): void {
    this.messages = [];
  }

  public addMessage(message: Message): void {
    this.messages.push(message);
  }

  public editMessage(_message: Message): void {
    // tslint:disable-next-line:no-shadowed-variable
    for (const Message of this.messages) {
      if (Message.id === _message.id) {
          Message.messageText = _message.messageText;
          Message.creationDate = _message.creationDate;
      }
    }
  }
}
