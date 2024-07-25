import { Component, HostListener, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../service/auth/auth.service';
import { BehaviorSubject, Observer, Subject, from, fromEvent } from 'rxjs';
import { IsAllowGuard } from 'src/app/guards/is-admin.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  userType : BehaviorSubject<string> = new BehaviorSubject<string>('');
  userStatus: string = '';
  showIcons!:boolean;
  authTerm: string = '';
  customizingNamingField:string = "أعمالي" ;
  
  constructor(private toastr: MatSnackBar , private auth:AuthService ) { 
    // this.toastr.open('hello', 'close', { duration: 3000 });
    }
  
  logout(){
    this.auth.logout();
    this.showIcons = false; 
    }

  ngOnInit(): void {
    
    this.userType.next(this.auth.getToken);
    this.userType.subscribe(IsAuth => this.userStatus = IsAuth);
    console.log(this.userStatus);
    
   this.auth.iconState.subscribe(val=> this.showIcons = val)

  if ( this.userStatus == 'freelancer' || this.userStatus == 'client' ) {
   this.auth.iconState.next(true)     
    this.authTerm = 'profile';
      }
      if( this.userStatus == 'client'){
  this.customizingNamingField = "مشاريعي"; 
    }
    if (!localStorage.getItem) {
    this.authTerm = 'home';
      
    }


  }


}

