import { Role } from "./Role";

export interface IRoles{
    pageNumber:number;
    totalPages:number;
    totalCount:number;
    items:Role[];
    hasPreviousPage:boolean;
    hasNextPage:boolean;
}