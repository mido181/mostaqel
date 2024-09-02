import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';
import { CategoryService } from '../../../service/category.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  namingUser:string = 'مشروع مماثل';
  IsTherePorposel = [1,2] 
  userData: any = {};
  projectbody: any = [];
  now: number = new Date().getMinutes();
  constructor(
    private route:ActivatedRoute,private auth:AuthService,private category:CategoryService ) {
        // this.projects.getPosts().subscribe((res) => {
    //   this.projectbody = res;
    // });
    // console.log();
    
  }


  ngOnInit(): void {
    switch (this.auth.userExist$.getValue()) {
      case 'freelancer':
        if (this.IsTherePorposel.length > 0) {
          this.namingUser = 'أضافه عرض'
        }else{
          this.namingUser = 'أضافه أول عرض'
        }
        break;
        case 'client':
          this.namingUser = 'مشروع مماثل'
          break;
      default:
        break;
    }
   
  this.category.getQueryParam('filterBy')
  // this.userData = JSON.parse(localStorage.getItem('userDataFromregister')!);
  }
  
  projectId(id:number){
    console.log(id);

    }
  

}
