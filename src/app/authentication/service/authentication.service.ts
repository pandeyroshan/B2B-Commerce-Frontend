import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<any[]> {
    return this.http.post<any>(
      "http://localhost:8080/login",
      {
        "username" : username,
        "password" : password
      }
    );
  }

  register(businessRegistrationNumber: string,username: string,email: string ,password: string) {
    this.http.post<any>(
      "http://localhost:8080/register-user", 
      {
        "businessRegistrationNumber": businessRegistrationNumber,
        "email": email,
        "password": password,
        "username": username
      }
    ).subscribe(data => console.log(data));
    
  }

  getRole(): Observable<any> {
    return this.http.post<any>(
      "http://localhost:8080/get-role", {
        "token" : localStorage.getItem("jwttoken")
      }
    );
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
