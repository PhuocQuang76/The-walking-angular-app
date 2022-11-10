import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router:Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      `${environment.url.AUTH_API}`+ 'signin',{username,  password}, httpOptions);
  }

  register(username: string, email: string, password: string, address:string): Observable<any> {
    return this.http.post(
      `${environment.url.AUTH_API}` + 'signup',
      {username, email, password,address}, httpOptions);
  }

  // logout(): Observable<any> {
  //   // console.log(1);
  //   return this.http.post(`${environment.url.AUTH_API}` + 'signout', { }, httpOptions);
  // }

  logout(): void {
    // console.log(1);
    // return this.http.post(AUTH_API + 'signout', { }, httpOptions);
    sessionStorage.setItem("auth-user","");
    // this.router.navigate(['/home']);
    location.reload();
  }
}
