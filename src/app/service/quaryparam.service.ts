import { Injectable } from '@angular/core';
import { QueryParamsHandling, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuaryparamService {

  constructor(private router:Router) {}

    quaryParam(routeName:string,quaryVal:string,quaryParamType?:QueryParamsHandling){
      this.router.navigate([routeName],{
        queryParams:{filterWith:quaryVal},
        queryParamsHandling:quaryParamType
      })
   }
}
