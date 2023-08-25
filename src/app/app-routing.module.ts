import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SendApplicationComponent } from './send-application/send-application.component';
import { ManagementComponent } from './management/management.component';

const routes: Routes = [
  {
    path: 'product-list', 
    component: ProductListComponent
  },
  {
    path: 'add-product', 
    component: AddProductComponent
  },
  {
    path: 'send-application', 
    component: SendApplicationComponent
  },
  {
    path: 'management', 
    component: ManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
