import { CustomerService } from './../../services/customer.service';
import { CompanyService } from './../../services/company.service';
import { Company } from './../../classes/company';
import { Customer } from './../../classes/customer';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  companies: Company[];
  company: Company = new Company;

  constructor(
    private companyService: CompanyService,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.getCustomers();
    this.getCompanies();
  }

  getCustomers(): void {
    this.customerService.getAll()
      .subscribe(customers => this.customers = customers);
  }

  getCompanies(): void {
    this.companyService.getAll()
      .subscribe(companies => this.companies = companies);
  }

  addCustomer(firstName: string, lastName: string) {
    firstName = firstName.trim();
    lastName = lastName.trim();

    if ((!firstName) || (!lastName) || (!this.company)) { return; }

    this.customerService.save(this.buildNewCustomerObject(firstName, lastName, this.company))
      .subscribe(customer => {
        this.customers.push(customer);
      });
  }

  deleteCustomer(customer: Customer): void {
    this.customers.filter(c => c !== customer);
    this.customerService.delete(customer.id, customer).subscribe();
  }

  onCompanyChange(company: Company): void {
    this.company = company;
  }

  private buildNewCustomerObject(firstName: string, lastName: string, company: Company): Customer {
    return new Customer(firstName, lastName, company);
  }
}
