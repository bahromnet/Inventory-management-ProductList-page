import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductType } from 'src/app/models/ProductType';
import { ProductTypeServiceService } from 'src/app/product-type-service.service';

@Component({
  selector: 'app-create-product-type',
  templateUrl: './create-product-type.component.html',
  styleUrls: ['./create-product-type.component.css']
})
export class CreateProductTypeComponent {
  
  constructor(private service : ProductTypeServiceService, private http:HttpClient){ }
  newProductType: ProductType = { name: '', picture: '' };
  sendNewProductType() {
    this.http.post(`http://localhost:5234/api/ProductType/CreateProductType`, this.newProductType).subscribe((pt) =>{
      console.log(pt);
      
    });
  }
}
