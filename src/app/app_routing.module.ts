import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ProductsComponent} from "./product/products/products.component";
import {CategoryProductComponent} from "./product/category-product/category-product.component";
import {SubCategoryProductComponent} from "./product/sub-category-product/sub-category-product.component";
import {AddProductComponent} from "./product/add-product/add-product.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {AddCategoryComponent} from "./product/add-category/add-category.component";
import {LoginComponent} from "./authorization/login/login.component";
import {RegisterComponent} from "./authorization/register/register.component";
import {ProfileComponent} from "./authorization/profile/profile.component";
import {CartComponent} from "./cart/cart/cart.component";
import {PurchasesComponent} from "./purchase/purchases/purchases.component";
import {UsersComponent} from "./user/users/users.component";
import {AddUserComponent} from "./user/add-user/add-user.component";


const appRoutes:Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:ProductsComponent},
  {path:'products/category/:cid', component:CategoryProductComponent},
  {path:'products/sub-category/:id1/:id2', component:SubCategoryProductComponent},
  {path:'product/add', component:AddProductComponent},
  {path:'contact', component:ContactComponent},
  {path:'about', component:AboutUsComponent},
  {path:'category/add/:id', component:AddCategoryComponent},
  {path:'category/add', component:AddCategoryComponent},
  {path:'purchases/pending', component:PurchasesComponent},
  {path:'cart/:id',component:CartComponent},
  {path:'employees/info', component:UsersComponent},
  {path:'employee/register', component:AddUserComponent},

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent }



]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
