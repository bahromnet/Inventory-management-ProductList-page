import { Component, Input } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  @Input() employee!: string;
  announced = false;
  confirmed = false;
  task:string = " <Vazifa yo'q> ";

  constructor(private taskService:TaskService){
    taskService.taskAnnounced$.subscribe(task => {
      this.task = task;
      this.announced = true;
      this.confirmed = false;
    })
  }

  confirm(){
    this.confirmed = true;
    this.taskService.comfirmTask(this.employee);
  }
}
