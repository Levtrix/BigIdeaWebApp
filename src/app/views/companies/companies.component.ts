import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Company } from './../../classes/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
  }

  getCompanies(): void {
    this.companyService.getAll()
      .subscribe(companies => this.companies = companies);
  }

  addCompany(name: string, postalCode: string, address: string): void {
    name = name.trim();
    postalCode = postalCode.trim();
    address = address.trim();

    if ((!name) || (!postalCode) || (!address)) { return; }

    this.companyService.save({name, postalCode, address} as Company)
      .subscribe(company => {
        this.companies.push(company);
      });
  }
}
