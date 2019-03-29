import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignuoComponent } from './signuo/signuo.component';

const routes: Routes = [
  {path: 'signup', component: SignuoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
