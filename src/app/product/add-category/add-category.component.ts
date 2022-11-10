import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {IProductCategory} from "../../interface/IProduct-category";
import {ISubProductCategory} from "../../interface/ISub-Product-Category";
import {IProduct} from "../../interface/IProduct";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  @Output() eventCloser = new EventEmitter<null>();
  @ViewChild('f', { read: NgForm }) addProductForm!: NgForm;

  id: number | undefined;
  productCategories:IProductCategory[]=[];

  addCategoryProduct : IProductCategory ={
    id: 0,
    productCategoryName: ""
  }
  addSubCategoryProduct : ISubProductCategory ={
    id: 0,
    productCategory: {
      id:0,
      productCategoryName:""
    },
    subProductCategoryName: ""

  }
  private returnAddSubCategoryProduct: ISubProductCategory | undefined;
  private returnAddCategoryProduct: IProductCategory | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService,
              private productService:ProductService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>
      {
        this.id = +params["id"];
        console.log("id: " + this.id );
      }
    );

    this.productService.getProductCategory().subscribe(
      data => this.productCategories = data
    )
  }

  onCancel(){
    this.router.navigate(['/home'])
  }

  onSubmit(form:NgForm){
    console.log("this add-category: "+ this.addCategoryProduct.productCategoryName);
    console.log("this add-sub-category: "+ this.addSubCategoryProduct.subProductCategoryName);

    if(this.id == 1){
      this.categoryService.addNewCategoryProduct(this.id,this.addCategoryProduct).subscribe(
        data => this.returnAddCategoryProduct = data
      )
    }else if(this.id != 1){
      this.categoryService.addNewSubCategoryProduct(this.addSubCategoryProduct).subscribe(
        data => this.returnAddSubCategoryProduct = data
      )
    }


    // this.addProduct = this.resetForm;
    console.log("returnAddCategoryProduct:" + this.returnAddCategoryProduct);
    console.log("returnAddSubCategoryProduct:" + this.returnAddSubCategoryProduct);
    location.reload();
  }
}
