import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  getMyOrders(): Observable<any[]> {
    return this.http.post<any[]>(
      "http://localhost:8081/my-orders",
      {
        "businessId" : Number(localStorage.getItem("businessId"))
      }
      );
  }

  cancelOrder(orderId: number) {
    this.http.get<any>("http://localhost:8080/cancel-order/"+orderId).subscribe(
      data => console.log(data)
    );
  }

  getOrderDetailByOrderId(id: number): Observable<any[]> {
    return this.http.get<any[]>(
      "http://localhost:8080/order-details/"+id
    );
  }

  getPurchaseDetails(id: number): Observable<any[]>  {
    return this.http.get<any[]>(
      "http://localhost:8080/purchase-details/"+id
    );
  }
}
