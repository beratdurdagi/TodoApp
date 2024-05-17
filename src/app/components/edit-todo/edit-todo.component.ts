import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoServiceService } from '../../services/todo-service.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrl: './edit-todo.component.css'
})
export class EditTodoComponent implements OnInit {
  ngOnInit(): void {
    this.createFormGroup()
  }

  itemId:number;
  constructor(private route :ActivatedRoute,private formBuilder:FormBuilder,private todoService:TodoServiceService) {
   
   this.itemId= Number.parseInt(this.route.snapshot.paramMap.get("todoId"))
  }
  todoUpdateForm:FormGroup


  createFormGroup() {
    this.todoUpdateForm = this.formBuilder.group({
      itemId:[this.itemId],
      taskName: [''],
      taskDescription: [''],
      dueDate: [''],
      createdOn: [new Date()],
      isCompleted: [false],
      tags: [''],
      completedOn: [''] // Boş string olmalı, yoksa tırnak içine alınmayacak
    });}



    updateTodo():void{
      if(this.todoUpdateForm.valid){


        var updatedTodo=Object.assign({},this.todoUpdateForm.value)

        this.todoService.updateTodo(updatedTodo).subscribe((res =>
          console.log(res.message)
        ))

      }else{
        console.log("Updating")
      }
      
    }
}
