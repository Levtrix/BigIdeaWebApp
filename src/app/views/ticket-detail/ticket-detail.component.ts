import { Location } from '@angular/common';
import { CustomerService } from './../../services/customer.service';
import { TicketService } from 'src/app/services/ticket.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from './../../classes/customer';
import { Ticket } from './../../classes/ticket';
import { Component, OnInit, Input } from '@angular/core';
import { Message } from 'src/app/classes/message';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  @Input() ticket: Ticket;
  customers: Customer[];
  dateToday: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private customerService: CustomerService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTicket();
    this.getCustomers();
  }

  getTicket(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ticketService.getById(id)
      .subscribe(ticket => this.ticket = ticket);
  }

  getCustomers(): void {
    this.customerService.getAll()
      .subscribe(customers => this.customers = customers);
  }

  addMessage(messageText: string): void {
   this.ticket.messages.push(new Message(messageText, this.dateToday));

    this.ticketService.edit(this.ticket)
      .subscribe(ticket => this.ticket = ticket);
  }

  deleteTicketMessage(message: Message): void {
    this.ticket.messages.filter(m => m !== message);
    this.ticketService.edit(this.ticket).subscribe();
  }

  // Decide if editing a message should be doable in this view
  editTicketMessage(message: Message): void {
    this.ticket.messages.forEach(m => {
      if (message.id === m.id) {
        m.messageText = message.messageText;
      }
    });

    this.ticketService.edit(this.ticket).subscribe();
  }

  save(): void {
    this.ticketService.save(this.ticket)
      .subscribe(ticket => this.ticket = ticket);
  }

  goBack(): void {
    this.location.back();
  }
}
