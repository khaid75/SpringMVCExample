import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/services/leave.service';

@Component({
  selector: 'app-listleave',
  templateUrl: './listleave.component.html',
  styleUrls: ['./listleave.component.css'],
})
export class ListleaveComponent implements OnInit {
  leaves: any[] = []; // Leave list
  showUpdateForm: boolean = false; // To toggle update form
  leaveData: any = {}; // Selected leave data for update

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {
    this.getAllLeaves();
  }

  getAllLeaves() {
    this.leaveService.getLeaves().subscribe((data) => {
      this.leaves = data;
      console.log('-------------------', this.leaves);
      
    });
  }

  editLeave(id: number) {
    this.leaveService.getLeaveById(id).subscribe((data) => {
      this.leaveData = data; // Load leave data for update
      this.showUpdateForm = true; // Show the update form
    });
  }

  onUpdate() {
    this.leaveService.updateLeave(this.leaveData.id, this.leaveData).subscribe(() => {
      alert('Leave updated successfully!');
      this.getAllLeaves(); // Refresh the list
      this.showUpdateForm = false; // Hide the update form
    });
  }

  deleteLeave(id: number) {
    this.leaveService.deleteLeave(id).subscribe(() => {
      alert('Leave deleted successfully!');
      this.getAllLeaves();
    });
  }
}
