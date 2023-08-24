import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  sendDataToResponse = new EventEmitter<string>();
  sendDataToSend = new EventEmitter<string>();

  constructor() { }
}