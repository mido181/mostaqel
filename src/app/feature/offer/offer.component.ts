import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
status:string[] = [] ;
  constructor( private router:Router) { }

  ngOnInit(): void {}

projectStatus(e:Event){
  let ele = (e.target as HTMLInputElement);
  let value =  ele.value;
  this.status[0] = value;
  this.router.navigate(['offer'],{queryParams:{status:this.status}})
}


}
