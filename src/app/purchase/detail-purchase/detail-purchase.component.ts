import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PurchaseService} from "../../service/purchase.service";
import {IPurchase} from "../../interface/IPurchase";
import {Router} from "@angular/router";

@Component({
  selector: 'detail-purchase',
  templateUrl: './detail-purchase.component.html',
  styleUrls: ['./detail-purchase.component.css']
})
export class DetailPurchaseComponent implements OnInit {
  @Output() eventCloser = new EventEmitter<null>();
  tax:number = 0;
  total:number = 0;
  subTotal:number = 0;
  initialPurchaseStatus: string ="";
  userId: number = 0;
  purchaseId: number = 0;
  isSuccessful :boolean = false;

  constructor(private purchaseService:PurchaseService,
  private router:Router) { }

  ngOnChanges(){
    // this.submitButton = true;
    this.subTotal = Number((this.input.price * this.input.quantity).toFixed(2));
    this.tax = Number((this.subTotal * 0.1).toFixed(2));
    this.total = this.subTotal + this.tax;

    this.initialPurchaseStatus = this.input.purchaseStatus;
    // this.userId = this.input.user;
    console.log("UserID:" + this.input.user.userId)
    this.purchaseId = this.input.id;
  }



  ngOnInit() {
    this.initialPurchaseStatus = this.input.purchaseStatus;
    this.userId = this.input.user.userId;
    console.log("UserID:" + this.input.user.userId)
    this.purchaseId = this.input.id;
  }

  // @ts-ignore
  @Input() input:IPurchase = {
    // dateCreated: undefined,
    id: 0,
    user: {
      userId: 0,
      role:{
        id:0,
        name:""
      },
      password:"",
      username: "",
      email: "",
      address: ""
    },
    purchaseStatus:"",
    product: {
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
    },
    quantity: 0,
    price:0,
    total: 0,

  };
  closeWindow(){
    this.eventCloser.emit(null);
  }

  submit() {
    this.purchaseService.updatePurchaseByPurchaseObject(this.purchaseId,this.input).subscribe(
      data => console.log(data)
    )
    this.initialPurchaseStatus = this.input.purchaseStatus;
    this.isSuccessful = true;

  }

  cancel() {
    // this.displayDetail = false;
    this.input.purchaseStatus = this.initialPurchaseStatus;

  }
}

