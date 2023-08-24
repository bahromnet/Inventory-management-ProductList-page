import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-response-application',
  templateUrl: './response-application.component.html',
  styleUrls: ['./response-application.component.css']
})
export class ResponseApplicationComponent {

  items : string[] = [];

  value1 = "";

  constructor(private sharedDataService: SharedDataService) {}

  addItem(item : string){
    this.items.push(item);
  }

  clearValue() {
    this.value1 = "";
  }

  updateSendValue() {
    this.sharedDataService.sendDataToSend.emit(this.value1);
  }
}