import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService { 
  
  private baseUrl = "localhost:8080";
  
  constructor(
    private http: HttpClient
  ) { }

  postProduct(data : any){
    return this.http.post<any>("http://localhost:8080/create-product/", data);
  }


  putProduct(data : any){
    return this.http.put<any>("http://localhost:8080/product/", data);
  }

  deleteProduct(id :number) {
    return this.http.delete<any>("http://localhost:8080/product/"+id);
  }

  getAllProducts() {
    return this.http.get<any[]>("http://localhost:8080/admin-all-products");
  }

  toggleProductActiveStatus(productId: number, newStatus: boolean) : Observable<any> {
    return this.http.post<any>("http://localhost:8080/change-visibilty", {
      "productId" : productId,
      "status" : newStatus
    });
  }
}
