import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  // sendDataToResponse = new EventEmitter<string>();
  // sendDataToSend = new EventEmitter<string>();

  private sendValueSubject = new BehaviorSubject<string>("");
  sendValue$ : Observable<string> = this.sendValueSubject.asObservable();

  private responseValueSubject = new BehaviorSubject<string>("");
  responseValue$ : Observable<string> = this.responseValueSubject.asObservable();

  updateSendValue(value : string){
    this.sendValueSubject.next(value);
  }

  updateResponseValue(value : string){
    this.responseValueSubject.next(value);
  }

  constructor() { }
}