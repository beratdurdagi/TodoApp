import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from '../models/todoList';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ResponseModels } from '../models/responseModels';
import { ResponseData } from '../models/responseData';


@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  
  constructor(private http : HttpClient) { }

  private apiUrl:string="https://freeapi.gerasim.in/api/JWT/"

  addTodo(todo:TodoList): Observable<SingleResponseModel<TodoList>>{

    var url = this.apiUrl+"CreateNewTask"
    return this.http.post<SingleResponseModel<TodoList>>(url,todo)
  }
  getTodos():Observable<ResponseModels<TodoList>>{


    var url =this.apiUrl+"GetAllTaskList"

    return this.http.get<ResponseModels<TodoList>>(url)
  }

  deleteTodo(id : number):Observable<ResponseData>{
    return this.http.delete<ResponseData>(this.apiUrl+"DeleteTask?itemId="+id)
  }

  updateTodo(todo:TodoList):Observable<ResponseData>{

    return this.http.put<ResponseData>(this.apiUrl+"UpdateTask",todo)
  }

}

