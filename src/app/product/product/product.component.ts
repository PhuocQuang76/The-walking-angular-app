import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../interface/IProduct";
import {StorageService} from "../../service/storage.service";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  displayEdit:boolean= false;
  constructor(private storageService:StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      console.log("role:" + this.roles);
    }
  }

  isclicked: boolean = false;
  @Input() index: number = 0;

  @Input() productInput:IProduct
    = {
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

  clicked(){
    this.isclicked = !this.isclicked;

    console.log(this.isclicked);
  }


  showEdit(){
    this.displayEdit = !this.displayEdit;
    console.log("this.displayEdit:" + this.displayEdit);
  }

  editClicked(){
    this.displayEdit = !this.displayEdit;
    console.log("this.displayEdit:" + this.displayEdit);
  }

}
