
import {environment} from "../../environments/environment";
import {IPurchase} from "../interface/IPurchase";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {ICreatePurchase} from "../interface/ICreatePurchase";
import { Injectable ,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  purchaseSelected = new EventEmitter<IPurchase>();
  openDetail = new EventEmitter<boolean>();

  subject:Subject<IPurchase[]> = new Subject<IPurchase[]>();
  constructor(private http:HttpClient) { }


  //Create a new Purchase
  createPurchase(product: ICreatePurchase) {
    let url = `${environment.url.base}/create/purchase`;
    console.log("url: " + url);
    return this.http.post<IPurchase>(url,product);
  }

  //Get All Purchase with user Id and Purchase Status = "CART" : just add to cart not purchase yet
  getStatusCARTPurchase(userId:number, purchaseStatus:string):Observable<IPurchase[]>{
    let params = new HttpParams().set('purchaseStatus',purchaseStatus);
    let url = `${environment.url.base}/purchases/${userId}/`;

    return this.http.get<IPurchase[]>(url,{params:params});
  }


  updatePurchase(userId: number,purchaseId:number, cartDetail: IPurchase):Observable<IPurchase> {
    let url = `${environment.url.base}/purchase/update/${userId}/${purchaseId}`;
    return this.http.put<IPurchase>(url,cartDetail);
  }

  buy(userId:number,purchaseId:number, purchase:IPurchase):Observable<any>{
    //let params = new HttpParams().set('purchaseStatus',purchaseStatus);
    let url = `${environment.url.base}/buy/${userId}/${purchaseId}`;
    return this.http.put<any>(url, purchase);
  }

  cancel(userId: number, purchaseId: number, purchase: IPurchase):Observable<any> {
    let url = `${environment.url.base}/cancel/${userId}/${purchaseId}`;
    return this.http.put<any>(url, purchase);
  }


  getStatusPurchases(purchaseStatus:string):Observable<IPurchase[]>{
    let params = new HttpParams().set('purchaseStatus',purchaseStatus);
    let url = `${environment.url.base}/purchases/purchase-status/`;

    return this.http.get<IPurchase[]>(url,{params:params});
  }

  updatePurchaseByPurchaseObject(id:number,purchase:IPurchase):Observable<IPurchase>{
    let url= `${environment.url.base}/purchase/pending/update/${id}`;
    return this.http.put<IPurchase>(url, purchase);
  }
}
