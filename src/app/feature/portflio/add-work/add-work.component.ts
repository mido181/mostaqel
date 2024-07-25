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
  spcialist: string = '';
  allval: string = '';
  values: string[] = [];
  addWorkForm: FormGroup;
  main: any = '';
  pic: any = '';
  collection: string[] = [];

  constructor(private FB: FormBuilder) {
    this.addWorkForm = FB.group({
      title: [''],
      mainPic: [''],
      details: [''],
      picCollection: [''],
      link: [''],
      timing: [''],
      skills: [''],
    });
  }
  skills(skill: string) {
    this.values.push(skill);
    this.allval = this.values.join('-');
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
  ngOnInit(): void {}
}
