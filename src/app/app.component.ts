import { animate } from '@angular/animations';
import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inventory-management-ProductList-page';
  constructor(private contexts: ChildrenOutletContexts){}
  getRouteAnimationData(){
    return this.contexts.getContext('primary')?.route?.snapshot.data?.['animation'];
  }
}
