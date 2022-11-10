import {IProductCategory} from "./IProduct-category";


export interface ISubProductCategory {
  id:number;
  subProductCategoryName:string;
  productCategory:IProductCategory;
}
