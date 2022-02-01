import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = "localhost:8080";

  constructor(private http: HttpClient) { }

  getAllAddresses(): Observable<any[]> {
    localStorage.setItem('businessId', "1");
    return this.http.get<any[]>("http://localhost:8080/get-all-address/"+localStorage.getItem("businessId"));
  }

  addANewAddress(address: any) {
    localStorage.setItem('businessId', "1");
    address["businessId"] = Number(localStorage.getItem("businessId"));
    this.http.post<any>(
      "http://localhost:8080/save-address",
      address
    ).subscribe(data => console.log(data))
  }

  deleteAddress(id: number) {
    this.http.delete<any>(
      "http://localhost:8080/delete-address/"+id
    ).subscribe(
      data => console.log("Address Deleted")
    )
  }
}
