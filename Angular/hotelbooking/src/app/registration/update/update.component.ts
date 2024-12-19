import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from '../../model/regist.model';
import { RegistService } from '../../service/regist.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  registration: RegistrationModel = new RegistrationModel();
  id: string = '';
  imageFile?: File; // To store selected image file

  constructor(
    private registService: RegistService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.registService.getRegistrationById(this.id).subscribe({
      next: (res) => {
        this.registration = res;
      },
      error: (err) => {
        console.error('Error fetching Registration by ID:', err);
      }
    });
  }

  updateRegistration() {
    this.registService.updateRegistration(this.id, this.registration, this.imageFile).subscribe({
      next: () => {
        alert('Registration updated successfully!');
        this.router.navigate(['/location']);
      },
      error: (err) => {
        console.error('Error updating Registration:', err);
        alert('Failed to update Registration. Please try again.');
      }
    });
  }
}
