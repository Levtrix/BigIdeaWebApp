import { Location } from '@angular/common';
import { CompanyService } from './../../services/company.service';
import { CustomerService } from './../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Company } from './../../classes/company';
import { Customer } from './../../classes/customer';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  @Input() customer: Customer;
  companies: Company[];

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private companyService: CompanyService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getCustomer();
    this.getCompanies();
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getById(id)
      .subscribe(customer => this.customer = customer);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.customerService.edit(this.customer)
      .subscribe(() => this.goBack());
  }

  getCompanies(): void {
    this.companyService.getAll()
      .subscribe(companies => this.companies = companies);
  }
}
