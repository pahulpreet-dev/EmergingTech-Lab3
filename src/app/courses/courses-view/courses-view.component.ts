import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['../../styles/styles.css']
})
export class CoursesViewComponent implements OnInit {

  courses: Course[];
  errorMessage: string;
  user: any;

  constructor(private courseService: CourseService,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    if ( !this.authenticationService.isLoggedIn()) {
      alert('Please login first');
      this.router.navigate(['/signin']);
    } else {
    this.courses = new Array<Course>();
    this.user = JSON.parse(localStorage.getItem('user'));
    this.displayCourseList(); }
  }
  displayCourseList(): void {

    this.courseService.getList(this.user).subscribe(data => {
        this.courses = data;
        // console.log(this.courses);
    });
  }
  onDeleteClick(): void {
    if (!confirm('Are you sure to delete?')) {
      this.router.navigate(['/courses']);
    }
  }
}
