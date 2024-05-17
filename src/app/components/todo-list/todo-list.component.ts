import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { TodoServiceService } from '../../services/todo-service.service';
import { TodoList } from '../../models/todoList';
import { FormGroup,FormBuilder,Validators,FormControl } from '@angular/forms';




@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {


  todoAddForm :FormGroup;


  todo :TodoList;
  todos:TodoList[];
  constructor(private todoService : TodoServiceService,private formBuilder:FormBuilder) {
   
    
  }
  ngOnInit(): void {
    this.createFormGroup()
    this.getAllTodos()
  }
   
  addTodo() {

    if( this.todoAddForm.valid){

      const todos = Object.assign({},this.todoAddForm.value)
      this.todoService.addTodo(todos).subscribe((
        res =>{
          console.log("Added",res)
        }
        
          
        
      ),err =>{
          console.log(err)
      })

      
    }
 
  }

  getAllTodos(): void{
     this.todoService.getTodos().subscribe((res =>{
      this.todos=res.data
      console.log(res.data)
    }))
  }

  deleteTodo(id : number){

    this.todoService.deleteTodo(id).subscribe((response=>
      console.log(response)
    ))
  }
  
  createFormGroup() {
    this.todoAddForm = this.formBuilder.group({
      taskName: [''],
      taskDescription: [''],
      dueDate: [''],
      createdOn: [new Date()],
      isCompleted: [false],
      tags: [''],
      completedOn: [''] // Boş string olmalı, yoksa tırnak içine alınmayacak
    });}


}
