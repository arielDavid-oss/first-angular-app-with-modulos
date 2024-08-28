import { Component, Input,EventEmitter, Output } from '@angular/core';
import { TasksService } from './tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!:string;
 @Input({required: true}) name!:string;
isAddindTask = false;


constructor(private tasksService: TasksService){
  this.tasksService = tasksService;
}


get selectedUserTasks(){
  return this.tasksService.getUserTasks(this.userId);
}

onStartAddTask(){
  this.isAddindTask = true;
 
}

onCloseAddTask(){
  this.isAddindTask = false;
  }  
}





