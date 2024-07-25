import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css'],
})
export class AddWorkComponent implements OnInit {
  addWorkForm!: FormGroup;
  skillsArr: string[] = [];
  collection: string[] = [];
  spcialist: string = '';
  allval: string = '';
  main: any = '';
  pic: any = '';

  constructor(private FB: FormBuilder) {}
  ngOnInit(){
    this.addWorkForm = this.FB.group({
      title: [''],
      mainPic: [''],
      details: [''],
      picCollection: [''],
      link: [''],
      timing: [''],
      skills: [''],
    });
  }

  skills(skills: any) {
    let skill = skills.target.value;
    this.skillsArr.push(skill);
  }

  deleteSkill(num: number) {
    this.skillsArr.splice(num,1);
  }

  uploadMain(img: any) {
    this.main = img.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.main);
    reader.onload = () => {
      this.main = reader.result;
    };
  }
  uploadCollection(img: any) {
    this.pic = img.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.pic);
    reader.onload = () => {
      this.pic = reader.result;
      this.collection.push(this.pic);
    };
  }

  submit() {
    this.addWorkForm.controls['mainPic'].setValue(this.main);
    this.addWorkForm.controls[' picCollection'].setValue(this.collection);
    console.log(this.addWorkForm.value);
  }
 
}
