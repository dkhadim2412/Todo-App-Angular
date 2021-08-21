import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {

  todoForm: FormGroup = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(2)])
  })

  constructor(private todoService: TodoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitForm(){
    const todo = new Todo(this.todoForm.value["title"], false);
    todo.id = this.todoService.id++;
    this.todoService.addTask(todo);
    this.router.navigate(["/"]);

  }

}
