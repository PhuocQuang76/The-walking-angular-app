import { Component, OnInit } from '@angular/core';
import {IPurchase} from "../../interface/IPurchase";
import {PurchaseService} from "../../service/purchase.service";
import {IUser} from "../../interface/IUser";
import {IEmployee} from "../../interface/IEmployee";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  // displayDetail:boolean= false;
  users:IUser[] = [];
  display = false;
  // @ts-ignore
  selectedEmployee: IUser  ={

  }


  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUserByRoleId(2)
      .subscribe((data) => {
          this.users = data;
        }
      )

    // this.purchaseService.purchaseSelected.subscribe(
    //   (purchase: IPurchase) => {
    //     this.selectedPurchase = purchase;
    //     console.log("selectedPurchase userID:"+ this.selectedPurchase.user.userId);
    //     this.display = true;
    //   }
    // );

  }

  getOwnerList() {
    this.userService.getAllUserByRoleId(1)
      .subscribe((data) => {
        this.users = data
      })
    this.users.forEach(u => {
      console.log("userId:" + u.userId)
    })

  }

  getEmployeeList() {
    this.userService.getAllUserByRoleId(2)
      .subscribe((data) => {
        this.users = data
      })
  }
}
