import { ResponseData } from "./responseData";

export interface TodoList{

      itemId: number,
      taskName: string,
      taskDescription: string,
      dueDate: Date,
      createdOn: Date,
      isCompleted: boolean,
      tags:string,
      completedOn: Date

}