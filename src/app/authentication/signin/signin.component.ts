import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
import { Signup } from 'src/app/models/signup';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../../styles/styles.css']
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
    this.authenticationService.signin(this.user).subscribe(data => {
          this.authenticationService.storeUserData(data);
          this.router.navigate(['/home']);
         }, error => console.log('error'));
  }

}
