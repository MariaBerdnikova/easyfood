import { Injectable } from '@angular/core';
import { AddReceptService } from './add-recept.service';
import { AddingradientService,addIngradient,recID,RText } from './addingradient.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ArrayService {
  reciepts=[]

  constructor(private adr:AddReceptService) { }
  ngOnInit() {
    this.adr.addRec()
    .subscribe(
     res => this.reciepts = res,
     err => console.log(err)
   
     
     )
  }
getOneRec(id):Observable<recID>
{
 return this.reciepts.find(r=>r._id===id)
}
}
