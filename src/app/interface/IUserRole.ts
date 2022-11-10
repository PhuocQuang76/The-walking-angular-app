import {IRole} from "./IRole";

export interface IUserRole{
  userId:number;
  username:string,
  role:Set<IRole>,
  password:string,
  email:string,
  address:string,
  dateOrdered:Date,
  lastUpdated:Date,

}
