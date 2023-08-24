import { Component, ViewChild } from '@angular/core';
import { ResponseApplicationComponent } from '../response-application/response-application.component';

@Component({
  selector: 'app-send-application',
  templateUrl: './send-application.component.html',
  styleUrls: ['./send-application.component.css']
})
export class SendApplicationComponent {

  @ViewChild(ResponseApplicationComponent) responseComponent!: ResponseApplicationComponent;

  value2 = "";

  items : string[] = [];

  responseReply! : string;

  constructor() {}

  getResponse(responseText:string){
    this.responseReply = responseText;
  }

  addNewItem(item:string){
    this.responseComponent.addItem(item);
    this.value2 = "";
  }
}