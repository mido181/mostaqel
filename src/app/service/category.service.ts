import { Injectable, OnDestroy } from '@angular/core';
import{ActivatedRoute} from '@angular/router'
import { Observable, Subject, takeUntil } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService  {
  constructor(private route:ActivatedRoute) {    
  }

  getQueryParam(quaryName?:string){
   return this.route.queryParamMap.subscribe(res=> console.log(res.get(quaryName!)));
  
  }

  getQueryParams(quaryName?:string){
    return this.route.queryParamMap.subscribe(res=> console.log(res.getAll(quaryName!)));
   
   }

}
