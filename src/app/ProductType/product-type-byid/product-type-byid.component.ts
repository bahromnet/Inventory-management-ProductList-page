import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductType } from 'src/app/models/ProductType';
import { ProductTypeServiceService } from 'src/app/product-type-service.service';

@Component({
  selector: 'app-product-type-byid',
  templateUrl: './product-type-byid.component.html',
  styleUrls: ['./product-type-byid.component.css']
})
export class ProductTypeByidComponent implements OnInit {

  id!:string;
  productType!:ProductType;
  constructor(private service : ProductTypeServiceService, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.service.getByIdProductType(this.id).subscribe((pt) => {
        this.productType = pt;
      });
    });
  }
}
