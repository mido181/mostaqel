import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  editForm: FormGroup;
  spcialist: string = '';
  values: string[] = [];
  allval: string = '';
  skills(skill: string) {
    this.values.push(skill);
    this.allval = this.values.join('-');
  }
  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      spcialist: `${this.spcialist}`,
      name: '',
      info: '',
      skills: '',
    });
  }

  submit() {
    this.editForm.controls['skills'].setValue(this.allval);
    console.log(this.editForm.value);
    console.log(this.allval);
  }

  ngOnInit(): void {}
}
function skills(skill: any, string: any) {
  throw new Error('Function not implemented.');
}
