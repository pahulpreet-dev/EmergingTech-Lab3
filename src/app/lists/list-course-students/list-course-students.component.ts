import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-course-students',
  templateUrl: './list-course-students.component.html',
  styleUrls: ['../../styles/styles.css']
})
export class ListCourseStudentsComponent implements OnInit {

  student: any;
  constructor() { }

  ngOnInit() {
    this.student = JSON.parse(localStorage.getItem('course-student'));
    localStorage.removeItem('course-student');
  }

}
