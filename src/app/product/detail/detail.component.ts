import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {IProduct} from "../../interface/IProduct";
import {IPurchase} from "../../interface/IPurchase";
import {AuthService} from "../../service/auth.service";
import {StorageService} from "../../service/storage.service";
import {PurchaseService} from "../../service/purchase.service";
import {runInThisContext} from "vm";

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Output() eventCloser = new EventEmitter<null>();
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  userId:number = 0;
  productId:number = 0;
  isSuccessful:boolean = false;

  constructor(private storageService: StorageService,
              private purchaseService:PurchaseService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.userId = this.storageService.getUser().id;
    }
  }

  @Input() viewProduct:IProduct = {
    id:0,
    productCategory : {
      id:0,
      productCategoryName:""
    },
    subProductCategory : {
      id:0,
      productCategory:{
        id:0,
        productCategoryName:""
      },
      subProductCategoryName:"",

    },
    name:"",
    description:"",
    unitPrice:0,
    imageUrl:"",
    active:true,
    unitsInStock:0,
    dateCreated:"",
    lastUpdated:"",
  }
  closeWindow(){
    this.eventCloser.emit(null);
  }

  createPurchase() {
    console.log("UserId:" + this.userId );
    console.log("ProductId:" + this.viewProduct.id );
    this.purchaseService.createPurchase({"userId":this.userId,"productId":this.viewProduct.id}).subscribe(
      data=> console.log(data)
    );

    this.isSuccessful = true;
    this.eventCloser.emit(null);
  }
}
