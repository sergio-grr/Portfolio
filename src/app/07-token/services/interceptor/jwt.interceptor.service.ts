import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let cloneRequest = req;
    if(cloneRequest.url.includes("https://8rkrz.wiremockapi.cloud/verifyToken")){
      let token = localStorage.getItem("token")
      cloneRequest = req.clone(
          {
            setHeaders:{
              Authorization: `Bearer ${token}`
            }
          }
      )
      console.log(cloneRequest);
    }
    return next.handle(cloneRequest);
    
  }
}
