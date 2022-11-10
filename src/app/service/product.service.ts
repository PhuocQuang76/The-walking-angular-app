import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../interface/IProduct";
import {environment} from "../../environments/environment";

import {ISubProductCategory} from "../interface/ISub-Product-Category";
import {IProductCategory} from "../interface/IProduct-category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  headers= new HttpHeaders( {
    "Content-Type":"application/json"
  });
  constructor(private http:HttpClient) { }

  //Get all product
  getProducts(): Observable<IProduct[]>{
    let url = `${environment.url.base}/products`;
    return this.http.get<IProduct[]>(url);
  }

  //get All Product Category
  getProductCategory():Observable<IProductCategory[]>{
    let url= `${environment.url.base}/category/products`;
    return this.http.get<IProductCategory[]>(url);
  }

  getSubProductCategory():Observable<ISubProductCategory[]>{
    let url= `${environment.url.base}/sub-category/products`;
    return this.http.get<ISubProductCategory[]>(url);
  }

  findProductByCategoryId(cid: number):Observable<IProduct[]> {
    let url= `${environment.url.base}/products/category/${cid}`;
    console.log("url" + url);
    return this.http.get<IProduct[]>(url);
  }

  findProductByCategoryIdAndSubCategoryId(id1: number, id2:number):Observable<IProduct[]> {
    let url= `${environment.url.base}/products/sub-category/${id1}/${id2}`;
    console.log("url" + url);
    return this.http.get<IProduct[]>(url);
  }

  findProductById(id:number):Observable<IProduct>{
    let url = `${environment.url.base}/product/${id}`;
    console.log("url: " + url);
    return this.http.get<IProduct>(url);
  }


  addNewProduct(newProduct: IProduct) {
    let url=`${environment.url.base}/product/add`;
    console.log("url:"+ url);
    return this.http.post<IProduct>(url,newProduct);
  }

  updateProduct(editInput: IProduct) {
    let url = `${environment.url.base}/product/update`;
    console.log("url:"+ url);
    return this.http.put<IProduct>(url,editInput);
  }
}
