import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from '../app/components/home-page/home-page.component';
import {LoginPageComponent} from '../app/components/login-page/login-page.component';
import {RegisterPageComponent} from '../app/components/register-page/register-page.component';
import {PrivatePageComponent} from '../app/components/private-page/private-page.component';
import {NotFoundPageComponent} from '../app/components/not-found-page/not-found-page.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'private', component: PrivatePageComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
