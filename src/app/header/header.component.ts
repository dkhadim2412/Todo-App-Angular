import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({
    query: new FormControl("")
  })

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  onSubmitForm(){
    this.todoService.searchingTask(this.searchForm.value["query"]);
  }

}
