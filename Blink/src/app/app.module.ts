import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './patient/home/home.component';
import { LayoutComponent } from './patient/layout/layout.component';
import { HeaderComponent } from './patient/layout/header/header.component';
import { FooterComponent } from './patient/layout/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './patient/about/about.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
