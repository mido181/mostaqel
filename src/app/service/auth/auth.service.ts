import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Register } from '../../models/register';
import { BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit  {

  private URL: string = environment.baseUrl;
  namingChange$!:BehaviorSubject<string>;
  iconState$:BehaviorSubject<boolean> = new BehaviorSubject(false);
  userExist$: BehaviorSubject<string> = new BehaviorSubject('');
  displayIcons$:BehaviorSubject<boolean> = new BehaviorSubject(false);
  spcialIcons$:BehaviorSubject<boolean> = new BehaviorSubject(false);
  logoNavigation!: string;
   constructor(private Http: HttpClient , private route:Router) {}  

ngOnInit(): void {}

 createUser(){
  let randomNumber = Math.floor((Math.random()*2));
  let userType = ['client','freelancer'];
  let randomUser = userType[randomNumber];
  localStorage.setItem('userType',randomUser)
  localStorage.setItem('token',randomUser);
  this.userExist$.next(randomUser)
}

  register(data: Register) {
    //   return this.Http.post<Register>(`${this.URL}/register`, data);
    this.iconState$.next(true);
   }

  login() {
    // return this.Http.post<Login>(`${this.URL}/login`, data);
    this.createUser();
   this.route.navigateByUrl('profile');
  } 
   

  logout() { 
  localStorage.clear()
  this.route.navigateByUrl('home');
  localStorage.setItem('userType','')
  this.userExist$.next('')

}

 getToken() {
  //simulation for login in form server
  let isLogin = localStorage.getItem('token')
  this.userExist$.next(isLogin!)
}


currentUser() {
  //simulation for checking of user
  let type = localStorage.getItem('userType')
   !!type ? localStorage.setItem('token',type) : localStorage.setItem('token','') 
  localStorage.setItem('token',type!)
  this.userExist$.next(type!)
  // return this.Http.post(`${this.URL}/currentuser`, `${this.getToken}`);
}


}