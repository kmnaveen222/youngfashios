import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './Kids/Kids.component';
import { LoginComponent } from './login/login.component';
import { MensComponent } from './Mens/Mens.component';
import { RegisterComponent } from './register/register.component';
import { WomensComponent } from './Womens/Womens.component';
import { CartComponent } from './cart/cart.component';

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
    path:'cart',
    component:CartComponent,
  },
   {
      path:"register",
      component:RegisterComponent
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
