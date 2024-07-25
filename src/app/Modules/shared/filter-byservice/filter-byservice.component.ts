import {  Component,  OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';

interface quaryList {
  name:string
  value:string
}
@Component({
  selector: 'app-filter-byservice',
  templateUrl: './filter-byservice.component.html',
  styleUrls: ['./filter-byservice.component.css']
})

export class FilterByserviceComponent {
  constructor(private router:Router) {}
  @Input()
  typeName!:('radio'|'checkbox');
  @Input()
  quarylist!:quaryList[];
  @Input()
  routeName!:string;
  
  addfilter(e:Event){
    let ele = (e.target as HTMLInputElement)
    let value = ele.value
    this.router.navigate([this.routeName],
      {
      queryParams:{filterBy:value},
      queryParamsHandling:'merge'
      })
} 
}
