import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ProjectService } from 'src/app/service/project.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css'],
})
export class AddprojectComponent implements OnInit {
  addProForm: FormGroup;
  vals: string[] = [];
  values: string = '';
  skillsArr: string[] = [];
  constructor(
    private FB: FormBuilder,
    private add: ProjectService,
    private http: HttpClient
  ) {
    this.addProForm = this.FB.group({
      title: '',
      details: '',
      skills: '',
      price: '',
      timing: '',
      date: '',
    });
  }

  timing() {
    let minute = new Date().getMinutes();
    this.addProForm.get(['date'])?.setValue(minute);
  }
  value(val: string) {
    this.vals.push(val);
    this.values = this.vals.join();
    console.log(this.values);
  }
  submit() {
    this.timing();
    let url = environment.baseUrl;
    this.addProForm.get(['skills'])?.setValue(this.values);
    this.http.post(url + 'addposts', this.addProForm.value).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {}
}
