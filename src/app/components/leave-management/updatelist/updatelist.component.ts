import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-updatelist',
  templateUrl: './updatelist.component.html',
  styleUrls: ['./updatelist.component.css']
})
export class UpdatelistComponent implements OnInit {
  leaveId!: number; // Leave ID to fetch and update data
  leaveData = {
    employeeName: '',
    leaveType: '',
    startDate: '',
    endDate: '',
    status: ''
  };

  constructor(
    private leaveService: LeaveService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch the leave ID from the route parameter
    this.leaveId = +this.route.snapshot.paramMap.get('id')!;
    this.fetchLeaveDetails(this.leaveId);
  }

  fetchLeaveDetails(id: number) {
    this.leaveService.getLeaveById(id).subscribe((data) => {
      this.leaveData = data;
    });
  }

  onUpdate() {
    this.leaveService.updateLeave(this.leaveId, this.leaveData).subscribe(() => {
      alert('Leave updated successfully!');
      this.router.navigate(['/leave-management/list']);
    });
  }
}
