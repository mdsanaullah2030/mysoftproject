import { Component, OnInit } from '@angular/core';
import { RegistrationModel } from '../../model/regist.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegistService } from '../../service/regist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrl: './save.component.css'
})
export class SaveComponent implements OnInit {



  registration: RegistrationModel = new RegistrationModel();
  formGroup!: FormGroup;
  registrations: any[] = [];
  filteredregistrations: any[] = [];

  constructor(
    private registService: RegistService,
    private formBuilder: FormBuilder,
    private router: Router,
    
  ) {
  }

  ngOnInit(): void {
    this.loadRegistration();

    this.formGroup = this.formBuilder.group({
      name: [''],
      presentAddress: [''],
      permanentAddress: [''],
      gender: [''],
      age: [new Date().toISOString().split('T')[0]],
      cellNo: ['']
    });
  }



  onSubmit() {
    this.registration = this.formGroup.value;
    this.registration.age = new Date(this.formGroup.value.age); 
    console.log(this.registration);
  
    this.registService.createRegistration(this.registration).subscribe({
      next: () => {
        alert('Registration created successfully!');
        this.router.navigate(['/location']);
      },
      error: (err) => {
        console.error('Error creating Registration', err);
        alert('Failed to create Registration. Please try again.');
      }
    });
  }
  




  loadRegistration() {
    this.registService.getAllRegistration().subscribe({
      next: (data) => {
        this.registrations = data;
        this.filteredregistrations = [...this.registrations]; 
      },
      error: (err) => {
        console.error('Error loading Registrations', err);
      }
    });
  }


}
