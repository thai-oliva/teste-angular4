import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Todo } from './todo/todo.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
      { path: 'todos', component: Todo, canActivate: [AuthGuard]},
  
      // otherwise redirect to home
      { path: '**', redirectTo: '' }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

