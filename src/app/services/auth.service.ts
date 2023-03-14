import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _currentUserAccessTokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public currentUserAccessToken$: Observable<string> = this._currentUserAccessTokenSubject.asObservable();

  private _currentUserRefreshTokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public currentUserRefreshToken$: Observable<string> = this._currentUserRefreshTokenSubject.asObservable();


  constructor(private _httpClient: HttpClient) {
  }






  login(userEmail: string, userPassword: string): Observable<any> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/login',
      { data: { email: userEmail, password: userPassword } }, undefined)
      .pipe(
        map((credentials) => ({
          accessToken: credentials.data.accessToken,
          refreshToken: credentials.data.refreshToken,
        })),
        tap((credentials) => console.log(credentials)
        ));
  }

  register(userEmail: string, userPassword: string): Observable<any> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/register2',
      { data: { email: userEmail, password: userPassword } }, undefined)
      .pipe(
        tap((data) => console.log(data)
        ))
  }
};
