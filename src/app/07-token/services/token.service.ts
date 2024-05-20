import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from '../interfaces/user.interface';
import { Admin } from '../interfaces/admin.interface';
import { DtoResponseUserLoginToken, UserTokenLogin } from '../interfaces/userTokenLogin';

@Injectable({providedIn: 'root'})
export class TokenService {

  userTokenLogin : UserTokenLogin | undefined
  
  constructor(private http: HttpClient) { }

  getTokenUser(): Observable<User> {
    return this.http.get<User>("https://8rkrz.wiremockapi.cloud/getTokenUser")
      .pipe(catchError(this.handleError));
  }

  getTokenAdmin(): Observable<Admin> {
    return this.http.get<Admin>("https://8rkrz.wiremockapi.cloud/getTokenAdmin")
      .pipe(catchError(this.handleError));
  }

  getVerifyToken(): Observable<DtoResponseUserLoginToken> {
    return this.http.get<DtoResponseUserLoginToken>("https://8rkrz.wiremockapi.cloud/verifyToken")
      .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
