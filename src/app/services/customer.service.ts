import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Customer } from './../classes/customer';
import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class CustomerService extends GenericService<Customer, number> {
  constructor(http: HttpClient, messageService: MessageService) {
    super(http, messageService, 'customer/');
  }
}
