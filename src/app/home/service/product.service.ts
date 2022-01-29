import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = "http://localhost:8080/all-products";

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<product[]> {
    return this.http.get<product[]>(this.baseUrl);
  }
}
