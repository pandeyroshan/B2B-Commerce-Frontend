import { Component, Input, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import {CartService} from '../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: any;

  constructor(
    private _snackBar: MatSnackBar,
    private _cartService: CartService
    ) { }

  ngOnInit(): void {
  }

  addToCart(productId: number) {
    if(document.getElementById("addToCartIcon"+productId).innerHTML === "check_circle") {
      this._snackBar.open(this.product.name+" is already added in cart", "OK");
    } else { 
      this._cartService.addToCart(productId);
      document.getElementById("addToCartIcon"+productId).innerHTML = "check_circle";
      this._snackBar.open(this.product.name+" added in the cart", "OK");
    }
  }


}
