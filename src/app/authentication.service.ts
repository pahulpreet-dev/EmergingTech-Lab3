import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Signup } from './signuo/signup';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signup(newUser) {
    return this.http.post<Signup>('http://localhost:3000/api/auth/signup', newUser);
}

}
