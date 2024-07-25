import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment.prod';
import { Login } from '../../models/login';
import { Register } from '../../models/register';
import { BehaviorSubject, from } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit  {
  private URL: string = environment.baseUrl;

  iconState:BehaviorSubject<boolean> = new BehaviorSubject(false);

   constructor(private Http: HttpClient , private route:Router) {}  

ngOnInit(): void {}

  register(data: Register) {
    
    this.iconState.next(true);
    return this.Http.post<Register>(`${this.URL}/register`, data);
  }

  login() {
    // return this.Http.post<Login>(`${this.URL}/login`, data);
    this.iconState.next(true);
  }

  logout() { 
 localStorage.setItem('token', JSON.stringify("none"))
this.route.navigateByUrl('home')

}

  currentUser() {
    return this.Http.post(`${this.URL}/currentuser`, `${this.getToken}`);
  }
  get getToken() {
    // localStorage.setItem('token','freelancer')
    let json = JSON.parse(localStorage.getItem('token') as string );
    return json;
  }

}
