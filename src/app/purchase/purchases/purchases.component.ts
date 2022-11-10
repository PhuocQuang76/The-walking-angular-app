import {Component, Input, OnInit} from '@angular/core';
import {IPurchase} from "../../interface/IPurchase";
import {PurchaseService} from "../../service/purchase.service";

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  // displayDetail:boolean= false;
  purchases:IPurchase[] = [];
  display = false;
  // @ts-ignore
  selectedPurchase: IPurchase  =
    {
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
    }

  // @ts-ignore
  purchase: IPurchase =  {
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

  constructor(private purchaseService:PurchaseService) { }

  ngOnInit(): void {
    this.purchaseService.getStatusPurchases("PENDING")
      .subscribe((data) => {
        this.purchases = data;
      }
      )

    this.purchaseService.purchaseSelected.subscribe(
      (purchase: IPurchase) => {
        this.selectedPurchase = purchase;
        console.log("selectedPurchase userID:"+ this.selectedPurchase.user.userId);
        this.display = true;
      }
    );

  }

  getPendingPurchase() {
    this.purchaseService.getStatusPurchases("PENDING")
      .subscribe((data) => {
        this.purchases = data
      })

  }

  getConfirmPurchase() {
    this.purchaseService.getStatusPurchases("CONFIRMED")
      .subscribe((data) => {
        this.purchases = data
      })

  }

  getDeliveredPurchase() {
    this.purchaseService.getStatusPurchases("DELIVERED")
      .subscribe((data) => {
        this.purchases = data
      })

  }

  getCanceledPurchase() {
    this.purchaseService.getStatusPurchases("CANCELED")
      .subscribe((data) => {
        this.purchases = data
      })

  }

  // editClicked(){
  //   this.displayDetail = !this.displayDetail;
  //   console.log("this.displayEdit:" + this.displayDetail);
  // }
}
