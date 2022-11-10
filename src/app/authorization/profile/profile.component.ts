import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../service/storage.service";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../service/auth.service";


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // @ts-ignore
  currentUser: IUser ={
      address: "",
      email: "",
      password: "",
      role:[{id:0,name:""}],
      userId: 0,
      username: "",
      dateOrdered:null,
      lastUpdated:null
  };

  userId:number = 0;
  isEdit : boolean = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  username:string = "";
  password:string = "";

  constructor(private storageService: StorageService,
              private userService:UserService,
              private authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
    this.userId = this.storageService.getUser().id;
    this.userService.findUserById(this.userId).subscribe(
      data => this.currentUser = data
    )
  }


  cancel() {
    this.router.navigate(['/home'])
  }

  onSubmit(addData: NgForm) {
    this.isEdit = !this.isEdit;
    this.userService.editUserDetail(this.currentUser).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(["/login"]);
        this.authService.logout();

      },

      error: err => {
        this.userService.findUserById(this.userId).subscribe(
          data => this.currentUser = data
        )
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
      }

    });

    this.router.navigate(["/login"]);

  }


  edit() {
    this.isSuccessful = false;
    this.isSignUpFailed = false;
    this.errorMessage = "";
    this.isEdit = !this.isEdit;

  }
}
