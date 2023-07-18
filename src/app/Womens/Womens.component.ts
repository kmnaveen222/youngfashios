import { Component, OnInit } from '@angular/core';
import { OfferpercentageService } from '../service/offerpercentge/offerpercentage.service';
import { CartserviceService } from '../service/cartservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Womens',
  templateUrl: './Womens.component.html',
  styleUrls: ['./Womens.component.css']
})
export class WomensComponent implements OnInit {

  url:any = "http://localhost:3000";
  pro:any;

  offerpercentage:any;
  percent:any[] =[];
  offerdisprice:boolean=true;
  cartproduct:any;
  samecartitem:any;
  cartid:any;
  loggedinemail:any;
  email:any;
  title:any;
  title1:any;
  email1:any;
carttitle:any="womens";

  constructor(private http:HttpClient, private poffer:OfferpercentageService,private cart:CartserviceService) { }
  ngOnInit() {
    // this.title=localStorage.getItem('department');
//-----------------------------mes image & description----------------------
    this.http.get(this.url+'/womens-product').subscribe(res=>{
  this.pro = res;


// -----------------------for cart quantity and price-----------------
this.pro.forEach((a:any) => {
  Object.assign(a,{quantity:1,total:a.price})
  });


// ------------offer price percentage only------------
  for (var offerp in this.pro ){
    var ofprice=this.pro[offerp].offerprice;
    var oprice=this.pro[offerp].price;
    var oprice=this.pro[offerp].price;

    this.offerpercentage = this.poffer.ispercent(ofprice,oprice);//percentage calculating function
  this.percent.push(this.offerpercentage);
  }

for(var i=1,j=0;i<=this.percent.length;i++,j++){
  this.http.patch(this.url+'/womens-product/'+`${i}`,{discountPercentage:this.percent[j]}).subscribe(res=>{//percentage sending to db server
        })
      }
    })
// ------------offer price percentage end---------------------

// ----------------------offer image------------------------



this.http.get(this.url+'/cart').subscribe(res=>{
  this.cartproduct=res;
  console.log('cartitem',this.cartproduct);

})

  }//------------ng oninit end------------------

  onclickdepartment(item:any){
    localStorage.setItem("department",item.Department);
  }

  // ----------------------add to cart------------------------
// Addtocart(item:any){
//   this.loggedinemail=localStorage.getItem('loggedemailid');

//   console.log("id",this.title);
//   for(var cartpro in this.cartproduct ){
//     this.cartid=this.cartproduct[cartpro].cartid;
//     this.email=this.cartproduct[cartpro].email;
//     this.title=this.cartproduct[cartpro].Department;

//     if(item.id==this.cartid && item.Department==this.title && this.loggedinemail==this.email){
//       this.samecartitem=this.cartid;
//       this.title1=this.title;
//       this.email1=this.email

//     }
//   }

//   if(item.id==this.samecartitem &&  this.loggedinemail==this.email1 && item.Department==this.title1){
//     alert("your item is already added to cart");
//   }else{
//     this.cart.cartitemstore(item);
//   }
// }

}
