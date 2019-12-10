import { Component, OnInit } from '@angular/core';
import { AddReceptService } from '../add-recept.service';
import { Router } from '@angular/router';
import {Observable} from "rxjs"
@Component({
  selector: 'app-full-reciept',
  templateUrl: './full-reciept.component.html',
  styleUrls: ['./full-reciept.component.css']
})
export class FullRecieptComponent implements OnInit {
  reciepts=[]
  constructor(private router: Router,private allrec:AddReceptService ) { }

  ngOnInit() {
   this.allrec.addRec()
   .subscribe(
    res => this.reciepts = res,
    err => console.log(err)

    
    )
 
  
  
  }
   showDetails(recID:String)
   {

     this.router.navigate(["/sngl",recID])
   }
}
