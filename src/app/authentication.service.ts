import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Signup } from './models/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signup(newUser) {
    return this.http.post<Signup>('http://localhost:3000/api/auth/signup', newUser);
}

}
