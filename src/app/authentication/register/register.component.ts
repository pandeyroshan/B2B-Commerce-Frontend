import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private _snackbar: MatSnackBar,
    private router: Router,
    private _authenticationService: AuthenticationService
  ) { }

  registerForm = this.formBuilder.group({
    businessRegistrationNumber: [''],
    username: [''],
    email: [''],
    password: ['']
  })

  ngOnInit(): void {
  }

  register(){
    console.log("REGISTER FUNCTION")
    this._authenticationService.register(
      this.registerForm.value["businessRegistrationNumber"],
      this.registerForm.value["username"],
      this.registerForm.value["email"],
      this.registerForm.value["password"]
    );

    this.router.navigate(["login"]);
  }

}
