import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../model/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  todos: Todo[] = [];
  todoSubscription: Subscription = new Subscription();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoSubscription = this.todoService.todoSubject.subscribe(
      (todoData) => {
        this.todos = todoData;
      }
    );
    this.todoService.getData();
  }

  onGettingAll(){
    this.todoService.getAll();
  }

  onGettingCompletedTask(){
    this.todoService.getCompletedTask();
  }

  onGettingUnCompletedTask(){
    this.todoService.getUnCompletedTask();
  }

  ngOnDestroy(): void {
    this.todoSubscription.unsubscribe();
  }

}
