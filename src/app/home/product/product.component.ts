import { Component, Input, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import {CartService} from '../service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  
  currentValue: number;

  @Input() product: any;

  constructor(
    private _snackBar: MatSnackBar,
    private _cartService: CartService
    ) { }

  ngOnInit(): void {
    this._cartService.getTotalNumberOfItemsInCart(Number(localStorage.getItem("cartId"))).subscribe(data => this.currentValue = data["totalNumberOfItemsInCart"])
    this._cartService.currentValue.subscribe(data => this.currentValue = data);
  }

  addToCart(productId: number) {
    if(document.getElementById("addToCartIcon"+productId).innerHTML === "check_circle") {
      this._snackBar.open(this.product.name+" is already added in cart", "OK");
    } else { 
      this._cartService.addToCart(productId);
      this._cartService.changeCurrentValue(this.currentValue+1);
      document.getElementById("addToCartIcon"+productId).innerHTML = "check_circle";
      this._snackBar.open(this.product.name+" added in the cart", "OK");
    }
  }


}
