import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  profileForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
    isRememberMe: new FormControl(false)
  });
  isRememberMe = false

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnChanges() {

  }

  changeFieldLogin($event: any) {

  }

  changeFieldPassword($event:any) {

  }

  changeRememberMe() {
    this.isRememberMe = !this.isRememberMe
  }
}
