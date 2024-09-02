import {
  Component,
  OnInit,
HostListener
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ToasterService } from 'src/app/service/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup ;
  constructor(
    private FB: FormBuilder,
    private auth: AuthService,
    private toaster:ToasterService
  ) {}

  

  ngOnInit(): void {
    this.loginForm = this.FB.group({
      email: ['',],
      password: ['',], 
    });
};
    
  login() {
    console.log(this.loginForm);
    this.auth.login()
    this.auth.iconState$.next(true);  
    this.toaster.succsessMsg('تم تسجيل الدخول بنجاح ')
  }




  get email(){
    return this.loginForm.get('email')
  }
  get password(){
    return this.loginForm.get('password')
  }

  
}