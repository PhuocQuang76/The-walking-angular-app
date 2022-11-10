import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {IPurchase} from "../interface/IPurchase";
import {IEmployee} from "../interface/IEmployee";
import {IUser} from "../interface/IUser";
import {IUserRole} from "../interface/IUserRole";

const API_URL = 'http://localhost:7002/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userSelected = new EventEmitter<IUser>();

  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'customer', { responseType: 'text' });
  }

  getEmployeeBoard(): Observable<any> {
    return this.http.get(API_URL + 'employee', { responseType: 'text' });
  }

  getOwnerBoard(): Observable<any> {
    return this.http.get(API_URL + 'owner', { responseType: 'text' });
  }

  getAllUserByRoleId(roleId:number):Observable<any[]>{
    let params = new HttpParams().set('roleId',roleId);
    let url = `${environment.url.base}/employees/info/`;
    return this.http.get<any[]>(url,{params:params});
  }

  updateUserDetail(user:IUser): Observable<any>{
    let url = `${environment.url.base}/user/update/`;
    return this.http.put<any>(url,user);
  }

  updateEmployeeDetail(user:IUser): Observable<any>{
    let url = `${environment.url.base}/employee/update/`;
    return this.http.put<any>(url,user);
  }

  registerNewEmployee(user:any):Observable<any>{
    let url = `${environment.url.base}/employee/register`;
    return this.http.post<any>(url,user);
  }

  findUserById(userId:number):Observable<any>{
    let url = `${environment.url.base}/user/${userId}`;
    return this.http.get<any>(url);
  }


  findUserAddressByUserId(userId:number): Observable<string>{
    let url = `${environment.url.base}/user/address/${userId}`;
    return this.http.get<string>(url);
  }

  editUserDetail(user:IUser):Observable<IUser>{
    let url = `${environment.url.base}/user/update/`;
    return this.http.put<IUser>(url,user);
  }

  deleteUser(userId: number):Observable<number> {
    let url=`${environment.url.base}/user/delete/${userId}`;
    return this.http.delete<number>(url);

  }
}
