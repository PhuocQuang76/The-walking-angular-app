import {Component, Input, OnInit} from '@angular/core';
import {PurchaseService} from "../../service/purchase.service";
import {IPurchase} from "../../interface/IPurchase";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {relative} from "path";

@Component({
  selector: 'purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  displayEdit:boolean= false;
 userId:number = 0;
  //register purchase service
  constructor(private purchaseService: PurchaseService, private router:Router,private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.userId = this.productInput.user.userId;
    console.log("UserID:" + this.productInput.user.userId)

  }

  // @ts-ignore
  @Input() productInput: IPurchase = {
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

  test:boolean = true;

  onSelected() {
    this.purchaseService.purchaseSelected.emit(this.productInput);

  }

  editClicked(){
    this.displayEdit = !this.displayEdit;
    console.log("this.displayEdit:" + this.displayEdit);
  }

  showEdit(){
    this.displayEdit = !this.displayEdit;
    console.log("this.displayEdit:" + this.displayEdit);
  }
}
