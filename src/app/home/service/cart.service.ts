import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

import { cartItem } from '../model/cartItem'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _messageSource = new BehaviorSubject<number>(0);
  currentValue = this._messageSource.asObservable();

  constructor(private http: HttpClient) {
  }

  changeCurrentValue(newValue: number) {
    this._messageSource.next(newValue);
  }

  addToCart(productId: number) {
    console.log(localStorage.getItem("cartId"));
    this.http.post<any>(
      "http://localhost:8080/add-to-cart",
      {
        "cartId" : Number(localStorage.getItem("cartId")),
        "productId" : productId
      }).subscribe(data => console.log(data));
  }

  getAllProduct(): Observable<cartItem[]> {
    return this.http.get<cartItem[]>("http://localhost:8080/cart-details/"+localStorage.getItem("userId"));
  }

  increaseProductQuantity(productId: number) {
    this.http.post<any>(
      "http://localhost:8080/manage-quantity",
      {
        "cartId" : Number(localStorage.getItem("cartId")),
        "incrementValue" : 1,
        "productId": productId
      }
    ).subscribe(data => console.log(data))
  }

  decreaseProductQuantity(productId: number) {
    this.http.post<any>(
      "http://localhost:8080/manage-quantity",
      {
        "cartId" : Number(localStorage.getItem("cartId")),
        "incrementValue" : -1,
        "productId": productId
      }
    ).subscribe(data => console.log(data))
  }

  deleteFromCart(productId: number) {
    this.http.post<any>(
      "http://localhost:8080/remove-from-cart",
      {
        "cartId" : Number(localStorage.getItem("cartId")),
        "productId" : productId
      }
    ).subscribe(data => console.log(data))
  }

  getTotalNumberOfItemsInCart(cartId: number): Observable<any>{
    return this.http.get("http://localhost:8080/total-item-in-cart/"+cartId);
  }
}