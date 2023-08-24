import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-send-application',
  templateUrl: './send-application.component.html',
  styleUrls: ['./send-application.component.css']
})
export class SendApplicationComponent {

  value2 = "";

  items : string[] = [];

  constructor(private sharedDataService: SharedDataService) {}

  addNewItem(item:string){
    this.items.push(item);
  }

  clearValue() {
    this.value2 = "";
  }

  updateResponseValue() {
    this.sharedDataService.sendDataToResponse.emit(this.value2);
  }
}