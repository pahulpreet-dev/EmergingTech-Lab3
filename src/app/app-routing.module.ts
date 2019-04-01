import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './authentication/signup/signup.component';
import { CoursesViewComponent } from './courses/courses-view/courses-view.component';
import { CoursesAddComponent } from './courses/courses-add/courses-add.component';
import { CoursesEditComponent } from './courses/courses-edit/courses-edit.component';
import { CoursesDeleteComponent } from './courses/courses-delete/courses-delete.component';
import { SigninComponent } from './authentication/signin/signin.component';


const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'courses', component: CoursesViewComponent},
  {path: 'courses/add', component: CoursesAddComponent},
  {path: 'courses/edit/:id', component: CoursesEditComponent},
  {path: 'courses/delete/:id', component: CoursesDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
