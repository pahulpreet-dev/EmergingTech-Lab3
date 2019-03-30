import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/models/signup';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  users: Signup[];
  user: any = {};
  errorMessage: string;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  createUser(studentNumber, password, firstName, lastName, address, city, phone, email, program) {
    // const user = {
    //   studentNumber: studentNumber,
    //   password:password,
    //   firstName: firstName,
    //   lastName: lastName,
    //   address: address,
    //   city: city,
    //   phone: phone,
    //   email: email,
    //   program: program
    // };
    this.authService.signup(this.user).subscribe(
      data => {
        alert('New user added');
        return true;
      },
      error => {
        console.error('Error creating user');
        this.errorMessage = error;
      }
    );
  }
}
