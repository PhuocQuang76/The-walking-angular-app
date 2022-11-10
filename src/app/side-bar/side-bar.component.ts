import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from "../service/product.service";
import {ISubProductCategory} from "../interface/ISub-Product-Category";
import {IProductCategory} from "../interface/IProduct-category";

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  productCategories:IProductCategory[] = [];
  subProductCategories:ISubProductCategory[] = [];

  constructor(private productService:ProductService) { }


  ngOnInit(): void {
    this.productService.getProductCategory().subscribe(
      data => this.productCategories = data
    )
    console.log(this.productCategories)
    this.productService.getSubProductCategory().subscribe(
      data => this.subProductCategories = data
    )
    console.log(this.subProductCategories)


  }

}
