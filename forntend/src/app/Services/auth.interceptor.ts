import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import {catchError, Observable, switchMap, tap, throwError} from 'rxjs';
import {User} from "../Model/User";
import {UserService} from "./user.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  isRefreshing = false;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.userService.getToken();


    console.log("token", token);

    if (token && !this.isRefreshing && this.userService.checkTokenExpiration(token)) {
      this.isRefreshing = true;
      return this.userService.refreshAccessToken().pipe(switchMap((data) => {
        this.isRefreshing = false;
        this.userService.setToken(data.accessToken);
        return next.handle(this.cloneRequest(request, data.accessToken)).pipe(
          catchError((error: any) => {
            return throwError(error);
          }
        ));
      }))
    }
    else {
      return next.handle(this.cloneRequest(request, token)).pipe(
        catchError((error: any) => {
            return throwError(error);
          }
        ));
    }
  }


  cloneRequest(request: HttpRequest<unknown>, token: string | null): HttpRequest<unknown> {
      // if(!token) {
      // return request.clone({
      //   headers: new HttpHeaders({
      //     'Content-Type': 'application/json'
      //   })
      // });}


    return  request.clone({
      headers: new HttpHeaders({
        'authorization': `${token}`,
        'Content-Type': 'application/json'
      })
    });
  }

}
