import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AddtitleService {
  private reurl="http://localhost:3000/api/addTitle"
  constructor(private http: HttpClient) { }
  addTitle(user)
  {
    

    console.log( this.http.post<any>(this.reurl,user))
    return this.http.post<any>(this.reurl,user)
    .pipe(map(user=>{
      localStorage.setItem('currenTitle', JSON.stringify(user));
    return user;
  }));
  }
  
 

}

export class header
{
   id:string;
  title:string;
   email:string;
   type:string;


}//end header