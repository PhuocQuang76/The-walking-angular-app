import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPurchase} from "../../interface/IPurchase";
import {IProduct} from "../../interface/IProduct";
import {IUser} from "../../interface/IUser";
import {PurchaseService} from "../../service/purchase.service";
import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'detail-cart',
  templateUrl: './detail-cart.component.html',
  styleUrls: ['./detail-cart.component.css']
})
export class DetailCartComponent implements OnInit {
  @Output() countChanged: EventEmitter<number> =   new EventEmitter();

  tax:number = 0;
  total:number = 0;
  isLoggedIn:boolean=false;
  userId:number = 0;
  initialUnitInStock:number = 0;


  // @ts-ignore
  @Input() cartDetail: IPurchase ={
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
    total: 0
  };
  constructor(private purchaseService: PurchaseService,
              private storageService:StorageService) { }

  ngOnChanges(){
    // this.tax = Number((this.cartDetail.price * this.quantity * 0.1).toFixed(2));
    this.total = this.cartDetail.price * this.cartDetail.quantity;
  }
  ngOnInit(): void {
    this.initialUnitInStock = this.cartDetail.product.unitsInStock;
    this.isLoggedIn = this.storageService.isLoggedIn();
    console.log(":"+this.isLoggedIn);
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.userId = user.id;
    }
  }

  increase() {
    console.log("start increase:");
    //this.countChanged.emit(this.cartDetail.quantity);
    if(this.cartDetail.quantity < this.cartDetail.product.unitsInStock ){
      this.cartDetail.quantity +=1;
      this.total = (this.cartDetail.price * this.cartDetail.quantity );
      //this.cartDetail.quantity = this.cartDetail.quantity;
     // this.cartDetail.product.unitsInStock -= this.cartDetail.quantity;
      this.cartDetail.product.unitsInStock -= 1;
      this.cartDetail.total = this.total;
      console.log("total:"+  this.cartDetail.total);
      console.log("quantity:"+ this.cartDetail.quantity);
      console.log("unitInnStock:"+ this.cartDetail.product.unitsInStock);
      this.purchaseUpdate();
      location.reload();
    }

  }
  decrease() {
    console.log("start decrease:");
    //this.countChanged.emit(this.cartDetail.quantity);
    if(this.cartDetail.quantity > 0){
      this.cartDetail.quantity -=1;
      this.total = (this.cartDetail.price * this.cartDetail.quantity );

      //this.cartDetail.quantity =  this.cartDetail.quantity;
      //this.cartDetail.product.unitsInStock -= this.cartDetail.quantity;
      this.cartDetail.product.unitsInStock += 1;
      this.cartDetail.total = this.total;
      console.log("total:"+  this.cartDetail.total);
      console.log("quantity:"+ this.cartDetail.quantity);
      console.log("unitInnStock:"+ this.cartDetail.product.unitsInStock);
      this.purchaseUpdate();
      location.reload();

    }
  }
  purchaseUpdate(){
    this.purchaseService.updatePurchase(this.userId,this.cartDetail.id, this.cartDetail).subscribe(
      data => this.cartDetail = data
    );

  }
}
