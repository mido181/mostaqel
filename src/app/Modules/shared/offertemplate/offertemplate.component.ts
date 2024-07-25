import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offertemplate',
  templateUrl: './offertemplate.component.html',
  styleUrls: ['./offertemplate.component.css']
})
export class OffertemplateComponent implements OnInit {
  @Input()
  hrefLink:string ='/'
  @Input()
  haveBtn:boolean = true
  @Input()
  offerStatus!:number;
  constructor() { }

  
  ngOnInit(): void {
  }

}
