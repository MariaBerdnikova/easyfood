
import { Component, OnInit } from '@angular/core';
import  {  FormGroup, FormBuilder ,FormControl} from '@angular/forms';

import { AddingradientService,addIngradient,recID,RText } from '../addingradient.service';
import { AddtitleService,header } from '../addtitle.service';
import { Router } from '@angular/router';

import {MatTableModule, MatTableDataSource} from '@angular/material'; 
import { LoginService,Users } from '../login.service';
@Component({
  selector: 'app-addingradients',
  templateUrl: './addingradients.component.html',
  styleUrls: ['./addingradients.component.css']
})
export class AddingradientsComponent implements OnInit {

 dysplayColums=['nameOfIngradient','amount','typeOfAmount']
ingradient =''
amount=''
txt=''
  loggedUser:Users
  createdHeaders:header
  addIngradient:addIngradient
  Rec:recID
  arrayofAreas:Array<any> =[];
  newComponentOfArray:any={};
   typy=[];

   recieptArr={};
     datasource= new MatTableDataSource (RECEPT_HEADER);
     datasourcetxt=new MatTableDataSource(CONT);
       // datasourceIngradients=new MatTableDataSource (  RecHeader ) ;
      //  datasourceText=new MatTableDataSource (  RecHeader ) ;


   addReceptForm:FormGroup;
 
sp=''
typspoon=[ { id:'1', name:'spoon'},          
{id:'2', name:'small spoon'},  
{id:'3', name:'pick'}
];
 constructor(private router: Router,private formbuilder:FormBuilder, private RecSer:AddingradientService,private login:LoginService) { 

 this.loggedUser=this.login.getuseInfo
 this.createdHeaders=this.RecSer.getTitle;
  // this.addReceptForm=this.formbuilder.group({
  //   //  title:new FormControl(''), 
  //    // typer:new FormControl(''),
  //     // text:new FormControl('')
  //     recieptInfo:this.formbuilder.array([this.formbuilder.group({
     
      
  //      nameOfIngradient:[''],
  //     AmountofIngradient:[''],
  //     TypeOfAmount:['']
  //   })])

    //  });

  }
  
 
   addTextarea()
   {
      this.arrayofAreas.push(this.newComponentOfArray)
      this.newComponentOfArray={}
   }

   deleteArea(i)
   {
     console.log(i)
      this.arrayofAreas.splice(i,1)
   }
   onSelectTypes()
   {
      
   }
 returnTypes()
 {
       // return 
  }
  addReceipt()
  {

  }
  ngOnInit() {
  
// {
     
//    nameOfIngradient:"";
//   amount:"";
//     typeOfAmount:"";
// }
  //let ingr:addIngradient[]
 

  }
  addElement() {
   RECEPT_HEADER.push({ nameOfIngradient:this.ingradient, amount: this.amount,   typeOfAmount:this.sp })
  this.datasource = new MatTableDataSource( RECEPT_HEADER);
  //FULL_REC.ingr.push({nameOfIngradient:this.ingradient, amount: this.amount,   typeOfAmount:this.sp})
  //this.datasource = new MatTableDataSource( FULL_REC.ingr);
  }
  

addTitle()
  {
  
  FULL_REC.title=this.createdHeaders.title
  FULL_REC.email=this.createdHeaders.email
  FULL_REC.type=this.createdHeaders.type
  
  RECEPT_HEADER.forEach(i=>{
    FULL_REC.ingr.push (
      {
        "nameOfIngradient":i.nameOfIngradient,
        "amount":i.amount,
        "typeOfAmount":i.typeOfAmount
      })
    

  })

localStorage.setItem('ingr',JSON.stringify(FULL_REC))
        this.router.navigate(["/addreciept"])
      
  }//addTitle
 


}
const CONT:RText[]=[]
const RECEPT_HEADER :addIngradient[]=[]
const FULL_REC=new recID ('','',' ',[],[])
