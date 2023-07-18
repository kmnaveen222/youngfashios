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
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { SecurityComponent } from './security/security.component';
import { HomeadminComponent } from './adminside/homeadmin/homeadmin.component';
import { MensadminComponent } from './adminside/mensadmin/mensadmin.component';
import { WomensadminComponent } from './adminside/womensadmin/womensadmin.component';
import { KidsadminComponent } from './adminside/kidsadmin/kidsadmin.component';
import { UserdetailsComponent } from './adminside/userdetails/userdetails.component';
import { OderdetailsComponent } from './adminside/oderdetails/oderdetails.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UserprofileComponent } from './userprofile/userprofile.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import { ImagechangeDirective } from './productdetail/imagechange.directive';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { AfterorderComponent } from './afterorder/afterorder.component';
import { MyorderComponent } from './myorder/myorder.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      MensComponent,
      WomensComponent,
      KidsComponent,
      LoginComponent,
      RegisterComponent,
      CartComponent,
      ProductdetailComponent,
      PrivacypolicyComponent,
      SecurityComponent,
      HomeadminComponent,
      MensadminComponent,
      WomensadminComponent,
      KidsadminComponent,
      UserdetailsComponent,
      OderdetailsComponent,
      UserprofileComponent,
      ImagechangeDirective,
      AddressComponent,
      PaymentComponent,
      AfterorderComponent,
      MyorderComponent,
      WishlistComponent,




   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule,
    ReactiveFormsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
