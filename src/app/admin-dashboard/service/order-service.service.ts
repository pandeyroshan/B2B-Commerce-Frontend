import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private baseUrl = "localhost:8080";
  
  constructor(
    private http: HttpClient
  ) { }

  getAllOrders(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8080/all-orders");
  }

  updateOrderSummary(orderId: number, orderStatus: string) {
    this.http.post("http://localhost:8080/update-order-status", {
      "orderId" : orderId,
      "orderStatus" : orderStatus
    }).subscribe(
      data => console.log(data)
    );
  }
}
