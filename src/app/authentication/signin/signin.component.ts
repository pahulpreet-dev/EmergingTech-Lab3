import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
import { Signup } from 'src/app/models/signup';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errorMessage: string;
    user: Signup;
    constructor(private authenticationService: AuthenticationService,
                private router: Router) { }

  ngOnInit() {
    this.user = new Signup();
  }

  signin(): void {
    // this.authenticationService.signin(this.credentials).subscribe(res =>
    //     { alert('login'),
    //       console.log(res.user);
    //   },
    //     error => {
    //       this.errorMessage = error,
    //       console.log(error);
    //     });
    this.authenticationService.signin(this.user).subscribe(data => {
          this.authenticationService.storeUserData(data);
          console.log(data);
          alert('login');
         }, error => console.log('error'));
  }

}
