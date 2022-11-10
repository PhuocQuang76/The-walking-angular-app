import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../interface/IProduct";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit {
  categoryProducts:IProduct[] = [];
  cid:number = 0;
  constructor(private productService:ProductService, private router : Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>
      {
        this.cid= +params["cid"];
        console.log("cid:" + this.cid);
        this.findProductByCategoryId(this.cid);
      }
    );
  }

  private findProductByCategoryId(cid: number) {
    this.productService.findProductByCategoryId(cid).subscribe(
      (data: IProduct[]) => this.categoryProducts = data
    )
    console.log("categoryProducts: " + this.categoryProducts)
  }

}

// id: number = 0;
// editMode = false;
// // productForm : FormGroup;
// // product:IProduct ={
//
// // };
// constructor(private route: ActivatedRoute,
//   private router: Router,
//   private productService:ProductService) { }
// //
// ngOnInit(): void {
  //   this.route.params
  //     .subscribe(
  //       (params:Params) => {
  //         this.id = +params['id'];
  //         this.editMode = params['id'] !=null;
  //         this.initForm();
  //         console.log('ProductForm');
  //       }
//   //     );
// }
//
// private initForm() {
//   let product;
//   this.productService.findProductByProductId(this.id).subscribe(
//     data => product = data
//   )
//   if(this.editMode){
//
//   }
// }
