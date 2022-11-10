
import {IProduct} from "./IProduct";
import {IUser} from "./IUser";

export interface IPurchase {
  id:number,
  user:IUser;
  purchaseStatus:string;
  product:IProduct,
  quantity:number,
  price:number,
  total:number,
  dateCreated:Date,
  lastUpdated:Date

}
