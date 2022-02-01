import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { cartItem } from '../model/cartItem'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addToCart(productId: number) {
    localStorage.setItem('cartId', "1");
    this.http.post<any>(
      "http://localhost:8080/add-to-cart",
      {
        "cartId" : Number(localStorage.getItem("cartId")),
        "productId" : productId
      }).subscribe(data => console.log(data));
  }

  getAllProduct(): Observable<cartItem[]> {
    localStorage.setItem('userId', "1");
    return this.http.get<cartItem[]>("http://localhost:8080/cart-details/"+localStorage.getItem("userId"));
  }

  increaseProductQuantity(productId: number) {
    localStorage.setItem("cartId", "1");
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
    localStorage.setItem("cartId", "1");
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
    localStorage.setItem("cartId", "1");
    this.http.post<any>(
      "http://localhost:8080/remove-from-cart",
      {
        "cartId" : Number(localStorage.getItem("cartId")),
        "productId" : productId
      }
    ).subscribe(data => console.log(data))
  }
}