import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OfferpercentageService } from '../offerpercentge/offerpercentage.service';



@Component({
  selector: 'app-Mens',
  templateUrl: './Mens.component.html',
  styleUrls: ['./Mens.component.css']
})



export class MensComponent implements OnInit {
  url:any = "http://localhost:3000/mens-product";
pro:any;
banpro:any;
countdowndate:any;
countdowntime:any;
offerpercentage:any;
perc:any;
key:any;
percent:any[] =[];


offerdisprice:boolean=true;

  constructor(private http:HttpClient, private poffer:OfferpercentageService) { }


  ngOnInit() {


    //--------------------------------countdown time----------------------------
    this.countdowndate = new Date("june 19, 2023").getTime();
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
    this.http.get("http://localhost:3000/mens-product").subscribe(res=>{
  this.pro = res;

// ------------offer price percentage only------------
  for (var offerp in this.pro ){
    var ofprice=this.pro[offerp].offerprice;
    var oprice=this.pro[offerp].price;

    //   // console.log("lengthp",oprice/*lenght of the item or array*/ ,this.pro[oprice].price/*all arrays single item*/,Object.keys(this.pro[oprice])/*key values*/,oprice);


    // console.log("len",offerprice,this.pro[offerprice].offerprice,Object.keys(this.pro[offerprice]));
    // console.log("len",_index1,this.pro[_index1].offerprice,Object.keys(this.pro[_index1]));
  //  console.log( "keyvalue",Object.keys(this.pro[offerp]));
  //  this.poffer.isoffervalue(ofprice);


  this.offerpercentage = this.poffer.ispercent(ofprice,oprice);
  this.percent.push(this.offerpercentage);


  // this.url.key.discountPercentage.push(this.offerpercentage);


  }
  // this.key= Object.keys(this.pro);
for (var i =0 ; i < this.pro.length; i++){
this.http.patch('http://localhost:3000/mens-product/'+(i+1) ,this.percent[i]).subscribe();
 this.perc =this.percent[i+0];
  console.log("url = product/"+ (i+1));
  console.log("url = product/"+ this.perc);
}
    })


// ----------------------offer image------------------------
    this.http.get("http://localhost:3000/offer-banners").subscribe(ress=>{
      this.banpro = ress;

        })
  }

}
