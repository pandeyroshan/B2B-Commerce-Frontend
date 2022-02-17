import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8080/admin-all-products")
  }

  toggleProductActiveStatus(productId: number, newStatus: boolean) : Observable<any> {
    return this.http.post<any>("http://localhost:8080/change-visibilty", {
      "productId" : productId,
      "status" : newStatus
    });
  }
}
