import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Ticket } from 'src/app/classes/ticket';
import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';


@Injectable({
  providedIn: 'root'
})

export class TicketService extends GenericService<Ticket, number> {
  constructor(http: HttpClient, messageService: MessageService) {
    super(http, messageService, 'ticket/');
  }
}
