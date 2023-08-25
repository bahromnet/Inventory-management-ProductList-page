import { Injectable } from '@angular/core';
import { Products } from './models/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAllProducts() : Products[]{
    return productsList;
  }

}

let productsList: Products[] = [
  {
      Id: 1,
      Name: "Product 1",
      SKU: "SKU123",
      Category: "Category A",
      Brand: "Brand X",
      Price: 100,
      Unit: "pcs",
      Quantity: 50,
      CreatedBy: "User A",
      Picture: "assets/img/product/product11.jpg"
  },
  {
      Id: 2,
      Name: "Product 2",
      SKU: "SKU456",
      Category: "Category B",
      Brand: "Brand Y",
      Price: 150,
      Unit: "pcs",
      Quantity: 30,
      CreatedBy: "User B",
      Picture: "assets/img/product/product12.jpg"
  },
  {
      Id: 3,
      Name: "Product 3",
      SKU: "SKU789",
      Category: "Category C",
      Brand: "Brand Z",
      Price: 200,
      Unit: "pcs",
      Quantity: 20,
      CreatedBy: "User C",
      Picture: "assets/img/product/product23.jpg"
  },
  {
      Id: 4,
      Name: "Product 4",
      SKU: "SKU101",
      Category: "Category A",
      Brand: "Brand X",
      Price: 50,
      Unit: "pcs",
      Quantity: 100,
      CreatedBy: "User A",
      Picture: "assets/img/product/product35.jpg"
  },
  {
      Id: 5,
      Name: "Product 5",
      SKU: "SKU202",
      Category: "Category B",
      Brand: "Brand Y",
      Price: 120,
      Unit: "pcs",
      Quantity: 40,
      CreatedBy: "User B",
      Picture: "assets/img/product/product36.jpg"
  },
  {
      Id: 6,
      Name: "Product 6",
      SKU: "SKU303",
      Category: "Category C",
      Brand: "Brand Z",
      Price: 180,
      Unit: "pcs",
      Quantity: 25,
      CreatedBy: "User C",
      Picture: "assets/img/product/product45.jpg"
  },
  {
      Id: 7,
      Name: "Product 7",
      SKU: "SKU404",
      Category: "Category A",
      Brand: "Brand X",
      Price: 75,
      Unit: "pcs",
      Quantity: 70,
      CreatedBy: "User A",
      Picture: "assets/img/product/product44.jpg"
  },
  {
      Id: 8,
      Name: "Product 8",
      SKU: "SKU505",
      Category: "Category B",
      Brand: "Brand Y",
      Price: 130,
      Unit: "pcs",
      Quantity: 35,
      CreatedBy: "User B",
      Picture: "assets/img/product/product49.jpg"
  },
  {
      Id: 9,
      Name: "Product 9",
      SKU: "SKU606",
      Category: "Category C",
      Brand: "Brand Z",
      Price: 210,
      Unit: "pcs",
      Quantity: 15,
      CreatedBy: "User C",
      Picture: "assets/img/product/product51.jpg"
  },
  {
      Id: 10,
      Name: "Product 10",
      SKU: "SKU707",
      Category: "Category A",
      Brand: "Brand X",
      Price: 90,
      Unit: "pcs",
      Quantity: 60,
      CreatedBy: "User A",
      Picture: "assets/img/product/product55.jpg"
  },
  {
    Id: 11,
    Name: "Product 1",
    SKU: "SKU123",
    Category: "Category A",
    Brand: "Brand X",
    Price: 100,
    Unit: "pcs",
    Quantity: 50,
    CreatedBy: "User A",
    Picture: "assets/img/product/product1.jpg"
},
{
    Id: 12,
    Name: "Product 2",
    SKU: "SKU456",
    Category: "Category B",
    Brand: "Brand Y",
    Price: 150,
    Unit: "pcs",
    Quantity: 30,
    CreatedBy: "User B",
    Picture: "assets/img/product/product2.jpg"
},
{
    Id: 13,
    Name: "Product 3",
    SKU: "SKU789",
    Category: "Category C",
    Brand: "Brand Z",
    Price: 200,
    Unit: "pcs",
    Quantity: 20,
    CreatedBy: "User C",
    Picture: "assets/img/product/product3.jpg"
},
{
    Id: 14,
    Name: "Product 4",
    SKU: "SKU101",
    Category: "Category A",
    Brand: "Brand X",
    Price: 50,
    Unit: "pcs",
    Quantity: 100,
    CreatedBy: "User A",
    Picture: "assets/img/product/product5.jpg"
},
{
    Id: 15,
    Name: "Product 5",
    SKU: "SKU202",
    Category: "Category B",
    Brand: "Brand Y",
    Price: 120,
    Unit: "pcs",
    Quantity: 40,
    CreatedBy: "User B",
    Picture: "assets/img/product/product6.jpg"
},
{
    Id: 16,
    Name: "Product 6",
    SKU: "SKU303",
    Category: "Category C",
    Brand: "Brand Z",
    Price: 180,
    Unit: "pcs",
    Quantity: 25,
    CreatedBy: "User C",
    Picture: "assets/img/product/product7.jpg"
},
{
    Id: 17,
    Name: "Product 7",
    SKU: "SKU404",
    Category: "Category A",
    Brand: "Brand X",
    Price: 75,
    Unit: "pcs",
    Quantity: 70,
    CreatedBy: "User A",
    Picture: "assets/img/product/product9.jpg"
}
];


