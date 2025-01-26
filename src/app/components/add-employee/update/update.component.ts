import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  employeeForm: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      mobile: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employeeForm.patchValue(data);
    });
  }

  updateEmployee() {
    if (this.employeeForm.valid) {
      this.employeeService.updateEmployee(this.id, this.employeeForm.value).subscribe(() => {
        alert('Employee updated successfully');
        this.router.navigate(['/add-employee/list']);
      });
    }
  }
}
