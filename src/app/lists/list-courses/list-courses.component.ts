import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course';
import { ListsServiceService } from '../lists-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['../../styles/styles.css']
})
export class ListCoursesComponent implements OnInit {

  courses: Course[];
  errorMessage: any;
  constructor(private listService: ListsServiceService,
              private router: Router) { }

  ngOnInit() {
    this.courses = new Array<Course>();
    this.displayAllCourses();
  }
  displayAllCourses(): any {
    this.listService.getAllCourses().subscribe(data => {
      this.courses = data;
    }, error => {this.errorMessage = error;
    });
  }

  viewStudents(course: Course): void {
    localStorage.setItem('course-student', JSON.stringify(course.student));
    this.router.navigate(['/course-students']);
  }
}
