import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreateComponent } from './components/add-employee/create/create.component';
import { ListComponent } from './components/add-employee/list/list.component';
import { UpdateComponent } from './components/add-employee/update/update.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateleaveComponent } from './components/leave-management/createleave/createleave.component';
import { ListleaveComponent } from './components/leave-management/listleave/listleave.component';
import { UpdatelistComponent } from './components/leave-management/updatelist/updatelist.component';
import { Event, NavigationEnd, Router } from '@angular/router';
import { EmployeeRoutingModule } from './employee/employee-routing.module';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    DashboardComponent,
    EmployeeListComponent,
    AttendanceComponent,
    PayrollComponent,
    ReportsComponent,
    SettingsComponent,
    HomeComponent,
    CreateComponent,
    ListComponent,
    UpdateComponent,
    NavbarComponent,
    CreateleaveComponent,
    ListleaveComponent,
    UpdatelistComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    EmployeeRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        console.log('NavigationEnd:', event.urlAfterRedirects);
      }
    });
  }
 }
