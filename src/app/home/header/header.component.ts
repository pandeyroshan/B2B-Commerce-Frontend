import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentValue: number;

  isLoggedIn: Boolean = false;

  constructor(
    private router: Router,
    private _cartService: CartService
  ) { 
    if(localStorage.getItem("jwttoken")) {
      this.isLoggedIn = true;
    }
  }

  ngOnInit(): void {
    this._cartService.getTotalNumberOfItemsInCart(Number(localStorage.getItem("cartId"))).subscribe(data => this.currentValue = data["totalNumberOfItemsInCart"])
    this._cartService.currentValue.subscribe(data => this.currentValue = data);
  }

  logout() {
    console.log("LOGGING OUT");
    console.log("JWT TOKEN: "+ localStorage.getItem("jwttoken"));
    localStorage.clear();
    console.log("JWT TOKEN: "+ localStorage.getItem("jwttoken"));
    this.router.navigate(["\logout"]);
  }

}
