import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['../../styles/styles.css']
})
export class CoursesEditComponent implements OnInit {

  course: Course;
  errorMessage: string;
  constructor(private courseService: CourseService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.course = new Course();
    this.activatedRouter.params.subscribe(params => {
      this.course._id = this.activatedRouter.snapshot.paramMap.get('id');
      console.log(this.course._id);
    });
    this.getCourseDetails();
  }

  getCourseDetails(): void {
    this.courseService.getCourse(this.course).subscribe(data => {
        console.log(data);
        this.course = data;
    });
  }

  editCourse(): void {
    this.courseService.editCourse(this.course).subscribe(data => {
      console.log(data);
      alert('course updated successfully');
      this.router.navigate(['/courses']);
  },
      error => {
        console.error('Error creating course');
        this.errorMessage = error;
      });
  }
}
