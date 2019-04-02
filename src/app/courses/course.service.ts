import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Course } from '../models/course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) { }

  getList(user: any): Observable<any> {
    const temp = {
      student: user
    };
    const data = JSON.stringify(temp);
    return this.http.post<any>('http://localhost:3000/api/courses', data, this.httpOptions);
  }
  getCourse(course: Course): Observable<any> {
    const data = JSON.stringify(course);
    return this.http.post<any>('http://localhost:3000/api/courses/' + course._id, data, this.httpOptions);
  }

  editCourse(course: Course): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/courses/edit/' + course._id, course, this.httpOptions);
  }

  addCourse(course: Course, user: any): Observable<any> {
    const temp = {
      courseCode: course.courseCode,
      courseName: course.courseName,
      section: course.section,
      semester: course.semester,
      student: user
    };
    const data = JSON.stringify(temp);
    return this.http.post<Course>('http://localhost:3000/api/courses/add', data, this.httpOptions);
  }

  deleteCourse(course: Course): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/courses/delete/' + course._id, course, this.httpOptions);
  }

}
