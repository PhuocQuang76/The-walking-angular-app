import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../interface/IProduct";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'sub-category-product',
  templateUrl: './sub-category-product.component.html',
  styleUrls: ['./sub-category-product.component.css']
})
export class SubCategoryProductComponent implements OnInit {

  subCategoryProducts:IProduct[] = [];
  id1:number = 0;
  id2:number = 0;
  constructor(private productService:ProductService, private router : Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>
      {
        this.id1 = +params["id1"];
        this.id2 = +params["id2"];
        console.log("id1: " + this.id1 + " id2: " + this.id2);
        this.findProductByCategoryId(this.id1,this.id2);
      }
    );
  }

  private findProductByCategoryId(id1: number, id2:number) {
    this.productService.findProductByCategoryIdAndSubCategoryId(id1,id2).subscribe(
      (data: IProduct[]) => this.subCategoryProducts = data
    )
    console.log("categoryProducts: " + this.subCategoryProducts)
  }
}
