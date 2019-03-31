import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.css']
})
export class CoursesAddComponent implements OnInit {

  course: any = {};
  errorMessage: string;

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  createCourse() {
    this.courseService.addCourse(this.course).subscribe(
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
