import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/classes/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tickets: Ticket[];

  constructor(
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    // this.getTickets();
  }

  getTickets(): void {
    this.ticketService.getAll()
      .subscribe(tickets => this.tickets = tickets);
  }

  /* TODO: Decide if it's possible to add tickets from the dashboard*/
}
