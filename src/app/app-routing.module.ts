import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component'
import {LoginComponent} from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { 
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: DashboardComponent, canActivate: [AuthGuard]
  },{
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
