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
import { GetAllPermissionComponent } from './Rolesss/get-all-permission/get-all-permission.component';
import { CreatePermissionComponent } from './Rolesss/create-permission/create-permission.component';

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
    path: 'product-type-byid/:id', 
    component: ProductTypeByidComponent
  },
  {
    path: 'get-all-permission', 
    component: GetAllPermissionComponent
  },
  {
    path: 'create-permission', 
    component: CreatePermissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
