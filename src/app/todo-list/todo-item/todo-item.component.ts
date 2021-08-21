import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() id: number = 0;
  @Input() title: string = "Task to do";
  @Input() completed: boolean = true;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onToggleCompletedTask(){
    this.todoService.toggleCompleteTask(this.id);
  }

  onDeleteTask(){
    this.todoService.deleteTask(this.id);
  }

}
