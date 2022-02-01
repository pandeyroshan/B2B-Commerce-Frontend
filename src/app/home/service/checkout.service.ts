import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  placeOrder(cartId: number, addressId: number) {
    this.http.post<any>(
      "http://localhost:8080/place-order",
      {
        "cartId" : cartId,
        "addressId" : addressId
      }
    ).subscribe(data => console.log(data))
  }
}
