import {
  Component,
  OnInit,
} from '@angular/core';

import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  userdata: any = {};
  constructor(private userData: AuthService) {
    // this.userData.currentUser().subscribe((data) => {
    //   this.userdata = data;
    // });
  }
  ngOnInit(): void {}
}
