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
import { fromEvent } from 'rxjs';

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
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.FB.group({
      email: [],
      password: [], 
    });

    
  }
  login() {
   let randomNumber = Math.floor((Math.random()*2));
   let userType = ['client','freelancer'];
   let randomUser = userType[randomNumber];
   localStorage.setItem('token', JSON.stringify(randomUser));
   let roleType = JSON.parse(localStorage.getItem('token') as string);
this.auth.login()
   switch (roleType) {
  case "client" : 
     this.route.navigateByUrl('dashboard')   
     break;    
    case "freelancer" : 
    this.route.navigateByUrl('dashboard')   
   break;

   default: 
   this.route.navigateByUrl('home')
    break;
 }
  }
}
