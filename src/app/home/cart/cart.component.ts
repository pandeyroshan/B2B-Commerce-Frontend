import { Component, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';
import { cartItem } from '../model/cartItem';

import {CartService} from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  
  allCartItems: any[];
  
  totalCartValue: number = 0;

  constructor(
    private _snackBar: MatSnackBar,
    private _cartService: CartService
    ) { }

  ngOnInit(): void {
    console.log(localStorage);
    this._cartService.getAllProduct().subscribe(data => {
      this.allCartItems = data;

      for(let cartItem of data) {
        this.totalCartValue += cartItem.product.price * cartItem.totalQuantity;
      }
    });
  }

  deleteFromCart(id: number) {
    let cartItemIndex = this.allCartItems.findIndex((cartItem => cartItem.id == id));
    this.totalCartValue -= this.allCartItems[cartItemIndex].product.price * this.allCartItems[cartItemIndex].totalQuantity;
    let itemName = this.allCartItems[cartItemIndex].product.name;
    
    this._cartService.deleteFromCart(this.allCartItems[cartItemIndex].product.id);

    this.allCartItems = this.allCartItems.filter(cartItem => cartItem.id != id);
    this._snackBar.open(itemName+" removed from cart ", "OK");
  }

  increaseQuantity(id: number) {
    let cartItemIndex = this.allCartItems.findIndex((cartItem => cartItem.id == id));
    this.allCartItems[cartItemIndex].totalQuantity+=1;
    this.totalCartValue += this.allCartItems[cartItemIndex].product.price;
    this._snackBar.open("Quantity increased for that item", "OK");
    this._cartService.increaseProductQuantity(this.allCartItems[cartItemIndex].product.id)
  }

  decreaseQuantity(id: number) {
    let cartItemIndex = this.allCartItems.findIndex((cartItem => cartItem.id == id));
    this.allCartItems[cartItemIndex].totalQuantity-=1;
    this.totalCartValue -= this.allCartItems[cartItemIndex].product.price;
    this._snackBar.open("Quantity decreased for that item", "OK");
    this._cartService.decreaseProductQuantity(this.allCartItems[cartItemIndex].product.id)
  }

}
