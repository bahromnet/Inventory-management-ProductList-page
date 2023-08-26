import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from './models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClinetApiService {

  constructor(private httpClient : HttpClient) { }

  getClient(){
    return this.httpClient.get<Client[]>("http://localhost:5234/api/Role/GetAllRoles")
  }
  getById(id: string) {
    return this.httpClient.get<Client>("http://localhost:5234/api/Role/GetRoleById/${id}");
  }
}
