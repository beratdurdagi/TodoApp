import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  {path:"",component:TodoListComponent},
  {path:"todo/update/:todoId",component:EditTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
