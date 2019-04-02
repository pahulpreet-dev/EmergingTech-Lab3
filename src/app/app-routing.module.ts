import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './authentication/signup/signup.component';
import { CoursesViewComponent } from './courses/courses-view/courses-view.component';
import { CoursesAddComponent } from './courses/courses-add/courses-add.component';
import { CoursesEditComponent } from './courses/courses-edit/courses-edit.component';
import { CoursesDeleteComponent } from './courses/courses-delete/courses-delete.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ListCoursesComponent } from './lists/list-courses/list-courses.component';
import { ListStudentsComponent } from './lists/list-students/list-students.component';
import { ListCourseStudentsComponent } from './lists/list-course-students/list-course-students.component';

const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'courses', component: CoursesViewComponent},
  {path: 'courses/add', component: CoursesAddComponent},
  {path: 'courses/edit/:id', component: CoursesEditComponent},
  {path: 'courses/students/:id', component: CoursesEditComponent},
  {path: 'courses/delete/:id', component: CoursesDeleteComponent},
  {path: 'list-courses', component: ListCoursesComponent},
  {path: 'list-students', component: ListStudentsComponent},
  {path: 'course-students', component: ListCourseStudentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
