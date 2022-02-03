import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private _authenticationService: AuthenticationService,
    private router: Router
  ) { }

  loginForm = this.formBuilder.group({
    username: [''],
    password: ['']
  })

  role: any;

  jwtToken: any;
  businessDetails: any;

  ngOnInit(): void {
  }

  login() {
    if(this.loginForm.value["username"] && this.loginForm.value["password"]) {
      try{
        this._authenticationService.login(
          this.loginForm.value["username"], 
          this.loginForm.value["password"]).subscribe(
            data => {
              this.jwtToken = data;

              localStorage.setItem("jwttoken", this.jwtToken["jwttoken"]);

              this._snackBar.open("Successfully logged in as "+this.loginForm.value["username"], "OK");

              this._authenticationService.getRole().subscribe(
                data => {
                  this.role = data;
                  localStorage.setItem("role", this.role["name"]);
                }
              );

              this._authenticationService.getBusinessDetails().subscribe(
                data => {
                  this.businessDetails = data;
                  localStorage.setItem("businessId", this.businessDetails["businessId"]);
                  localStorage.setItem("cartId", this.businessDetails["cartId"]);
                  localStorage.setItem("userId", this.businessDetails["userId"]);
                }, error => {
                  this._snackBar.open("ADMIN LOGIN", "OK");
                  this.router.navigate(["logout"]);
                }
              )
              console.log(localStorage);
              this.router.navigate([""])
            }, error => {
              this._snackBar.open("BAD CREDENTIAL", "OK");
            }
        );
      } catch(e) {
        console.log("BAD CREDENTIALS");
      }
    } else {
      this._snackBar.open("Provide the username, password", "OK");
    }
  }

}
