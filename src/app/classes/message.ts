export class Message {
  id: number;
  messageText: string;
  creationDate: Date;

  constructor(messageText: string, creationDate: Date, id?: number) {
    this.id = id;
    this.messageText = messageText;
    this.creationDate = creationDate;
  }
}
