import { Component, OnInit } from '@angular/core';
import {PurchaseService} from "../../service/purchase.service";
import {IPurchase} from "../../interface/IPurchase";
import {StorageService} from "../../service/storage.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  newQuantity:number=0;
  userId:number=0;
  purchaseCARTStatus: IPurchase[]  =[];
  subTotalPrice:number = 0;
  totalPrice: number = 0;
  totalTax: number = 0;
  display: boolean = false;
  isLoggedIn:boolean = false;
  purchased:boolean = false;

  constructor(private purchasesService: PurchaseService,
              private storageService: StorageService,
              private router:Router) {}


  ngOnChange(){
    // this.purchasesService.getStatusCARTPurchase(this.userId,"CART")
    //   .subscribe((data) => {
    //     this.purchaseCARTStatus = data;
    //
    //     if (this.purchaseCARTStatus.length > 0) {
    //       this.display = true;
    //       for (let purchase of this.purchaseCARTStatus) {
    //         this.subTotalPrice += (purchase.total);
    //
    //       }
    //       this.totalTax += this.subTotalPrice * 0.1;
    //       this.totalPrice = this.subTotalPrice + this.totalTax;
    //     }
    //   });
    // location.reload();
    // console.log("userId:"+ this.userId);
    // console.log("this.purchaseCARTStatus"+this.purchaseCARTStatus);
  }

  ngOnInit() {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.userId = this.storageService.getUser().id;
    }

    this.purchasesService.getStatusCARTPurchase(this.userId,"CART")
      .subscribe((data) => {
        this.purchaseCARTStatus = data;

        if (this.purchaseCARTStatus.length > 0) {
          this.display = true;
          for (let purchase of this.purchaseCARTStatus) {
            this.subTotalPrice += (purchase.total);

          }
          this.totalTax += this.subTotalPrice * 0.1;
          this.totalPrice = this.subTotalPrice + this.totalTax;
        }
      });
    console.log("userId:"+ this.userId);
    console.log("this.purchaseCARTStatus"+this.purchaseCARTStatus);
   }

  countChangedHandler(quantity: number) {
    this.newQuantity = quantity;
    console.log("count:"+quantity);
  }

  buy() {
    this.purchaseCARTStatus.forEach(purchase => {
      purchase.purchaseStatus = "PENDING";
      this.purchasesService.buy(this.userId, purchase.id, purchase).subscribe(
        data => console.log(data)
      );

      this.purchased = true;
      location.reload();
    })

  }

  cancel() {
    this.purchaseCARTStatus.forEach(purchase => {
      purchase.product.unitsInStock = purchase.product.unitsInStock + purchase.quantity;
      purchase.purchaseStatus = "CANCELED";
      this.purchasesService.cancel(this.userId, purchase.id, purchase).subscribe(
        data => console.log(data)
      );
    })
    this.router.navigate(['/home'])
  }
}
