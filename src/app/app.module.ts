import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product/product.component';
import { ProductsComponent } from './product/products/products.component';
import { DetailComponent } from './product/detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app_routing.module";
import { CategoryProductComponent } from './product/category-product/category-product.component';
import { SubCategoryProductComponent } from './product/sub-category-product/sub-category-product.component';
import { AddEditComponent } from './product/update/add-edit.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddCategoryComponent } from './product/add-category/add-category.component';
import {LoginComponent} from "./authorization/login/login.component";
import {RegisterComponent} from "./authorization/register/register.component";
import {ProfileComponent} from "./authorization/profile/profile.component";
import {PurchaseComponent} from "./purchase/purchase/purchase.component";
import {PurchasesComponent} from "./purchase/purchases/purchases.component";
import {DetailPurchaseComponent} from "./purchase/detail-purchase/detail-purchase.component";
import { DetailCartComponent } from './cart/detail-cart/detail-cart.component';
import { CartComponent } from './cart/cart/cart.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserComponent } from './user/user/user.component';
import { UsersComponent } from './user/users/users.component';
import { DetailUserComponent } from './user/detail-user/detail-user.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    CategoryProductComponent,
    SubCategoryProductComponent,
    AddEditComponent,
    AddProductComponent,
    ContactComponent,
    AboutUsComponent,
    AddCategoryComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    PurchaseComponent,
    PurchasesComponent,
    DetailPurchaseComponent,
    DetailCartComponent,
    CartComponent,
    AddUserComponent,
    UserComponent,
    UsersComponent,
    DetailUserComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
