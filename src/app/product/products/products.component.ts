import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../interface/IProduct";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:IProduct[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data => this.products = data
    )

  }

}
