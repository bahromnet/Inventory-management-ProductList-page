import { Component, OnDestroy, OnInit } from '@angular/core';
import { Products } from '../models/Products';
import { ProductService } from '../product.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
    products!: Products[];
    sunb!:Subscription;
    constructor(public productService:ProductService){}
    ngOnInit(): void {
        console.log("Working Init");
        this.products = this.productService.getAllProducts();
        const pro = interval(1000);
        this.sunb = pro.subscribe((num)=>{
            console.log(num);
            
        });
    }

    ngOnDestroy(): void {
        this.sunb.unsubscribe();
        console.log("Destroy");
        
    }
    

}
