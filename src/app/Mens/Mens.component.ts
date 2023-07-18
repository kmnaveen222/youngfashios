import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OfferpercentageService } from '../service/offerpercentge/offerpercentage.service';
import { CartserviceService } from '../service/cartservice.service';
import { DbseviceService } from '../service/dbsevice.service';
import { window } from 'rxjs';



@Component({
  selector: 'app-Mens',
  templateUrl: './Mens.component.html',
  styleUrls: ['./Mens.component.css']
})



export class MensComponent implements OnInit {
  url:any = "http://localhost:3000";
pro:any;
banpro:any;
countdowndate:any;
countdowntime:any;
offerpercentage:any;
percent:any[] =[];
offerdisprice:boolean=true;
id:any;
loginemailid: any;
cartproduct:any;
samecartitem:any;
cartid:any;
loggedinemail:any;
email:any;
title:any;
title1:any;
email1:any;
carttitle:any="mens";
  wishlistadd: any;
  wishlistdata: any;
  wishid: any;
  wishlist: any;

  constructor(private http:HttpClient, private dbservice:DbseviceService,private poffer:OfferpercentageService,private cart:CartserviceService) { }
  ngOnInit() {

    this.loggedinemail=localStorage.getItem('loggedemailid');

    //--------------------------------countdown time----------------------------
    this.countdowndate = new Date("july 11, 2023").getTime();
//     var x = setInterval(()=> {
//       var now = new Date().getTime();
//       var distance = this.countdowndate - now;
//       var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//       var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//       // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//       // + minutes + "m " + seconds + "s ";
// this.countdowntime=days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//       if (distance < 0) {
//         clearInterval(x);
//        this.countdowntime="expired";
//        this.offerdisprice=false;

//     }
//   });

//-----------------------------mes image & description----------------------
    this.http.get(this.url+'/mens-product').subscribe(res=>{
  this.pro = res;


// -----------------------for cart quantity and price-----------------
// this.pro.forEach((a:any) => {
//   Object.assign(a,{quantity:1,total:a.price})
//   });




// ------------offer price percentage only------------
  for (var offerp in this.pro ){
    var ofprice=this.pro[offerp].offerprice;
    var oprice=this.pro[offerp].price;
    var oprice=this.pro[offerp].price;

    //   // console.log("lengthp",oprice/*lenght of the item or array*/ ,this.pro[oprice].price/*all arrays single item*/,Object.keys(this.pro[oprice])/*key values*/,oprice);
    // console.log("len",offerprice,this.pro[offerprice].offerprice,Object.keys(this.pro[offerprice]));
    // console.log("len",_index1,this.pro[_index1].offerprice,Object.keys(this.pro[_index1]));
  //  console.log( "keyvalue",Object.keys(this.pro[offerp]));
  //  this.poffer.isoffervalue(ofprice);
  this.offerpercentage = this.poffer.ispercent(ofprice,oprice);//percentage calculating function

  this.percent.push(this.offerpercentage);
  }

for(var i=1,j=0;i<=this.percent.length;i++,j++){
  this.http.patch(this.url+'/mens-product/'+`${i}`,{discountPercentage:this.percent[j]}).subscribe(res=>{//percentage sending to db server
        })

      }
    })
// ------------offer price percentage end---------------------

// ----------------------offer image------------------------
    this.http.get(this.url+'/offer-banners').subscribe(ress=>{
      this.banpro = ress;
        })



this.http.get(this.url+'/cart').subscribe(res=>{
  this.cartproduct=res;
  console.log('cartitem',this.cartproduct);

})

this.http.get(this.url+'/wishlist').subscribe(wishlistdata=>{
  this.wishlistdata=wishlistdata;


})

  }//------------ng oninit end------------------

  onclickdepartment(item:any){
    localStorage.setItem("department",item.Department);
  }

  // ----------------------------add to wishlist-------------------------------------
  // onaddwishlist(item:any){
  //   this.dbservice.addwishlist(item);
  //   this.wishlistadd=true;
  // }

  // onremovewishlist(item:any){


  //   for(var wishlistpro in this.wishlistdata ){
  //     this.cartid=this.wishlistdata[wishlistpro].itemid;
  //     this.email=this.wishlistdata[wishlistpro].email;
  //     this.title=this.wishlistdata[wishlistpro].Department;
  //     this.wishid=this.wishlistdata[wishlistpro].id;
  //     console.log("wish",this.cartid,item.title,this.email,this.wishid)

  //     if(item.id==this.cartid && item.Department==this.title && this.loggedinemail==this.email){
  //       this.samecartitem=this.cartid;
  //       this.title1=this.title;
  //       this.email1=this.email;
  //       this.wishlist=this.wishid;
  //       console.log("wish",this.samecartitem,this.title1,this.wishlist,this.email1)

  //     }
  //   }
  //   if(item.id==this.samecartitem && this.loggedinemail==this.email1 && item.Department==this.title1){
  //     this.dbservice.deletewishlist(this.wishlist);
  //   this.wishlistadd=false;
  //   }
  // }

}
