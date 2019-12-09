import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthUserService} from '../auth-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      passkey: ['', Validators.required]
    });
  }
  
  loginForm: FormGroup;
  private  formSubmitAttempt: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router, private authUserService: AuthUserService) {
    this.createLoginForm();
  }

  ngOnInit() {
  }

  login(): void{
    if(this.loginForm.dirty && this.loginForm.valid){
      this.authUserService.login(this.loginForm.value);
      this.formSubmitAttempt = true;
      let _user = this.loginForm.value.username;
      let _pass = this.loginForm.value.passkey;
      console.log("Inside login() with username: "+ _user + " and passkey: "+_pass);
    /*if(_user == 'admin' && _pass == 'admin'){
      this.router.navigate(['dashboard']);
    }else{
      alert('Invalid Credentials!!')
    }*/
    }
    
  }

  gotoSignUp(){
    this.router.navigate(['sign-up']);
  }

}
