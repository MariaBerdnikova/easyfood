import { Component, OnInit } from '@angular/core';
import { RegService } from '../reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData={}
  constructor(private regis:RegService,private router: Router) { }

  ngOnInit() {
  }
  addUser()
  {
   console.log(this.userData)
   this.regis.adduser(this.userData)
       .subscribe(
         res=>{console.log(res)
        // localStorage.setItem('token',res.token)
         this.router.navigate(["/login"])
        },
         err=>console.log(err)
       )
       
  }
}


