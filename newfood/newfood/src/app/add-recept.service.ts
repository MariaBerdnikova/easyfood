import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AddingradientService,addIngradient,recID,RText } from './addingradient.service';

@Injectable({
  providedIn: 'root'
})
export class AddReceptService {
  private reurl="http://localhost:3000/api/all"
  private inglUrl="http://localhost:3000/api/sngl"
  reciept=[]
  constructor(private http: HttpClient) { 
   //this.headerInfo= new BehaviorSubject<header>(JSON.parse(localStorage.getItem('currenTitle')));
  }
  ngOnInit() {
   
   
    //  this.acRoute.paramMap.subscribe(params => {
    //   this.reciepts.forEach((p: reicept) => {
    //     if (p._id == params._id) {
    //       this.reicept = p;
    
  
  
  
    }//end on init
  addRec()
  {
   
    //console.log( this.http.post<any>(this.reurl)
    return this.http.get<any>(this.reurl)
   // .pipe(map(user=>{
      //localStorage.setItem('currentIngradients', JSON.stringify(user));
   // return user;
  //}));
  }//addTitle
  getOneRec(id:String)
  {
    console.log(id)
    return this.http.get<any>(this.inglUrl+'/'+id)
  }

   getOneRecbyType(type:String)
  {
    console.log(type)
    return this.http.get<any>(this.reurl+'/'+type)
  }
  
  getRec()
  {
    return this.reciept
  }

}
