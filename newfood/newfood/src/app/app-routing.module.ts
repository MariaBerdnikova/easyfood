import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullRecieptComponent } from './full-reciept/full-reciept.component';
import { RegisterComponent } from './register/register.component';
import { AddingradientsComponent } from './addingradients/addingradients.component';
import { AddrecieptComponent } from './addreciept/addreciept.component';
import { LoginComponent } from './login/login.component';
import { AddTitleComponent } from './add-title/add-title.component';
import { AddReceptComponent } from './add-recept/add-recept.component';
import { ReceptDetailsComponent } from './recept-details/recept-details.component';
import { MeatComponent } from './meat/meat.component';


const routes: Routes = [

  {
    path:'',
    redirectTo:'/allreceipts',
    pathMatch:'full'
    },
  {
  path:'allreceipts',
  component:FullRecieptComponent
  },
  {
    path:'register',
    component:RegisterComponent
    },
    
      {
        path:'addingrdients',
        component:AddingradientsComponent
        },
        {
          path:'addreciept',
          component:AddReceptComponent,
         // canActivate:[AuthGuard]
          },  
          {
            path:'login',
            component:LoginComponent
            }   ,
                
            {
              path:'addTitle',
              component:AddTitleComponent
              }  ,
             
                {
                  path:'sngl/:id',
                  component:ReceptDetailsComponent
                  }  ,
                  {
                    path:'all/:type',
                    component:MeatComponent 
                    } ,
             
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
