import { Component, OnInit } from '@angular/core';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems = [
    { id: 1, name: 'A', price: 10, quantity: 2, total_price: 20},
    { id: 2, name: 'B', price: 10, quantity: 1, total_price: 10},
    { id: 3, name: 'C', price: 10, quantity: 3, total_price: 30},
    { id: 4, name: 'D', price: 10, quantity: 5, total_price: 50}
  ];
  
  totalCartValue: number = 110;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  deleteFromCart(id: number) {
    let cartItemIndex: number = this.cartItems.findIndex((cartItem => cartItem.id == id));
    this.totalCartValue -= this.cartItems[cartItemIndex].total_price ;
    let itemName: string = this.cartItems[cartItemIndex].name;
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id != id);
    this._snackBar.open(itemName+" removed from cart ", "OK");
  }

  increaseQuantity(id: number) {
    let cartItemIndex: number = this.cartItems.findIndex((cartItem => cartItem.id == id));
    let perItemCost = this.cartItems[cartItemIndex].total_price/this.cartItems[cartItemIndex].quantity;
    this.cartItems[cartItemIndex].quantity += 1;
    this.cartItems[cartItemIndex].total_price += perItemCost;
    this.totalCartValue += perItemCost;
    this._snackBar.open("Quantity increased for that item", "OK");
  }

  decreaseQuantity(id: number) {
    let cartItemIndex: number = this.cartItems.findIndex((cartItem => cartItem.id == id));
    let perItemCost = this.cartItems[cartItemIndex].total_price/this.cartItems[cartItemIndex].quantity;
    this.cartItems[cartItemIndex].quantity -= 1;
    this.cartItems[cartItemIndex].total_price -= perItemCost;
    this.totalCartValue -= perItemCost;
    this._snackBar.open("Quantity decreased for that item", "OK");
  }

}
