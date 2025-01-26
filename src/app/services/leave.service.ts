import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private apiUrl = 'http://localhost:8081/api/leave'; // JSON server endpoint

  constructor(private http: HttpClient) {}

  // Fetch all leaves
  getLeaves(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Fetch leave by ID
  getLeaveById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Add a new leave
  addLeave(leave: any): Observable<any> {
    return this.http.post(this.apiUrl, leave);
  }

  // Update an existing leave
  updateLeave(id: number, leave: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, leave);
  }

  // Delete a leave
  deleteLeave(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
