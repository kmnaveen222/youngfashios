import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartserviceService } from '../service/cartservice.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {
  productid:any;
  products:any;
  department:any;
  mens:any="mens";
  womens:any="womens";
  kids:any="kids";
  day:any;
  mon:any;
  url:any="http://localhost:3000";
  offerprice:boolean=true;
  womensize:boolean=true;
  kidsize:boolean=false;
  loggedinemail: any;
  cartproduct:any;
  cartid: any;
  title:any;
  email:any;
  samecartitem: any;
  title1: any;
  email1: any;
  size:any;
  buynow:any="buynow";


  constructor(private Activateroute:ActivatedRoute, private http:HttpClient, private cart:CartserviceService, private formb:FormBuilder){}
  ngOnInit():void{
    this.productid=this.Activateroute.snapshot.paramMap.get('id');
    console.log(this.productid);
    this.department =localStorage.getItem("department");

    this.getproduct();

  }


selectedsize=this.formb.group({
  selectsize:[,[Validators.required]],

})



  getproduct(){
    if(this.department == this.mens){
    this.http.get<any>(this.url+"/mens-product/"+`${this.productid}`).subscribe(res=>{
      this.products = res;
      if(this.products.discountPercentage==0 || this.products.discountPercentage==null){
        this.offerprice=false;
        }

        this.getproduct;

  })
}
if(this.department == this.womens){
  this.http.get<any>(this.url+"/womens-product/"+`${this.productid}`).subscribe(res=>{
    this.products = res;
    this.womensize=false;
    console.log("pro det",this.products);
    if(this.products.discountPercentage==0 || this.products.discountPercentage==null){
      this.offerprice=false;
      }
      this.getproduct;

  })
}
if(this.department == this.kids){
  this.http.get<any>(this.url+"/kids-product/"+`${this.productid}`).subscribe(res=>{
    this.products = res;
    this.kidsize=true;

    console.log("pro det",this.products);
    if(this.products.discountPercentage==0 || this.products.discountPercentage==null){
      this.offerprice=false;
      }
      this.getproduct;

  })
}

this.http.get(this.url+'/cart').subscribe(res=>{
  this.cartproduct=res;
  console.log('cartitem',this.cartproduct);

})




// -------------------------------delivery date--------------------------------------
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
var day=d.getDate()+5;
var mon=months[d.getMonth()];;
this.day= day;
this.mon=mon;
}
//---------------ngonit end-------------------------



onbuy(){
  localStorage.setItem('size',<string><unknown>this.selectedsize.value.selectsize);
  localStorage.setItem('buyfrom',this.buynow);
}



Addtocart(item:any){

  // this.size=this.selectedsize.value.selectsize;

  this.loggedinemail=localStorage.getItem('loggedemailid');
  // this.title=localStorage.getItem('department');
  console.log("id",this.cartid);
  for(var cartpro in this.cartproduct ){
    this.cartid=this.cartproduct[cartpro].cartid;
    this.email=this.cartproduct[cartpro].email;
    this.title=this.cartproduct[cartpro].Department;
    console.log("id",item.id,this.cartid);
    // this.title=this.cartproduct[cartpro].Department;

    if(item.id==this.cartid && item.Department==this.title && this.loggedinemail==this.email){
      this.samecartitem=this.cartid;
      this.title1=this.title;
      this.email1=this.email;

    }
  }

   if(item.id==this.samecartitem && this.loggedinemail==this.email1 && item.Department==this.title1){
     alert("your item is already added to cart");
   }else{
     this.cart.cartitemstore(item,this.selectedsize.value.selectsize);
   }

}
  }

