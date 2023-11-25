import { Component, untracked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../Models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  uname : unknown = "";
  pass : unknown = "";
  loginForm = new FormGroup({
    username : new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    password : new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  constructor(private router : Router) {
    this.loginForm.valueChanges.subscribe(v => console.log(v));
  }
  userLogin()
  {
    if(this.loginForm.invalid)
    {
      console.log("inavalid form");
      
    } else {
      console.log(JSON.stringify(this.loginForm.value));
      this.uname = this.loginForm.get('username')?.value;
      localStorage.setItem('auth',"chetan");
      this.router.navigate(['/home']);
    }
  }

  

}
