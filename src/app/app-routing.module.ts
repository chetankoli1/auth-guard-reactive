import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './RoutGuards/auth.guard';

const routes: Routes = [
  {path:'',redirectTo: 'home',pathMatch:'full'},
  {path:'login',component:LoginFormComponent},
  {path:'register',component:RegisterFormComponent},
  {path:'home',component:HomeComponent, canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
