import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegService {
  private reurl="http://localhost:3000/api/registration"
  constructor(private http: HttpClient) { }
  adduser(user)
  {
    console.log( this.http.post<any>(this.reurl,user))
    return this.http.post<any>(this.reurl,user)
  }
  
  isLogged()
  {
    return !!localStorage.getItem("token")
  }
  getTocken()
  {
    return localStorage.getItem('token')
  }
}
