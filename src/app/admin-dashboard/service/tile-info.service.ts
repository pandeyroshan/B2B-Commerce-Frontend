import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TileInfoService {

  private baseUrl = "localhost:8080";

  constructor(private http: HttpClient) { }

  getTileInformation(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/admin-information");
  }
}
