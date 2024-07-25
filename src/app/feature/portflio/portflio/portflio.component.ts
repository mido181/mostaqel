import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RegisterResolverService } from 'src/app/guards/register-resolver.service';

@Component({
  selector: 'app-portflio',
  templateUrl: './portflio.component.html',
  styleUrls: ['./portflio.component.css'],
})
export class PortflioComponent implements OnInit {
  userinfo: any = {};
  constructor(
    private userData: RegisterResolverService,
    private next: ActivatedRoute
  ) {}
  ngOnInit(): void {
    console.log(this.next);

    this.next.data.subscribe((data: any) => {
      this.userinfo = data;
      console.log(this.userinfo);
    });
  }
}
