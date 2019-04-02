import { Component, OnInit } from '@angular/core';
import { ListsServiceService } from '../lists-service.service';
import { Signup } from 'src/app/models/signup';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['../../styles/styles.css']
})
export class ListStudentsComponent implements OnInit {

  students: Signup[];
  errorMessage: string;
  constructor(private listService: ListsServiceService) { }

  ngOnInit() {
    this.students = new Array<Signup>();
    this.displayAllStudents();
  }
  displayAllStudents(): any {
    this.listService.getAllStudents().subscribe(data => {
      this.students = data;
    }, error => this.errorMessage = error);
  }

}
