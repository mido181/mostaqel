import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DashboardGuardService {
  constructor(private route: Router) {}
  // canActivate(): boolean {
  //   // if (!localStorage.getItem('token')) {
  //   //   this.route.navigateByUrl('home');
  //   //   console.log('inguard');
  //   //   return false;
  //   // } else {
  //   //   return true;
  //   // }
  // }
}
