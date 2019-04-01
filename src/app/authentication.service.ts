import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Signup } from './models/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public user: any;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) {
    this.user = new Signup();
  }

  signup(newUser): Observable<any> {
    const body = JSON.stringify(newUser);
    console.log(body);
    return this.http.post<Signup>('http://localhost:3000/api/auth/signup', body, this.httpOptions);
}

signin(user: any): Observable<any> {
  return this.http.post<any>('http://localhost:3000/api/auth/signin', user, this.httpOptions);
}

public storeUserData(user: Signup): void {
  localStorage.setItem('user', JSON.stringify(user));
  this.user = user;
}

public logout(): Observable<any> {
  this.user = null;
  localStorage.clear();

  return this.http.get<any>('http://localhost:3000/api/auth/logout', this.httpOptions);
}

isLoggedIn(): boolean {
  return (!!localStorage.getItem('user'));
}

}
