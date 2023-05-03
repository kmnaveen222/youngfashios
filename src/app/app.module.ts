import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { MensComponent } from './Mens/Mens.component';
import { WomensComponent } from './Womens/Womens.component';
import { KidsComponent } from './Kids/Kids.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [	
    AppComponent,
      HomeComponent,
      MensComponent,
      WomensComponent,
      KidsComponent,
      LoginComponent,
      RegisterComponent,
      CartComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,RouterModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
