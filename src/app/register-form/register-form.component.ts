import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  auth : unknown = null;
   validation = [Validators.required,Validators.minLength(6)]
   emailvalidation = [Validators.required,Validators.minLength(6),Validators.email]
   registerForm = new FormGroup({
    fullname : new FormControl('',this.validation),
    email : new FormControl('',this.emailvalidation),
    username : new FormControl('',this.validation),
    password : new FormControl('',this.validation)
  })

  constructor(private router : Router)
  {
    this.auth = localStorage.getItem('auth');
    if(this.auth)
    {
      this.router.navigate(['/home']);
    }
  }

  userRegistration() {
    if(this.registerForm.invalid)
    {
      console.log("form not valid");
    }else{
      console.log(JSON.stringify(this.registerForm.value));
    }
  }
}
