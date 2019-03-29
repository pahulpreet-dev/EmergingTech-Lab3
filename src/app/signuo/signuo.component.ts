import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Signup} from './signup';


@Component({
  selector: 'signup',
  templateUrl: './signuo.component.html',
  styleUrls: ['./signuo.component.css']
})
export class SignuoComponent implements OnInit {

  users: Signup[];


  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

  }

  createUser(studentNumber, password, firstName, lastName, address, city, phone, email, program) {
    const user = {
      studentNumber: studentNumber,
      password:password,
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      phone: phone,
      email: email,
      program: program
    };
    this.authService.signup(user).subscribe(
      data => {
        alert('New user added');
        return true;
      },
      error => {
        console.error('Error creating user');
      }
    );

  }


}
