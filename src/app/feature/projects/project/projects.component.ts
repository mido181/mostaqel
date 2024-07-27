import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

import { ProjectService } from 'src/app/service/project.service';

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
  constructor(private projects: ProjectService,private route:ActivatedRoute, private auth:AuthService ) {
        // this.projects.getPosts().subscribe((res) => {
    //   this.projectbody = res;
    // });
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
    
    this.route.queryParamMap.subscribe(res =>{
      console.log( 'this message came from projectsComponent, contain all params from filter component' + res.getAll('filter'));
      
    })
    // this.userData = JSON.parse(localStorage.getItem('userDataFromregister')!);
  
  }
  
    projectId(id:number){
console.log(id);

    }
  

}
