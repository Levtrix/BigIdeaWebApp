import { CompaniesComponent } from './../views/companies/companies.component';
import { CompanyDetailComponent } from './../views/company-detail/company-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { NotfoundComponent } from '../views/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'company-detail/:id', component: CompanyDetailComponent },
  // Add more routes
  { path: '404', component: NotfoundComponent },
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  imports: [

  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
