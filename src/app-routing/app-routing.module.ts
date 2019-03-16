import { CompanyDetailComponent } from './../app/views/company-detail/company-detail.component';
import { CompaniesComponent } from './../app/views/companies/companies.component';
import { DashboardComponent } from './../app/views/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from 'src/app/views/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'companies', component: CompaniesComponent},
  { path: 'company-detail/:id', component: CompanyDetailComponent},
  { path: '404', component: NotfoundComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
