import { ProductType } from "./ProductType";

export interface IProductType{
    pageNumber:number;
    totalPages:number;
    totalCount:number;
    items:ProductType[];
    hasPreviousPage:boolean;
    hasNextPage:boolean;
}