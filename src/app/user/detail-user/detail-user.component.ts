import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PurchaseService} from "../../service/purchase.service";
import {Router} from "@angular/router";
import {IPurchase} from "../../interface/IPurchase";
import {IUser} from "../../interface/IUser";
import {NgForm} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {IRole} from "../../interface/IRole";
import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  @Output() eventCloser = new EventEmitter<null>();
  tax:number = 0;
  total:number = 0;
  subTotal:number = 0;
  initialPurchaseStatus: string ="";
  userId: number = 0;
  purchaseId: number = 0;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  deleteReturn:number = 0;
  isEdit:boolean = false;

  constructor(private purchaseService:PurchaseService,
              private storageService : StorageService,
              private userService:UserService,
              private router:Router) { }

  ngOnChanges(){
  }

  ngOnInit() {
    this.userId = this.storageService.getUser().id;
  }

  @Input() input:IUser = {
    address: "",
    email: "",
    password: "",
    role: {
      id:0,
      name:""
    },
    userId: 0,
    username: ""
  };


  closeWindow(){
    this.eventCloser.emit(null);
  }

  onCancel(){
    this.eventCloser.emit(null);
  }

  onSubmit(form:NgForm){
    this.userService.updateEmployeeDetail(this.input).subscribe({
      next: data => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
    },
      error: err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    }
  });

    // this.addProduct = this.resetForm;
    //location.reload();

  }

  onDelete() {

    this.userService.deleteUser(this.input.userId).subscribe(
      data => this.deleteReturn = data

    )
    location.reload();
  }

  edit() {
    this.isEdit = !this.isEdit;
  }
}

