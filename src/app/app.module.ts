import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { CoursesViewComponent } from './courses/courses-view/courses-view.component';
import { CoursesAddComponent } from './courses/courses-add/courses-add.component';
import { CoursesEditComponent } from './courses/courses-edit/courses-edit.component';
import { CoursesDeleteComponent } from './courses/courses-delete/courses-delete.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ListStudentsComponent } from './lists/list-students/list-students.component';
import { ListCoursesComponent } from './lists/list-courses/list-courses.component';
import { ListCourseStudentsComponent } from './lists/list-course-students/list-course-students.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    CoursesViewComponent,
    CoursesAddComponent,
    CoursesEditComponent,
    CoursesDeleteComponent,
    SigninComponent,
    LogoutComponent,
    HomeComponent,
    ListStudentsComponent,
    ListCoursesComponent,
    ListCourseStudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
