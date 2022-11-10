import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: "",
    email: "",
    password: "",
    address:""
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";

  constructor(private authService: AuthService,
              private router:Router) { }

  ngOnInit(): void {

  }
  ngOnChange(){
    location.reload();
  }

  onSubmit(): void {
    const { username, email, password,address } = this.form;

    this.authService.register(username, email, password,address).subscribe({
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
    this.router.navigate(["/home"]);
  }
}

