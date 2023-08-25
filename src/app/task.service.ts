import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskAnnouncedSource = new Subject<string>();
  private taskConfirmedSource = new Subject<string>();
  public taskAnnounced$ = this.taskAnnouncedSource.asObservable();
  public taskConfirmed$ = this.taskConfirmedSource.asObservable();

  constructor() { }

  announceTask(task : string){
    this.taskAnnouncedSource.next(task);
  }

  comfirmTask(task:string){
    this.taskConfirmedSource.next(task);
  }

}
