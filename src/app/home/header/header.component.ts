import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: Boolean = false;

  constructor(private router: Router) { 
    if(localStorage.getItem("jwttoken")) {
      this.isLoggedIn = true;
    }
  }

  ngOnInit(): void {
  }

  logout() {
    console.log("LOGGING OUT");
    console.log("JWT TOKEN: "+ localStorage.getItem("jwttoken"));
    localStorage.clear();
    console.log("JWT TOKEN: "+ localStorage.getItem("jwttoken"));
    this.router.navigate(["\logout"]);
  }

}
