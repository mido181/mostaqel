import { Component, HostListener, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../service/auth/auth.service';
import { BehaviorSubject, Observable, Observer, Subject, from, fromEvent, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  userType$:BehaviorSubject<string> = new BehaviorSubject('');
  namingChange$:BehaviorSubject<string> = new BehaviorSubject('');
  isFreelancer$:BehaviorSubject<boolean> = new BehaviorSubject(false);
  loginIcon$:BehaviorSubject<boolean> =  new BehaviorSubject(false);
  logoNavigation: string ='home';
  unsub$ = new Subject()
  constructor(private toastr: MatSnackBar , private auth:AuthService ) { 
    // this.toastr.open('hello', 'close', { duration: 3000 });
    }
  
  logout(){
    this.auth.logout();
  }
  
  ngOnInit(): void {
  
    // i have to do like this coz convention tranform it to just boolean
   this.auth.userExist$.asObservable().subscribe(res=>this.isFreelancer$.next(!!res))
    this.auth.userExist$.asObservable().subscribe(res=>this.loginIcon$.next(!!res))

    this.auth.userExist$.pipe(
      takeUntil(this.unsub$),tap((val)=>{
      if ( val === 'freelancer' || val == 'client'){    
        this.logoNavigation = 'profile';        

        if ( val === 'freelancer') {
          this.namingChange$.next('أعمالي')
          this.isFreelancer$.next(true);   
        }   
        if (val == 'client') {
          this.namingChange$.next('مشاريعي')
          this.isFreelancer$.next(false);   
          
        }
      }
      if (this.auth.userExist$.getValue()){
        this.logoNavigation = 'home';
      }  
      
    })).subscribe()
  }



  






OnDestroy(){
  this.unsub$.next(false)
  this.unsub$.unsubscribe()
}









}

