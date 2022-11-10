import {IRole} from "./IRole";

export interface IUser{
  userId:number;
  username:string,
  role:IRole,
  password:string,
  email:string,
  address:string
}
