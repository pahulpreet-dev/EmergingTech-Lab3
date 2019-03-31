import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Signup } from './models/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) { }

  signup(newUser): Observable<any> {
    const body = JSON.stringify(newUser);
    console.log(body);
    return this.http.post<Signup>('http://localhost:3000/api/auth/signup', body, this.httpOptions);
}

}
