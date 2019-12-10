import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddingradientsComponent } from './addingradients/addingradients.component';
import { AddrecieptComponent } from './addreciept/addreciept.component';
import { FullRecieptComponent } from './full-reciept/full-reciept.component';
import {MatTableDataSource, MatTableModule} from '@angular/material';
import { LoginService } from './login.service';
import { AddingradientService } from './addingradient.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTitleComponent } from './add-title/add-title.component';
import { AddReceptComponent } from './add-recept/add-recept.component';
import { ReceptDetailsComponent } from './recept-details/recept-details.component';
import { MeatComponent } from './meat/meat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddingradientsComponent,
    AddrecieptComponent,
    FullRecieptComponent,
    AddTitleComponent,
    AddReceptComponent,
    ReceptDetailsComponent,
    MeatComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MatTableModule
  
  ],
  providers: [ LoginService, AddingradientService
   // {provide: HTTP_INTERCEPTORS,
   // useClass:  TinterseptService  ,
   // multi:true
  //  }],
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
