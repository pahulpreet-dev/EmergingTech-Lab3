import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from 'src/app/models/course';

@Component({
  selector: 'app-courses-delete',
  templateUrl: './courses-delete.component.html',
  styleUrls: ['./courses-delete.component.css']
})
export class CoursesDeleteComponent implements OnInit {

  course: Course;
  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService,
              private router: Router) { }

  ngOnInit() {

    this.course = new Course();
    this.activatedRoute.params.subscribe(params => {
      this.course._id = params.id;
    });
    this.deleteCOurse(this.course);
  }
  deleteCOurse(course: Course): any {
    this.courseService.deleteCourse(course).subscribe(data => {
      alert('Course deleted successfully');
      this.router.navigate(['/courses']);
    }, error => {console.error(error); });
  }

}
