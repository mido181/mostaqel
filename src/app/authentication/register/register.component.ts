import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../service/auth/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  private _baseUrl: string = environment.baseUrl;

  registerForm: FormGroup;
  typeofuser: string = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private Http: HttpClient
  ) {
    this.registerForm = this.fb.group({
      firstname: [''],
      lastname: '',
      email: '',
      password: '',
      country: '',
      typeofuser: '',
      brithday: '',
    });
  }
  ngOnInit(): void {}

  value(value: string) {
    this.typeofuser = value;
    this.registerForm.controls['typeofuser'].setValue(this.typeofuser);
  }

  register() {
    console.log(this.registerForm);
    // this.Http.post(`${this.URL}/register`, this.registerForm.value).subscribe(
    //   (data) => {
    //     localStorage.setItem('token', JSON.stringify(data));
    //     this.router.navigateByUrl('myprojects/editProfile');
    //   }
    // );
  }
}
