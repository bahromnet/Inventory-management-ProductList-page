import { Component, OnInit } from '@angular/core';
import { ProductType } from 'src/app/models/ProductType';
import { ProductTypeServiceService } from 'src/app/product-type-service.service';

@Component({
  selector: 'app-product-type-byid',
  templateUrl: './product-type-byid.component.html',
  styleUrls: ['./product-type-byid.component.css']
})
export class ProductTypeByidComponent implements OnInit {

  id:string = 'f24cdd31-312c-47c7-9aa1-a262a8730f92';
  productType!:ProductType;

  constructor(private service : ProductTypeServiceService){ }

  ngOnInit(): void {
    this.service.getByIdProductType(this.id).subscribe((pt) =>{
      this.productType = pt;
      console.log(this.productType.name);
      
    });
  }
}
