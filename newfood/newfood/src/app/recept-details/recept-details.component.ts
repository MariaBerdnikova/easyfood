import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AddReceptService } from '../add-recept.service';
import { AddingradientService,addIngradient,recID,RText } from '../addingradient.service';
import { ArrayService } from '../array.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-recept-details',
  templateUrl: './recept-details.component.html',
  styleUrls: ['./recept-details.component.css']
})
export class ReceptDetailsComponent implements OnInit {
  reciepts=[]

id:String
rec=[this.id]

  constructor(private route:ActivatedRoute,private allrec:AddReceptService) { 
    
  }

 ngOnInit() {
    
    //)
    
  this.id=this.route.snapshot.paramMap.get("id")
  // this.route.paramMap.subscribe(params => {
  //   this.id = params.get("id")
  
  //})

  this.allrec.getOneRec(this.id)
  .subscribe(
   res => this.reciepts = res,
   err => console.log(err)
  )
    // this.allrec.addRec()
    // .subscribe(
    //  res => this.reciepts = res,
    //  err => console.log(err)
    //  )

    
    // this.rec= this.reciepts.find(r=>r._id==this.id)
     //console.log(this.rec)
  
  
    }//end on init

  //  getRec():void
  //  {
  //   // this.route.paramMap.subscribe(params => {
  //   //     this.id = params.get("id");
  //   //     this.rec = this.reciepts.find(x=>x._id=="5ddd4f9f150deb2fc0109ca9")
  //   // })

  //   let result = this.reciepts.filter(e => {
  //     return this.rec.includes(e.id);
  //   }).map(person => ({
  //     value: person._id,
  //     text: "person.title"
  //   }));
  //   console.log(result)

  // }
  }
