import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SendApplicationComponent } from './send-application/send-application.component';
import { ResponseApplicationComponent } from './response-application/response-application.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ManagementComponent } from './management/management.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientComponent } from './client/client.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductTypeComponent } from './ProductType/product-type/product-type.component';
import { CreateProductTypeComponent } from './ProductType/create-product-type/create-product-type.component';
import {MatTableModule} from '@angular/material/table';
import { ProductTypeByidComponent } from './ProductType/product-type-byid/product-type-byid.component';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule } from "@angular/flex-layout";
import { GetAllPermissionComponent } from './Rolesss/get-all-permission/get-all-permission.component';
import { CreatePermissionComponent } from './Rolesss/create-permission/create-permission.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    NavbarComponent,
    HeaderComponent,
    AddProductComponent,
    SendApplicationComponent,
    ResponseApplicationComponent,
    ManagementComponent,
    EmployeeComponent,
    ClientComponent,
    ProductTypeComponent,
    CreateProductTypeComponent,
    ProductTypeByidComponent,
    GetAllPermissionComponent,
    CreatePermissionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
