import { AppState } from './../../app.reducers';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from './../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  constructor(private store: Store<AppState>) {
    this.store.select('todos').subscribe(todos => this.todos = todos);
   }

   ngOnInit() {
   }

}
