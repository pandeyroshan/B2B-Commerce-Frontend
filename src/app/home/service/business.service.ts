import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  getMyBusiness() {
    return this.http.get<any>("http://localhost:8080/my-business/"+localStorage.getItem("businessId"));
  }

  updateBusinessInformation(businessName: string) {
    return this.http.post<any>(
      "http://localhost:8080/update-business",
      {
        "businessId": Number(localStorage.getItem("businessId")),
        "businessName": businessName
      }
    ).subscribe(data => console.log(data))
  }

  getBusinessDetails(): Observable<any> {
    return this.http.post<any>(
      "http://localhost:8080/get-detail-from-token",
      {
        "token" : localStorage.getItem("jwttoken")
      }
    );
  }
}
