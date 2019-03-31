import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-view',
  templateUrl: './courses-view.component.html',
  styleUrls: ['./courses-view.component.css']
})
export class CoursesViewComponent implements OnInit {

  courses: Course[];
  errorMessage: string;

  constructor(private courseService: CourseService,
              private router: Router) { }

  ngOnInit() {
    this.courses = new Array<Course>();

    this.displayCourseList();
  }
  displayCourseList(): void {

    this.courseService.getList().subscribe(data => {
        console.log(data);
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
