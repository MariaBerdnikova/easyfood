import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginData={}
  constructor(private Login: LoginService,private router: Router) { }

  ngOnInit() {
  }
  LoginUser()
  {
    //console.log(this.LoginData)
    this.Login.createLogin(this.LoginData)
    .subscribe(
      res=>{console.log(res)
        this.router.navigate(["/addTitle"])
 

     //localStorage.setItem('token',res.email);
      //  this.router.navigateByUrl('/addricept')
       },
      err=>console.log(err)
    )
    
  }

}
