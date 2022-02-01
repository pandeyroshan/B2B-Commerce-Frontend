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

  getRole(): Observable<any> {
    return this.http.post<any>(
      "http://localhost:8080/get-role", {
        "token" : localStorage.getItem("jwttoken")
      }
    );
  }

  getBusinessDetails(token: string) {
  }
}
