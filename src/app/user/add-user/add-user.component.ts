import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {IProductCategory} from "../../interface/IProduct-category";
import {ISubProductCategory} from "../../interface/ISub-Product-Category";
import {IProduct} from "../../interface/IProduct";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {AuthService} from "../../service/auth.service";
import {UserService} from "../../service/user.service";
import {IUser} from "../../interface/IUser";
import {IUserRole} from "../../interface/IUserRole";
import {ERole} from "../../interface/ERole";

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: any = {
    address: "",
    email: "",
    password: "",
    role:null,
    userId: 0,
    username: ""

  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private userService:UserService, private router:Router) { }

  ngOnChange(){

  }
  ngOnInit(): void {
  }

  onSubmit(addData:NgForm): void {
    // const {userId, username, email, password,address,roles } = this.form;

    // console.log("role:" + this.user.role.name);
    this.userService.registerNewEmployee(this.user).subscribe({

      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
    addData.reset();
    this.router.navigate(['/home'])
  }

  cancel() {
    this.router.navigate(['/home'])
  }
}
