import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IRoles } from 'src/app/models/IRoles';

@Component({
  selector: 'app-get-all-permission',
  templateUrl: './get-all-permission.component.html',
  styleUrls: ['./get-all-permission.component.css']
})
export class GetAllPermissionComponent {

  roles: IRoles = {
    pageNumber: 0,
    totalPages: 0,
    totalCount: 0,
    items: [],
    hasPreviousPage: false,
    hasNextPage: false
  };

  constructor(private http:HttpClient){
    this.http.get<IRoles>("http://localhost:5234/api/Permission/GetAllPermissions").subscribe((pt) =>{
      this.roles = pt;
    });
  }
}
