import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  getMyBusiness() {
    localStorage.setItem("businessId", "1");
    return this.http.get<any>("http://localhost:8080/my-business/"+localStorage.getItem("businessId"));
  }

  updateBusinessInformation(businessName: string) {
    localStorage.setItem("businessId", "1");
    return this.http.post<any>(
      "http://localhost:8080/update-business",
      {
        "businessId": Number(localStorage.getItem("businessId")),
        "businessName": businessName
      }
    ).subscribe(data => console.log(data))
  }
}
