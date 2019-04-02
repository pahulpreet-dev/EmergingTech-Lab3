import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router } from '@angular/router';
import { Signup } from 'src/app/models/signup';

@Component({
  selector: 'app-courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.css']
})
export class CoursesAddComponent implements OnInit {

  course: any = {};
  errorMessage: string;
  user: any;

  constructor(private courseService: CourseService,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    if ( !this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/signin']);
    } else {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  }

  createCourse() {

    this.courseService.addCourse(this.course, this.user).subscribe(
      data => {
        alert('New course added');
        return true;
      },
      error => {
        console.error('Error creating course');
        this.errorMessage = error;
      }
    );
  }

}
