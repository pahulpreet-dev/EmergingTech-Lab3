import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListsServiceService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/all-courses', this.httpOptions);
  }
  getAllStudents(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/all-students', this.httpOptions);
  }
  studentsDoingCourse(course: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/students-doing-course', course, this.httpOptions);
  }
}
