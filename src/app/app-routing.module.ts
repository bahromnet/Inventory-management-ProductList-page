import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SendApplicationComponent } from './send-application/send-application.component';
import { ManagementComponent } from './management/management.component';
import { ClientComponent } from './client/client.component';
import { ProductTypeComponent } from './ProductType/product-type/product-type.component';
import { CreateProductTypeComponent } from './ProductType/create-product-type/create-product-type.component';
import { ProductTypeByidComponent } from './ProductType/product-type-byid/product-type-byid.component';

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
  },
  {
    path: 'client', 
    component: ClientComponent
  },
  {
    path: 'product-type', 
    component: ProductTypeComponent
  },
  {
    path: 'create-product', 
    component: CreateProductTypeComponent
  },
  {
    path: 'product-type-byid', 
    component: ProductTypeByidComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
