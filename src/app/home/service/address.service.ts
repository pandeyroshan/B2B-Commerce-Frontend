import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private baseUrl = "localhost:8080";

  constructor(
    private http: HttpClient
  ) { }

  getAllAddresses(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:8080/get-all-address/"+localStorage.getItem("businessId"));
  }

  addANewAddress(address: any) {
    address["businessId"] = Number(localStorage.getItem("businessId"));
    this.http.post<any>(
      "http://localhost:8080/save-address",
      address
    ).subscribe(data => console.log(data))
  }

  deleteAddress(id: number): number {
    let isDeleted: number = -1;
    this.http.delete<any>(
      "http://localhost:8080/delete-address/"+id
    ).subscribe(
      data => { 
        console.log("Address Deleted");
        isDeleted = 1;
      }
    ), error => {
      console.log("Something went wrong");
    };
    
    return isDeleted;
  }
}
