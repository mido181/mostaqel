import {
  Component,
  OnInit,
} from '@angular/core';

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
  constructor(private projects: ProjectService) {
    this.projects.getPosts().subscribe((res) => {
      this.projectbody = res;
    });
  }
  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userDataFromregister')!);
  }
}
