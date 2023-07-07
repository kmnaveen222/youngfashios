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
loginemailid: any;
cartproduct:any;
samecartitem:any;
cartid:any;

  constructor(private http:HttpClient, private poffer:OfferpercentageService,private cart:CartserviceService) { }
  ngOnInit() {
    //--------------------------------countdown time----------------------------
    this.countdowndate = new Date("july 1, 2023").getTime();
    var x = setInterval(()=> {
      var now = new Date().getTime();
      var distance = this.countdowndate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      // + minutes + "m " + seconds + "s ";
this.countdowntime=days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      if (distance < 0) {
        clearInterval(x);
       this.countdowntime="expired";
       this.offerdisprice=false;

    }
  });

//-----------------------------mes image & description----------------------
    this.http.get(this.url+'/mens-product').subscribe(res=>{
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
    console.log(this.pro[offerp].sizeS[2]);
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

  }//------------ng oninit end------------------



  // ----------------------add to cart------------------------
Addtocart(item:any){
  for(var cartpro in this.cartproduct ){
    this.cartid=this.cartproduct[cartpro].id;
    if(item.id==this.cartid){
      this.samecartitem=this.cartid;
    }
  }
  if(item.id==this.samecartitem){
    alert("your item is already added to cart");
  }else{
    this.cart.cartitemstore(item);
  }
}


}
