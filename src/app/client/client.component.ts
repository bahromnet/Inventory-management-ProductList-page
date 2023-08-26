import { Component } from '@angular/core';
import { ClinetApiService } from '../clinet-api.service';
import { Client } from '../models/Client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  
  client:Client[] = [];
  clien!:Client;
  constructor(private clientApi : ClinetApiService){
    this.clientApi.getClient().subscribe(cl=>{
      this.client = cl;
    });
  }

  getById(Id : string){
    this.clientApi.getById('id').subscribe(cl=>{
      this.clien = cl;
    });
  }
}
