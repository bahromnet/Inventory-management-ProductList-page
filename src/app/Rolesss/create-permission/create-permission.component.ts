import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CreatePermission, Role } from 'src/app/models/Role';

@Component({
  selector: 'app-create-permission',
  templateUrl: './create-permission.component.html',
  styleUrls: ['./create-permission.component.css']
})
export class CreatePermissionComponent {
  str!: string;
  newRole: CreatePermission = { name: [] }; // Initialize newRole
  constructor(private http: HttpClient) { }

  sendNewProductType() {
    this.newRole.name.push(this.str);
    console.log(this.newRole);

    this.http.post(`http://localhost:5234/api/Permission/CreatePermission`, this.newRole).subscribe((pt) => {
      console.log(pt);
    });
    this.newRole = { name: [] };
  }
}