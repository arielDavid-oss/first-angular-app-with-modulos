import { Component, Output, EventEmitter, inject, Input } from '@angular/core';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();
//  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSumarry = '';
  enteredDate = '';
private tasksService= inject(TasksService);

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
this.tasksService.addTask({
  title: this.enteredTitle,
  sumarry: this.enteredSumarry,
  date: this.enteredDate
}, 
this.userId
);
this.close.emit();
}
}
