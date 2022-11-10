import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { IProductCategory } from '../interface/IProduct-category';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import {IProduct} from "../interface/IProduct";
import {ISubProductCategory} from "../interface/ISub-Product-Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  headers= new HttpHeaders( {
    "Content-Type":"application/json"
  });
  constructor(private http:HttpClient) { }

  addNewCategoryProduct(id:number,newCategory:IProductCategory):Observable<IProductCategory>{
    let url = `${environment.url.base}/category/add/${id}`;
    console.log("url:"+ url);
    return this.http.post<IProductCategory>(url,newCategory,{headers:this.headers});
  }

  addNewSubCategoryProduct(newSubCategory:ISubProductCategory):Observable<ISubProductCategory> {
    let url = `${environment.url.base}/category/add`;
    console.log("url:" + url);
    return this.http.post<ISubProductCategory>(url, newSubCategory, {headers: this.headers});
  }


}
