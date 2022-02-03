import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwttoken = localStorage.getItem("jwttoken");

    if(!jwttoken) {
      return next.handle(httpRequest);
    }

    const newRequest = httpRequest.clone({
      headers: httpRequest.headers.set('Authorization', 'Bearer '+jwttoken)
    });

    return next.handle(newRequest);
  }
}