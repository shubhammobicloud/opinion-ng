import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  constructor(private fb:FormBuilder, private auth: AuthService, private router:Router) {}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }
  onSubmit(){
    let user = this.loginForm.value
    this.auth.login(user).subscribe(
      (res:any)=>{
        console.log('success', res);
        alert(res.message);
        this.router.navigate(['/home/dashboard'])
      },
      (error:HttpErrorResponse)=>{
        console.error('Error:', error);
        alert(error.error.message);
      }
    )
  }
}
