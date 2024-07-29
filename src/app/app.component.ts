import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './service/auth/auth.service';
import { takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit ,OnDestroy {

  title = 'mostaqel';
  userType$:BehaviorSubject<string> = new BehaviorSubject('');
  namingChange$:BehaviorSubject<string> = new BehaviorSubject('');
  isFreelancer$:BehaviorSubject<boolean> = new BehaviorSubject(false);
  loginIcon$:BehaviorSubject<boolean> =  new BehaviorSubject(false);
  logoNavigation: string ='home';
  show = false
  unsub$ = new Subject()
  constructor(private toastr: MatSnackBar , private auth:AuthService ) { 
    // this.toastr.open('hello', 'close', { duration: 3000 });
    }

    ngOnInit(): void {   
      this.auth.getToken()
      this.auth.currentUser()
     this.auth.userExist$.subscribe()  
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
  logout(){
    this.auth.logout();
  }
  

  
  sidebar(show:any){
    this.show = show  
  }  

  hideSidebar(){
    this.show = !this.show
  }



  ngOnDestroy(){
    this.unsub$.next(false)
    this.unsub$.unsubscribe()
  }
  







   }


