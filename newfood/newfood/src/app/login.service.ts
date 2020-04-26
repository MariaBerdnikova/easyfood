import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


export class Users{
  email:  string;
  username:  string;
  password:string;
  salt:string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private reurl="http://localhost:3000/api/login"
  private userInfo:BehaviorSubject<Users>
  constructor(private http: HttpClient,private router: Router) {
   
   this.userInfo= new BehaviorSubject<Users>(JSON.parse(localStorage.getItem('currentUser')));
  }

  public get getuseInfo():Users
  {
return this.userInfo.value
  }

  createLogin(user)
  {
    return this.http.post<any>(this.reurl,user)
    .pipe(map(user=>{
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }));
    
  }

  isLogged()
  {
    return !!localStorage.getItem('currentUser')
  }
  getTocken()
  {
    return localStorage.getItem('currentUser')
  }

  logout()
  {
    localStorage.removeItem('currentUser');
    this.router.navigate(["/login"])

  }
}
