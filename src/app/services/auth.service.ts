import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private _httpClient: HttpClient) {
  }

  login(userEmail: string, userPassword: string): Observable<any> {
    return this._httpClient.post('https://us-central1-courses-auth.cloudfunctions.net/auth/login', { data: { email: userEmail, password: userPassword } }, undefined).pipe(
      tap((data) => console.log(data)
    ));
  }

  register(userEmail: string, userPassword: string): Observable<any> {
    return this._httpClient.post<any>('https://us-central1-courses-auth.cloudfunctions.net/auth/register2', {data: { email: userEmail, password: userPassword}}, undefined).pipe(
      tap((data) => console.log(data)
    ))
  }
};
