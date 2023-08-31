import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/models/Role';

@Component({
  selector: 'app-get-byid-pemission',
  templateUrl: './get-byid-pemission.component.html',
  styleUrls: ['./get-byid-pemission.component.css']
})
export class GetByidPemissionComponent implements OnInit {
  id:string = "";
  permission!:Role;
  constructor(private route : ActivatedRoute, private client : HttpClient){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.client.get<Role>(`http://localhost:5234/api/Permission/GetPermissionById?Id=${this.id}`).subscribe((pt) => {
        this.permission = pt;
      });
    });
  }
}
