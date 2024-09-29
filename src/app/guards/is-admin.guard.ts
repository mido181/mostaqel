import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';

enum UserType {guest = "guest", freelancer = "freelancer", client= "client" }

@Injectable({
  providedIn: 'root'
})
export class IsAllowGuard implements CanActivate {

  userRole:string = '';
  expectedRoles!:string[];
  constructor( private isAllow:AuthService, private router:Router ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Observable<boolean>((observer)=>{
        this.userRole =  this.isAllow.userExist$.getValue();
        this.expectedRoles = route.data['role'];
        const hasRole: boolean = this.expectedRoles.some((role) => this.userRole == role);
        console.log(hasRole);
        hasRole == false ? this.router.navigateByUrl('home') : true;
        observer.next(hasRole);
        
      })

      }
  
}
