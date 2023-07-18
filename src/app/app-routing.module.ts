import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './Kids/Kids.component';
import { LoginComponent } from './login/login.component';
import { MensComponent } from './Mens/Mens.component';
import { RegisterComponent } from './register/register.component';
import { WomensComponent } from './Womens/Womens.component';
import { CartComponent } from './cart/cart.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { HomeadminComponent } from './adminside/homeadmin/homeadmin.component';
import { MensadminComponent } from './adminside/mensadmin/mensadmin.component';
import { WomensadminComponent } from './adminside/womensadmin/womensadmin.component';
import { KidsadminComponent } from './adminside/kidsadmin/kidsadmin.component';
import { UserdetailsComponent } from './adminside/userdetails/userdetails.component';
import { OderdetailsComponent } from './adminside/oderdetails/oderdetails.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AuthguardGuard } from './service/authguard.guard';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { MyorderComponent } from './myorder/myorder.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
  path:'home',
  component:HomeComponent
  },
  {
    path:'mens',
    component:MensComponent
    },
  {
    path:'womens',
    component:WomensComponent
    },
    {
      path:'kids',
      component:KidsComponent
      },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'myorder',
    component:MyorderComponent,
  },{
    path:'wishlist',
    component:WishlistComponent,
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[AuthguardGuard],
  },
   {
      path:"register",
      component:RegisterComponent
  },
  {
    path:'address',
    component:AddressComponent,
    canActivate:[AuthguardGuard],
  },
  {
    path:':id/address',
    component:AddressComponent,
  },
  {
    path:':addressid/payment',
    component:PaymentComponent,
  },
  {
    path:':id/:addressid/payment',
    component:PaymentComponent,
  },
  {
    path:"userprofile",
    component:UserprofileComponent,
    canActivate:[AuthguardGuard],

},
  {
    path:"privacypolicy",
    component:PrivacypolicyComponent
},

{
  path:"homeadmin",
  component:HomeadminComponent
},
{
  path:"mensadmin",
  component:MensadminComponent
},{
  path:"womensadmin",
  component:WomensadminComponent
},{
  path:"kidsadmin",
  component:KidsadminComponent
},{
  path:"userdetails",
  component:UserdetailsComponent
},{
  path:"orders",
  component:OderdetailsComponent
},

{
  path:"productdetail/:id",
  component:ProductdetailComponent
},
    {
        path:"**",
        component:HomeComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
