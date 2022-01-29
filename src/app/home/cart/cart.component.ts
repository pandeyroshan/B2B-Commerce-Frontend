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

  cartItems = [
    { id: 1, name: 'A', price: 10, quantity: 2, total_price: 20},
    { id: 2, name: 'B', price: 10, quantity: 1, total_price: 10},
    { id: 3, name: 'C', price: 10, quantity: 3, total_price: 30},
    { id: 4, name: 'D', price: 10, quantity: 5, total_price: 50}
  ];
  
  totalCartValue: number = 0;

  constructor(
    private _snackBar: MatSnackBar,
    private _cartService: CartService
    ) { }

  ngOnInit(): void {
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

    this.allCartItems = this.allCartItems.filter(cartItem => cartItem.id != id);
    this._snackBar.open(itemName+" removed from cart ", "OK");
  }

  increaseQuantity(id: number) {
    let cartItemIndex = this.allCartItems.findIndex((cartItem => cartItem.id == id));
    this.allCartItems[cartItemIndex].totalQuantity+=1;
    this.totalCartValue += this.allCartItems[cartItemIndex].product.price;
    this._snackBar.open("Quantity increased for that item", "OK");
  }

  decreaseQuantity(id: number) {
    let cartItemIndex = this.allCartItems.findIndex((cartItem => cartItem.id == id));
    this.allCartItems[cartItemIndex].totalQuantity-=1;
    this.totalCartValue -= this.allCartItems[cartItemIndex].product.price;
    this._snackBar.open("Quantity decreased for that item", "OK");
  }

}
