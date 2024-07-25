import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 constructor( private auth:AuthService , private route:Router ){
 }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Observable<boolean>((observer)=>{
        if (this.auth.userExist$.getValue() == 'freelancer' || this.auth.userExist$.getValue() == 'client' ) {
          observer.next(false)
          this.route.navigateByUrl('profile')
        }
        if (this.auth.userExist$.getValue() == null) {
          observer.next(true)  
        }
        observer.next(true)

    })
      
  }
  
}
