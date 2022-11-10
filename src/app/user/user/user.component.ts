import {Component, Input, OnInit} from '@angular/core';
import {PurchaseService} from "../../service/purchase.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IPurchase} from "../../interface/IPurchase";
import {IEmployee} from "../../interface/IEmployee";
import {UserService} from "../../service/user.service";
import {IUser} from "../../interface/IUser";

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayEdit:boolean= false;
  userId:number = 0;
  //register purchase service
  constructor(private userService: UserService, private router:Router,private route: ActivatedRoute) {
  }

  ngOnInit() {

    // this.userId = this.productInput.user.userId;
    // console.log("UserID:" + this.productInput.user.userId)

  }

  @Input() userInput: IUser = {
    address: "",
    email: "",
    password: "",
    role: {
      id:0,
      name:""
    },
    userId: 0, username: ""
  };

  test:boolean = true;

  onSelected() {
    this.userService.userSelected.emit(this.userInput);

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
