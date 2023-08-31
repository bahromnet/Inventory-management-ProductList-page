import { Component } from '@angular/core';
import { IProductType } from '../../models/IProductType';
import { ProductTypeServiceService } from '../../product-type-service.service';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent {
  
  productTypes:IProductType = {
    pageNumber: 0,
    totalPages: 0,
    totalCount: 0,
    items: [],
    hasPreviousPage: false,
    hasNextPage: false
  };

  constructor(private service : ProductTypeServiceService){
    this.service.getAllProductType().subscribe((pt)=>{
      this.productTypes = pt;
    });
  }
}
