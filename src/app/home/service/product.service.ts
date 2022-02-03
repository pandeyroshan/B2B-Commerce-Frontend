import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = "http://localhost:8080/all-products/";

  constructor(private http: HttpClient) { }

  getAllProduct(userId: number): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+userId);
  }
}
