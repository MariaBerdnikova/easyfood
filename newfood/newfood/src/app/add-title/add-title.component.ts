import { Component, OnInit } from '@angular/core';
import { Users, LoginService } from '../login.service';
import { AddtitleService ,header} from '../addtitle.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { AddingradientService,addIngradient,recID,RText } from '../addingradient.service';

@Component({
  selector: 'app-add-title',
  templateUrl: './add-title.component.html',
  styleUrls: ['./add-title.component.css']
})
export class AddTitleComponent implements OnInit {
  loggedUser:Users
 
  tp=''
   typees=[ { id:'1', name:'Soup'},          
   {id:'2', name:'Meat'},  
  {id:'3', name:'Fish'}
];
addReceptForm:FormGroup;
Rec:recID

type=[]

title=''
email=''
header:header

titleData={}
  constructor(private adding:AddingradientService,private router: Router,private login:LoginService,private addTitleService:AddtitleService) { 
    this.loggedUser=this.login.getuseInfo
    this.email=this.loggedUser.email
  // this.addReceptForm=this.formbuilder.group({
  //   //  title:new FormControl(''), 
  //    // typer:new FormControl(''),
  //     // text:new FormControl('')
  //      title:[''] ,
  //      email:[''],
  //      type:['']
    //  });
     
    


     of(this. returnTypes()).subscribe(type => {
      this.type = type;
      this.addReceptForm.controls.orders.patchValue(this.type[0].name);
    });
  }
 
  ngOnInit() {
  this.header=
  {
   id:"",
    title: "",
   email: this.loggedUser.email,
   type:"Soup",
   
  };//end header

  }
  
  
  addTitle()
  {
 // this.addTitleService.addTitle(this.header)
 //FULL_REC.title.push(this.header)
 FULL_REC.id=this.header.id


 FULL_REC.title=this.header.title;
 FULL_REC.email=this.header.email
 FULL_REC.type=this.header.type
  
 
 localStorage.setItem('currenTitle', JSON.stringify( FULL_REC));


//  .subscribe(
//          res=>{console.log(res)
          //localStorage.setItem('titleID',res.token)
        //  },
        //  err=>console.log(err)
        // )
        this.router.navigate(["/addingrdients"])
  }//addTitle
 
  returnTypes()
 {
        return [ { id:'1', name:'Soup'},          
          {id:'2', name:'Meat'},  
         {id:'3', name:'Fish'}
     ];
  }


}

// export class header
// {
//    title:string;
//    email:string;
//    type:string;


// }//end header

const FULL_REC=new recID ('','',' ',[],[])