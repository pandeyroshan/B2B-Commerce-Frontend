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

  jwtToken: any;

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

              console.log(this.jwtToken["jwttoken"]);
              localStorage.setItem("jwttoken", this.jwtToken["jwttoken"]);

              this._snackBar.open("Successfully logged in as "+this.loginForm.value["username"], "OK");

              this._authenticationService.getRole().subscribe(
                data => {
                  console.log(data["name"]);
                }
              );
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
