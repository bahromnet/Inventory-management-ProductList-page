import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductType } from './models/IProductType';
import { ProductType } from './models/ProductType';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeServiceService {

  constructor(private client : HttpClient) { }

  getAllProductType(){
    return this.client.get<IProductType>(`http://localhost:5234/api/ProductType/GetAllProductTypes`);
  }

  getByIdProductType(id:string){
    return this.client.get<ProductType>(`http://localhost:5234/api/ProductType/GetProductTypeById/?id=${id}`);
  }

  createProductType(producType:IProductType){
    return this.client.post<any>(`http://localhost:5234/api/ProductType/CreateProductType`, producType);
  }
}
