import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { GenericService } from './generic.service';
import { Company } from './../classes/company';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CompanyService extends GenericService<Company, number> {
  constructor(http: HttpClient, messageService: MessageService) {
    super(http, messageService, 'company/');
  }
}
