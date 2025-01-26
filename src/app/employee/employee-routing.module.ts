import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavelistComponent } from './Components/Leave/leavelist/leavelist.component';

const routes: Routes = [
   { path: 'leave', component: LeavelistComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
