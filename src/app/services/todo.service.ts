import { Subject } from "rxjs";
import { Todo } from "../model/todo.model";

export class TodoService {

  id: number = 6;

  data = [
    {
      id: 1,
      title: "Apprendre à apprende...",
      completed: true,
    },
    {
      id: 2,
      title: "Comprendre le web...",
      completed: true,
    },
    {
      id: 3,
      title: "Apprendre HTML & CSS...",
      completed: true,
    },
    {
      id: 4,
      title: "Apprendre JavaScript...",
      completed: false,
    },
    {
      id: 5,
      title: "Setup projet ...",
      completed: false,
    },
  ];

  todos: Todo[] = [];
  todosFiltering: Todo[] = []; 

  todoSubject: Subject<Todo[]> = new Subject<Todo[]>();


  emitSubject(){
    this.todoSubject.next(this.todos.slice());
  }

  emitSubjectFiltering(){
    this.todoSubject.next(this.todosFiltering.slice());
  }


  getData() {
    this.todos = [...this.data];
    this.emitSubject();
  }

  toggleCompleteTask(id: number){
    this.todos.map(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }
    });
    this.emitSubject();
  }

  deleteTask(id: number){
    this.data = this.data.filter(task => task.id !== id);
    this.todos = this.data; 
    this.emitSubject();
  }

  addTask(todo: Todo){
    this.data.push(todo);
    this.emitSubject();
  }

  getCompletedTask(){
    this.todosFiltering = this.todos.filter(task => task.completed === true);
    this.emitSubjectFiltering();
  }

  getUnCompletedTask(){
    this.todosFiltering = this.todos.filter(task => task.completed === false);
    this.emitSubjectFiltering();
  }

  getAll(){
    this.todosFiltering = this.todos;
    this.emitSubjectFiltering();
  }

  searchingTask(query: string){
    this.todosFiltering = this.todos.filter(task => task.title.includes(query));
    this.emitSubjectFiltering();
  }


}
