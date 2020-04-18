import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


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
  constructor(private http: HttpClient) {
   
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
    return !!localStorage.getItem('token')
  }
  getTocken()
  {
    return localStorage.getItem('token')
  }
}
