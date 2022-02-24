import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  redirectToAdminPanel(){
    this._router.navigate(["admin"]);
  }

  logout() {
    console.log("LOGGING OUT");
    console.log("JWT TOKEN: "+ localStorage.getItem("jwttoken"));
    localStorage.clear();
    console.log("JWT TOKEN: "+ localStorage.getItem("jwttoken"));
    this._router.navigate(["\logout"]);
  }
}
