import { Component } from '@angular/core';
import { LeaveService } from 'src/app/services/leave.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createleave',
  templateUrl: './createleave.component.html',
  styleUrls: ['./createleave.component.css']
})
export class CreateleaveComponent {
  leaveData = {
    employeeName: '',
    leaveType: '',
    startDate: '',
    endDate: '',
    status: 'Pending'
  };

  constructor(private leaveService: LeaveService, private router: Router) {}

  onSubmit() {
    this.leaveService.addLeave(this.leaveData).subscribe(() => {
      alert('Leave created successfully!');
      this.router.navigate(['/leave-management/list']);
    });
  }
}
