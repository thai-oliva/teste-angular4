import { Component } from '@angular/core';
import { User } from '../user/user';
import { UserService } from '../user/user.service';

@Component({
  moduleId: module.id, 
  templateUrl: 'todo.component.html'
})

export class Todo {

  newTodo : string;
  userTodo : string;
  dateTodo : any;
  todos : any;
  todoObj : any;
  currentUser: User;

  constructor(private userService: UserService) {
    this.newTodo = '';
    this.userTodo = '';
    this.dateTodo = new Date();
    this.todos = [];
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  addTodo(event:any) {
    this.todoObj = {
      newTodo: this.newTodo,
      userTodo: this.currentUser.username,
      dateTodo: this.dateTodo.toString().substring(3, 24),
      completed: false
    }
    this
      .todos
      .push(this.todoObj);
    this.newTodo = '';
    this.userTodo = '';
    this.dateTodo = new Date();
    event.preventDefault();
  }

  deleteTodo(index:any) {
    this
      .todos
      .splice(index, 1);
  }

}
