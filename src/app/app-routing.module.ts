import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoNewComponent } from './todo-list/todo-new/todo-new.component';

const routes: Routes = [
  { path: 'todo-list', component: TodoListComponent},
  { path: 'todo-list/new', component: TodoNewComponent},
  { path: 'about', component: AboutComponent},
  { path: '', component: TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
