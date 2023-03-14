import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

   

  constructor(private _authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this._authService.currentUserAccessToken$.pipe(
      take(1),
      switchMap((token) => 
      {
        const requestWithAccessToken = request.clone({setHeaders: {Authorization: `Bearer ${token}`}})
        return next.handle(requestWithAccessToken);
      }
      )
    )
    
  }
}
