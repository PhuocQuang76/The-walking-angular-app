import {Component, OnInit, Output, EventEmitter, ViewChild, Input} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {IProduct} from "../../interface/IProduct";
import {NgForm} from "@angular/forms";
import {ProductService} from "../../service/product.service";

import {ISubProductCategory} from "../../interface/ISub-Product-Category";
import {IProductCategory} from "../../interface/IProduct-category";

@Component({
  selector: 'add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  @Output() eventCloser = new EventEmitter<null>();
  @ViewChild('f', { read: NgForm }) slForm!: NgForm;
  id:number=0;
  message:string="";
  errorCheck:boolean= false;
  editMode:boolean = false;
  productCategories:IProductCategory[]=[];
  subProductCategories:ISubProductCategory[]=[];
  returnUpdatedProduct: IProduct | undefined;

  @Input() editInput:IProduct= {
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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProductCategory().subscribe(
      data => this.productCategories = data
    )
    console.log("product Category list: " + this.productCategories);

    this.productService.getSubProductCategory().subscribe(
      data => this.subProductCategories = data
    )

    console.log("sub product Category list: " + this.subProductCategories);
  }


  onCancel(){
    this.eventCloser.emit(null);
  }
  closeWindow(){
    this.eventCloser.emit(null);
  }

  onSubmit(form:NgForm){
    this.productService.updateProduct(this.editInput).subscribe(
      data=> this.returnUpdatedProduct = data
    )
    this.eventCloser.emit(null);

    console.log("returnUPdatedProduct:" + this.returnUpdatedProduct);
    location.reload();

  }

}
