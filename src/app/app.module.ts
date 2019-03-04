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
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
