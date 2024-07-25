import {
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  userData: any = {};
  projectbody: any = [];
  now: number = new Date().getMinutes();
  constructor(private projects: ProjectService,private route:ActivatedRoute) {
        // this.projects.getPosts().subscribe((res) => {
    //   this.projectbody = res;
    // });
  }
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(res =>{
      console.log( 'this message came from projectsComponent, containing all params from filter component' + res.getAll('filter'));
      
    })
    // this.userData = JSON.parse(localStorage.getItem('userDataFromregister')!);
  
  }
  
    projectId(id:number){
console.log(id);

    }
  

}
