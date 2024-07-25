import { AbstractControl , ValidatorFn } from "@angular/forms";



export class skillsValidator {

    constructor(){}
    
    static minValdiator():ValidatorFn{
  return (control:AbstractControl): null | {[key:string]:boolean} =>  {

     return control.value.length < 3 ? {'minSkills':true} : null
            }
            

        }
        
    }

