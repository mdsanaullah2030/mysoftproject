import { Component, OnInit } from '@angular/core';
import { RegistService } from '../../service/regist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent implements OnInit{
  registrations: any[] = [];

  constructor(
    private registService: RegistService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadRegistration();
  }

  loadRegistration() {
    this.registService.getAllRegistration().subscribe({
      next: (data) => {
        if (Array.isArray(data)) {
          this.registrations = data.map(reg => ({
            ...reg,
            currentAge: this.calculateAge(new Date(reg.age)) // Add current age to each registration
          }));
          console.log('Registration loaded successfully', this.registrations);
        } else {
          console.error('Expected an array, but received', data);
        }
      },
      error: (err) => {
        console.error('Error loading Registration', err);
      }
    });
  }


  calculateAge(dob: Date): number {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  }

  deleteRegistration(id: string): void {
    if (confirm('Are you sure you want to delete this Registration?')) {
      this.registService.deleteRegistration(id).subscribe({
        next: () => {
          this.loadRegistration();
          console.log('Registration deleted successfully.');
        },
        error: err => {
          console.error('Error deleting Registration', err);
        }
      });
    }
  }


  updatedeleteRegistration(id: string) {
    this.router.navigate(['/update', id]);
  }

}