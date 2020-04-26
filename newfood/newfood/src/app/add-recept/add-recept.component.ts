import { Component, OnInit } from '@angular/core';
import { AddingradientService,addIngradient,recID,RText } from '../addingradient.service';
import {MatTableModule, MatTableDataSource} from '@angular/material'; 
import { AddReceptService } from '../add-recept.service';


@Component({
  selector: 'app-add-recept',
  templateUrl: './add-recept.component.html',
  styleUrls: ['./add-recept.component.css']
})
export class AddReceptComponent implements OnInit {
  dysplayColumsText=['paragraph']
  txt=''
  datasourcetxt=new MatTableDataSource(CONT);
  constructor( private addRec:AddReceptService, private recc:AddingradientService ) { }

  
  
  
  ngOnInit() {
  }
  addText() {
    CONT.push({paragraph:this.txt})
   this.datasourcetxt = new MatTableDataSource( CONT);
   //FULL_REC.ingr.push({nameOfIngradient:this.ingradient, amount: this.amount,   typeOfAmount:this.sp})
   //this.datasource = new MatTableDataSource( FULL_REC.ingr);
   }

   addTitle()
   {
   var REC=JSON.parse(localStorage.getItem("currenTitle"))
   
   CONT.forEach(i=>{
    REC.content.push (
       {
         "paragraph":i.paragraph,
         
       })
     
 
   })

       this.recc.addTitle( REC)
  

 .subscribe(
         res=>{console.log(res)
      
         },
         err=>console.log(err)
        ) 



}


}
const CONT:RText[]=[]
