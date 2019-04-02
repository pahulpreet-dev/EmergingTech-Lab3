import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../styles/styles.css']
})
export class HomeComponent implements OnInit {

  loggedIn: boolean;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loggedIn = this.authenticationService.isLoggedIn();
  }

}
