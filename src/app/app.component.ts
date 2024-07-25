import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from './service/auth/auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mostaqel';
  constructor(private auth:AuthService){}
ngOnInit(){
  this.auth.getToken()
  this.auth.currentUser()
 this.auth.userExist$.subscribe(res=>{
  console.log(res);
 })
}

   }


