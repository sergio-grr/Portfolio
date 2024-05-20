import { Injectable } from '@angular/core';
import {
  HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoadingService } from '../loading.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(
    private _loading: LoadingService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { //reques coge la solicitud http y next la envia al servidor
    this._loading.setLoading(true, request.url);// intercepta la llamada, y coloca el el spinner en true mientras dura el evento
    return next.handle(request).pipe(
      catchError((err) => {
        this._loading.setLoading(false, request.url);
        throw err;
      }),
      map((evt: HttpEvent<any>) => {
        if (evt instanceof HttpResponse) {
          this._loading.setLoading(false, request.url);
        }
        return evt; // devuelve el evento para que el flujo de datos continue
      })
    );
  }
}
