import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';


import { AppComponent }  from './app.component';

import { SharedModule } from './shared/shared.module';
import { MaterialModule } from '@angular/material';

import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { AuthenticationService } from './auth/auth.service';
import { UserService } from './user/user.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';
import {Todo} from './todo/todo.component';


@NgModule({
  imports: [
      BrowserModule, 
      HttpModule, 
      AppRoutingModule, 
      SharedModule, 
      MaterialModule
  .forRoot()],
  declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        Todo
        ],
  providers: [
      AuthGuard,
      AlertService,
      AuthenticationService,
      UserService,
      
      fakeBackendProvider,
      MockBackend,
      BaseRequestOptions
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
