import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProjectService } from 'src/app/service/project.service';
import { skillsValidator } from 'src/app/validators/skillsValidator';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css'],
})
export class AddprojectComponent implements OnInit {
  addProject!: FormGroup;
  skills: string[] = [] 
  constructor(private FB: FormBuilder) {}
  
  ngOnInit(): void {
    this.addProject = this.FB.group({
      title: ['',[Validators.required,Validators.minLength(10)],],
      desc: ['',[Validators.required,Validators.minLength(50)],],
      skill: [[''],[Validators.required , skillsValidator.minValdiator()],],
      price: ['',[Validators.required,Validators.min(10),Validators.max(5000)]],
      duration: ['',[Validators.required],],
      date: [new Date(),[Validators.required],],
    });
  
  }
  
  
  selectedSkills(skill: any) {
    this.skills.push(skill.target.value);
    this.addProject.get('skill')?.setValue(this.skills) 
  }

  deleteSkill(val:number){
  this.skills.splice(val , 1);
  this.addProject.get('skill')?.setValue(this.skills)
  }


  submit() {
    // this.date();
    // console.log(this.addProject.value); 
    // let url = environment.baseUrl;
    // this.http.post(url + 'addposts', this.addProject.value).subscribe((res) => {
    //   console.log(res);
    // });
  }

  // cho(){
  // console.log(this.price?.errors);

// }
// date() {
  //   let minute = new Date().getMinutes();
  //   this.addProject.get(['date'])?.setValue(minute);
    // }
  

    get title(){  return this.addProject.get('title')}
    get details(){ return this.addProject.get('desc')}
    get price(){  return this.addProject.get('price')}
    get skill(){ return  this.addProject.get('skill')}  
    get duration(){ return  this.addProject.get('duration')}  
    


}
