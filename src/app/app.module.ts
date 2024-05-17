import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';




@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    EditTodoComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule // Ensure ReactiveFormsModule is included here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
