import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MessagesComponent } from './messages/messages.component';
import { CompanyDetailComponent } from './views/company-detail/company-detail.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CompaniesComponent } from './views/companies/companies.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CustomersComponent } from './views/customers/customers.component';
import { CustomerDetailComponent } from './views/customer-detail/customer-detail.component';
import { TicketDetailComponent } from './views/ticket-detail/ticket-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    CompanyDetailComponent,
    DashboardComponent,
    CompaniesComponent,
    NotfoundComponent,
    CustomersComponent,
    CustomerDetailComponent,
    TicketDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
