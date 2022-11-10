import {IProductCategory} from "./IProduct-category";
import {ISubProductCategory} from "./ISub-Product-Category";

export interface IProduct {
  id:number;
  productCategory:IProductCategory;
  subProductCategory:ISubProductCategory
  name:string;
  description: string;
  unitPrice:number;
  imageUrl:string;
  active:boolean;
  unitsInStock:number;
  dateCreated:string;
  lastUpdated:string;

}
