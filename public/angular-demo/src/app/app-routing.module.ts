import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

const routes: Routes = [
    { path: '', redirectTo: '/todoList', pathMatch: 'full' },
    { path: 'todoList', component: TodoComponent},
    { path: 'todo/:id', component: TodoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
