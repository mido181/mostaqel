import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
    constructor( private auth:AuthService, private route:Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if ( this.auth.getToken == 'client' || this.auth.getToken == 'freelancer') {
     this.route.navigateByUrl('profile')
     return false
     
    } if(this.auth.getToken == 'none'){
      return true;
   }
  
  return false
}
}