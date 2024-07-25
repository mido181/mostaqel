import {
  Component,
  OnInit,
} from '@angular/core';

import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-addporpsel',
  templateUrl: './addporposel.component.html',
  styleUrls: ['./addporpsel.component.css'],
})
export class AddporposelComponent implements OnInit {
  projectbody: any = [];
  skillsArr: string[] = [];
  userData: any = {};
  now: number = new Date().getMinutes();
  constructor(private getProject: ProjectService) {
    this.getProject.getPosts().subscribe((data: any) => {
      console.log((this.projectbody = data));
      this.trim();
    });
  }

  trim() {
    this.skillsArr = this.projectbody[0].skills.split(',');
  }
  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userDataFromregister')!);
  }
}
