import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/models/signup';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: any = {};
  errorMessage: string;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  createUser() {
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
