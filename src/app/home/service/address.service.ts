import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = "localhost:8080";

  constructor(private http: HttpClient) { }

  customFunction() { 
    this.http.get(this.baseUrl+"/all-products");
    
  }
}
