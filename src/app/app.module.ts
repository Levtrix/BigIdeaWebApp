import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages/messages.component';
import { CompanyDetailComponent } from './views/company-detail/company-detail.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { CompaniesComponent } from './views/companies/companies.component';
import { NotfoundComponent } from './views/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    CompanyDetailComponent,
    DashboardComponent,
    CompaniesComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
