import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent {
  employees = ['Bahrom','Jamshid','Elyor','Hojiakbar', 'Maqsud', 'Zafar'];
  tasks = ['Angularda Chat qilib kelish','Leetcoddan masala ishlash','50 ta anjumaniya'];
  count = 0;
  history:string[] = [];
  
  constructor(private taskService:TaskService){
    taskService.taskConfirmed$.subscribe(employee =>{
      this.history.push(`${employee} tasdiqladi`)
    });
  }

  announce(){
    let task = this.tasks[this.count++];
    this.taskService.announceTask(task);
    this.history.push(`"${task}" topshirig'i elon qilindi`)
    if (this.count >= this.tasks.length){
      this.count = 0;
    }
  }
  
}
