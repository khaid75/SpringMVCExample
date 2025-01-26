import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/add-employee/create/create.component';
import { ListComponent } from './components/add-employee/list/list.component';
import { UpdateComponent } from './components/add-employee/update/update.component';

// Leave Management Components
import { CreateleaveComponent } from './components/leave-management/createleave/createleave.component';
import { ListleaveComponent } from './components/leave-management/listleave/listleave.component';
import { UpdatelistComponent } from './components/leave-management/updatelist/updatelist.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((m) => m.EmployeeModule), // Lazy load the Employee module
  },
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: '**', redirectTo: '/employee' },

  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'payroll', component: PayrollComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent },

  // Add-Employee Routes
  {
    path: 'add-employee',
    children: [
      { path: 'create', component: CreateComponent },
      { path: 'list', component: ListComponent },
      { path: 'update/:id', component: UpdateComponent }
    ],
  },

  // Leave Management Routes
  {
    path: 'leave-management',
    children: [
      { path: 'create', component: CreateleaveComponent },
      { path: 'list', component: ListleaveComponent },
      { path: 'leave-management/update/:id', component: UpdatelistComponent },

    ],
  },

  // Wildcard Route for unknown paths (only one wildcard route)
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
