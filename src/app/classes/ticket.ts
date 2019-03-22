import { Customer } from './customer';
import { Message } from './message';

export class Ticket {
  private id: number;
  private title: string;
  private description: string;
  messages: Message[] = [];
  private creationDate: Date;
  private customer: Customer;

 constructor(title: string, description: string, creationDate: Date, customer: Customer, id?: number, messages?: Message[]) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.creationDate = creationDate;
  this.customer = customer;

  if (typeof messages === 'undefined') {
    this.messages = [];
  } else {
    this.messages = messages;
  }
 }
}
