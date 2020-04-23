import { Injectable } from '@angular/core';
import { CanActivate,Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
 constructor(private login:LoginService, private router:Router)
 {

 }
  canActivate(): boolean
  {
    console.log("CanActivate")
   if(this.login.isLogged())
   {

    return true

   }
   else
   {
     this.router.navigate(['/login'])
     return false
   }
  }
  
}
