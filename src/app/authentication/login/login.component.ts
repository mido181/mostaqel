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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup ;
  constructor(
    private FB: FormBuilder,
    private route: Router,
    private auth: AuthService
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
  }




  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }


}