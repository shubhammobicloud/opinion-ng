import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router:Router) {}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [''],
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    let formValue = this.registerForm.value;
    console.log(formValue);
    this.auth.createUser(formValue).subscribe(
      (res: any) => {
        console.log('success', res);
        alert(res.message);
        this.router.navigate(['auth/login'])
      },
      (error: HttpErrorResponse) => {
        console.error('Error:', error);
        alert(error.error.message);
      }
    );
  }
}
