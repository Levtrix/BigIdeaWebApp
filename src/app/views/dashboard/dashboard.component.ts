import { CustomerService } from './../../services/customer.service';
import { Customer } from './../../classes/customer';
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
  customers: Customer[];
  customer: Customer = new Customer;
  dateToday: Date = new Date();

  constructor(
    private ticketService: TicketService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.getTickets();
    this.getCustomers();
  }

  getTickets(): void {
    this.ticketService.getAll()
      .subscribe(tickets => this.tickets = tickets);
  }

  getCustomers(): void {
    this.customerService.getAll()
      .subscribe(customers => this.customers = customers);
  }

  addTicket(title: string, description: string): void {
    title = title.trim();
    description = description.trim();

    if ((!title) || (!description) || (!this.customer)) { return; }

    this.ticketService.save(this.buildNewTicketObject(title, description, this.customer))
      .subscribe(ticket => {
        this.tickets.push(ticket);
      });
  }

  onCustomerChange(customer: Customer): void {
    this.customer = customer;
  }

  private buildNewTicketObject(title: string, description: string, customer: Customer): Ticket {
    return new Ticket(title, description, this.dateToday, customer);
  }
}
