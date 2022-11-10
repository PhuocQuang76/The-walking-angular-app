import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {IProductCategory} from "../../interface/IProduct-category";
import {ISubProductCategory} from "../../interface/ISub-Product-Category";
import {IProduct} from "../../interface/IProduct";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() eventCloser = new EventEmitter<null>();
  @ViewChild('f', { read: NgForm }) addProductForm!: NgForm;
  productCategories:IProductCategory[]=[];
  subProductCategories:ISubProductCategory[]=[];
  returnAddedProduct: IProduct | undefined
  categoryIdBindFromHTML: number | undefined ;

  addProduct:IProduct= {
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

  resetForm:IProduct= {
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
    this.router.navigate(['/home'])
  }
  closeWindow(){
    this.eventCloser.emit(null);
  }

  onSubmit(form:NgForm){
    console.log("this add-product product: "+ this.addProduct.name);
    console.log("this add-product product: "+ this.addProduct.productCategory.id);
    console.log("this add-product product: "+ this.addProduct.subProductCategory.id);
    this.productService.addNewProduct(this.addProduct).subscribe(
      data => this.returnAddedProduct = data
    )

    // this.addProduct = this.resetForm;
    console.log("returnAddProduct:" + this.returnAddedProduct);
    location.reload();

  }

}
