import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SendApplicationComponent } from '../send-application/send-application.component';

@Component({
  selector: 'app-response-application',
  templateUrl: './response-application.component.html',
  styleUrls: ['./response-application.component.css']
})
export class ResponseApplicationComponent {

  items : string[] = [];

  value1 = "";

  // @ViewChild(SendApplicationComponent) sendApplication!: SendApplicationComponent;

  @Input() comingText!:string;
  @Output() outputReply = new EventEmitter<string>()

  constructor() {}

  addItem(item : string){
    //  this.sendApplication.addNewItem(item);
    this.items.push(item);
    this.value1 = "";
  }

  eventInvokeMethod(event:Event){
    this.outputReply.emit(this.value1);
  }

}