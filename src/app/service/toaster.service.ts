import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private snackbar:MatSnackBar) {}


  succsessMsg(title:string){
    this.snackbar.open(title,'x',{
      duration:3000,
      panelClass: ['green-snackbar', 'login-snackbar'],
      verticalPosition:'top'

    })
  }
  
  failureMsg(title:string){
    this.snackbar.open(title,'x',{
      duration:3000,
      panelClass:['red-snakebar','login-snackbar'],
      verticalPosition:'top'

    })
  }

}
