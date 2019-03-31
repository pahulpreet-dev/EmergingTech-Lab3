import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './authentication/signup/signup.component';
import { CoursesViewComponent } from './courses/courses-view/courses-view.component';
import { CoursesAddComponent } from './courses/courses-add/courses-add.component';
import { CoursesEditComponent } from './courses/courses-edit/courses-edit.component';


const routes: Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'courses', component: CoursesViewComponent},
  {path: 'courses/add', component: CoursesAddComponent},
  {path: 'courses/edit/:id', component: CoursesEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
