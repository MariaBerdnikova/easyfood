import { Component, OnInit } from '@angular/core';
import { AddReceptService } from '../add-recept.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
  selector: 'app-meat',
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.css']
})
export class MeatComponent implements OnInit {
  type: string;
  reciepts=[]
  constructor(private router: Router,private route:ActivatedRoute,private allrec:AddReceptService) { }

  ngOnInit() {
       
  //this.type=this.route.snapshot.paramMap.get("type")
  this.route.paramMap.subscribe(params => {
    this.type = params.get("type")
    this.allrec.getOneRecbyType(this.type)
    .subscribe(
     res => this.reciepts = res,
     err => console.log(err)
    )
  })
 

  
  }//on init
  showDetails(recID:String)
  {

    this.router.navigate(["/sngl",recID])
  }
}
