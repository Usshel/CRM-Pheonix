import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private _httpClient: HttpClient) {
  }

  userLogin(userEmail: string, userPassword: string): Observable<any> {
    return this._httpClient.post('https://us-central1-courses-auth.cloudfunctions.net/auth/login', {data: { email:userEmail , password:userPassword }}, undefined);
  }
}
