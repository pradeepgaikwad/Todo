import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { LostTodosComponent } from './lost-todos/lost-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './serice/route-guard.service';


const routes: Routes = [
  {path:'' ,component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'welcome', component:WelcomeComponent, canActivate:[RouteGuardService]},
{path:'todos',component:LostTodosComponent,canActivate:[RouteGuardService]},
{path:'logout',component:LogoutComponent,canActivate:[RouteGuardService]},
{path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
