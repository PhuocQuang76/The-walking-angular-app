import { Component, OnInit } from '@angular/core';
import {IProduct} from "../interface/IProduct";
import {ProductService} from "../service/product.service";
import {StorageService} from "../service/storage.service";
import {AuthService} from "../service/auth.service";
import {LocalStorageService} from "../service/local-storage.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  products:IProduct[] = [];
  roles: string[] = [];
  userId:number=0;
  isLoggedIn = false;
  showOwnerBoard = false;
  showEmployeeBoard = false;
  username?: string = "user";
  countCartItem:number= 0;

  constructor(private productService:ProductService,
              private storageService: StorageService,
              private authService: AuthService,
              private localStorageService:LocalStorageService) { }


  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
    console.log(1 + ":" + this.isLoggedIn);
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.userId = user.id;

      this.showOwnerBoard = this.roles.includes('OWNER');
      console.log(this.showOwnerBoard);
      this.showEmployeeBoard = this.roles.includes('EMPLOYEE');
      console.log(this.showEmployeeBoard);
      this.username = user.username;
    }

  }
  ngOnChange(){
    //To reference later
    // this.localStorage.setStatus(true);
    // this.localStorage.watchStorage().subscribe(() => {
    //   this.updatedStatus = this.localStorage.getStatus();
    // })
  }

  logout(): void {
    console.log(2);
    this.authService.logout();


    window.location.reload();
  }

}
