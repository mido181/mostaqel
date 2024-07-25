import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from './service/auth/auth.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mostaqel';
  constructor(){}
ngOnInit(){
   }

}
