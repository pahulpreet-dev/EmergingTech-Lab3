import { Component, OnInit } from '@angular/core';
import { Signup } from 'src/app/models/signup';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../styles/styles.css']
})
export class SignupComponent implements OnInit {

  user: any = {};
  errorMessage: string;

  constructor(private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  createUser() {
    this.authService.signup(this.user).subscribe(
      data => {
        alert('New user added');
        this.router.navigate(['/signin']);
      },
      error => {
        console.error('Error creating user');
        this.errorMessage = error;
      }
    );
  }
}
