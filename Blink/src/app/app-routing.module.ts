import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './patient/home/home.component';
import { LayoutComponent } from './patient/layout/layout.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './patient/about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signin',component:SignInComponent},
  {path:'patient', component:LayoutComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
