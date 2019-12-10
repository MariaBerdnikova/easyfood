import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { AddtitleService,header } from './addtitle.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddingradientService {
  private headerInfo:BehaviorSubject<header>

  private reurl="http://localhost:3000/api/addIngradient"

  constructor(private http: HttpClient) { 
    this.headerInfo= new BehaviorSubject<header>(JSON.parse(localStorage.getItem('currenTitle')));
  }
  adduser(user)
  {
    console.log( this.http.post<any>(this.reurl,user))
    return this.http.post<any>(this.reurl,user)
  }

public get getTitle():header
{
  
  return  this.headerInfo.value


}//getTitle

addTitle(user)
  {
  
    console.log( this.http.post<any>(this.reurl,user))
    return this.http.post<any>(this.reurl,user)
    .pipe(map(user=>{
      //localStorage.setItem('currentIngradients', JSON.stringify(user));
    return user;
  }));
  }//addTitle
 


}


export class addIngradient
{
  
 

  nameOfIngradient:String;
  amount:String;
  typeOfAmount:String;


}

export class recID
{
  
 
 id:String
 title:String;
 email:String;
 type:String;
 ingr:addIngradient[];
 content:RText[];
 constructor(title:String,email:String,type:String,ingr:addIngradient[],content:RText[])
 {
this.title=title
this.email=email
this.type=type
this.ingr=ingr
this.content=content

 }//end constructor
}
 export class RText
 {

 
      paragraph:String
 }  
   
    
     
 
