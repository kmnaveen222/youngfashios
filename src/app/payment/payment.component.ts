import { DialogModule } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AfterorderComponent } from '../afterorder/afterorder.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  productid:any;
  addressid: any;
  buyfrom: any;
  buynow: any="buynow";
  mens:any="mens";
  womens:any="womens";
  kids:any="kids";
  url:any="http://localhost:3000";
  getaddressdata: any;
  department: any;
  products: any;
  size: any;
  cartitems: any;
  totalprice: any=0;
  Paymenttype: any;
  time: any;
  orderstatus: any;
  constructor(private Activateroute:ActivatedRoute,private route:Router,private form:FormBuilder,private http:HttpClient,public dialog:MatDialog){}

  paycard=this.form.group({
    cardnumber:[,[Validators.required]],
    cardvalid:[,[Validators.required]],
    cvv:[,[Validators.required]],
  })
  upipay=this.form.group({
    upiid:[,[Validators.required]],
  })


  ngOnInit(){
  this.productid=this.Activateroute.snapshot.paramMap.get('id');
  this.addressid=this.Activateroute.snapshot.paramMap.get('addressid');
  this.buyfrom=localStorage.getItem('buyfrom');
  this.size=localStorage.getItem('size');
  this.department=localStorage.getItem('department');
  // console.log("itemid1",this.productid);
  // console.log("addressid1",this.addressid);

  this.getaddress();
    this. getbuypro();
    this.getcartitem();
  }



  // --------------------------------order products-------------------------------------------------------------

  // -------------------------------------buy from cash----------------------------------------
  oncash( buynowproducts:any){
    if(this.buyfrom==this.buynow){
    var orderid = new Date().getTime();
    this.Paymenttype="cash on delivery";
    this.orderstatus="Waiting for confirmation";
    let buynow={
      orderid:orderid,
      title:buynowproducts.title,
      brand:buynowproducts.brand,
      category: buynowproducts.category,
      description: buynowproducts.description,
      descrip: buynowproducts.descrip,
      Department: buynowproducts.Department,
      price: buynowproducts.price,
      offerprice: buynowproducts.offerprice,
      Country: buynowproducts.Country,
      Manufacturer: buynowproducts.Manufacturer,
      sizeS: buynowproducts.sizeS,
      sizeM: buynowproducts.sizeM,
      sizeL: buynowproducts.sizeL,
      sizeXL: buynowproducts.sizeXL,
      sizeXXL: buynowproducts.sizeXXL,
      thumbnail: buynowproducts.thumbnail,
      thumbnail1: buynowproducts.thumbnail1,
      thumbnail2: buynowproducts.thumbnail2,
      thumbnail3: buynowproducts.thumbnail3,
      thumbnail4: buynowproducts.thumbnail4,
      discountPercentage: buynowproducts.discountPercentage,
      quantity:1,
      selectedsize:this.size,
      total:buynowproducts.offerprice,
      itemid: buynowproducts.id,
      username:this.getaddressdata.username,
      phnumber:this.getaddressdata.phnumber,
      pincode:this.getaddressdata.pincode,
      address:this.getaddressdata.address,
      city:this.getaddressdata.city,
      state:this.getaddressdata.state,
      Homeorwork:this.getaddressdata.Homeorwork,
      email:this.getaddressdata.email,
      Paymenttype: this.Paymenttype,
      orderstatus:this.orderstatus,
   }
    // console.log("cashpro",buynow);
    this.http.post<any>(this.url+'/orders',buynow).subscribe(data=>{
      const dialogcomp = this.dialog.open(AfterorderComponent,{height: '300px',
      width: '600px',});
      dialogcomp.afterClosed().subscribe(()=>{
        this.route.navigate(['home']);
      })

      // window.location.reload()
    })

  }
 else{
  var orderid = new Date().getTime();
  this.Paymenttype="cash on delivery";
    this.orderstatus="Waiting for confirmation";
  for(var i=0;i<buynowproducts.length;i++){

    let cartpros={
      orderid:orderid,
      title:buynowproducts[i].title,
      brand:buynowproducts[i].brand,
      category: buynowproducts[i].category,
      description: buynowproducts[i].description,
      descrip: buynowproducts[i].descrip,
      Department: buynowproducts[i].Department,
      price: buynowproducts[i].price,
      offerprice: buynowproducts[i].offerprice,
      Country: buynowproducts[i].Country,
      Manufacturer: buynowproducts[i].Manufacturer,
      sizeS: buynowproducts[i].sizeS,
      sizeM: buynowproducts[i].sizeM,
      sizeL: buynowproducts[i].sizeL,
      sizeXL: buynowproducts[i].sizeXL,
      sizeXXL: buynowproducts[i].sizeXXL,
      thumbnail: buynowproducts[i].thumbnail,
      thumbnail1: buynowproducts[i].thumbnail1,
      thumbnail2: buynowproducts[i].thumbnail2,
      thumbnail3: buynowproducts[i].thumbnail3,
      thumbnail4: buynowproducts[i].thumbnail4,
      discountPercentage: buynowproducts[i].discountPercentage,
      quantity:buynowproducts[i].quantity,
      selectedsize:buynowproducts[i].selectedsize,
      total:buynowproducts[i].total,
      itemid: buynowproducts[i].cartid,
      username:this.getaddressdata.username,
      phnumber:this.getaddressdata.phnumber,
      pincode:this.getaddressdata.pincode,
      address:this.getaddressdata.address,
      city:this.getaddressdata.city,
      state:this.getaddressdata.state,
      Homeorwork:this.getaddressdata.Homeorwork,
      email:this.getaddressdata.email,
      Paymenttype: this.Paymenttype,
      orderstatus:this.orderstatus,
   }
//  console.log("cashpro",cartpros);
 this.http.post<any>(this.url+'/orders',cartpros).subscribe(data=>{ const dialogcomp = this.dialog.open(AfterorderComponent,{height: '300px',
 width: '600px',});
 dialogcomp.afterClosed().subscribe(()=>{
   this.route.navigate(['home']);
 })
})

  }
}
    }


  // -------------------------------------buy from UPI----------------------------------------
onupi(buynowproducts:any){
  if(this.buyfrom==this.buynow){
    var orderid = new Date().getTime();
    this.Paymenttype="UPI";
    this.orderstatus="Waiting for confirmation";
    let buynow={
      orderid:orderid,
      title:buynowproducts.title,
      brand:buynowproducts.brand,
      category: buynowproducts.category,
      description: buynowproducts.description,
      descrip: buynowproducts.descrip,
      Department: buynowproducts.Department,
      price: buynowproducts.price,
      offerprice: buynowproducts.offerprice,
      Country: buynowproducts.Country,
      Manufacturer: buynowproducts.Manufacturer,
      sizeS: buynowproducts.sizeS,
      sizeM: buynowproducts.sizeM,
      sizeL: buynowproducts.sizeL,
      sizeXL: buynowproducts.sizeXL,
      sizeXXL: buynowproducts.sizeXXL,
      thumbnail: buynowproducts.thumbnail,
      thumbnail1: buynowproducts.thumbnail1,
      thumbnail2: buynowproducts.thumbnail2,
      thumbnail3: buynowproducts.thumbnail3,
      thumbnail4: buynowproducts.thumbnail4,
      discountPercentage: buynowproducts.discountPercentage,
      quantity:1,
      selectedsize:this.size,
      total:buynowproducts.offerprice,
      itemid: buynowproducts.id,
      username:this.getaddressdata.username,
      phnumber:this.getaddressdata.phnumber,
      pincode:this.getaddressdata.pincode,
      address:this.getaddressdata.address,
      city:this.getaddressdata.city,
      state:this.getaddressdata.state,
      Homeorwork:this.getaddressdata.Homeorwork,
      email:this.getaddressdata.email,
      Paymenttype: this.Paymenttype,
      orderstatus:this.orderstatus,
   }
    // console.log("cashpro",buynow);
    this.http.post<any>(this.url+'/orders',buynow).subscribe(data=>{ const dialogcomp = this.dialog.open(AfterorderComponent,{height: '300px',
    width: '600px',});
    dialogcomp.afterClosed().subscribe(()=>{
      this.route.navigate(['home']);
    })})

  }
 else{
  var orderid = new Date().getTime();
  this.Paymenttype="UPI";
    this.orderstatus="Waiting for confirmation";
  for(var i=0;i<buynowproducts.length;i++){

    let cartpros={
      orderid:orderid,
      title:buynowproducts[i].title,
      brand:buynowproducts[i].brand,
      category: buynowproducts[i].category,
      description: buynowproducts[i].description,
      descrip: buynowproducts[i].descrip,
      Department: buynowproducts[i].Department,
      price: buynowproducts[i].price,
      offerprice: buynowproducts[i].offerprice,
      Country: buynowproducts[i].Country,
      Manufacturer: buynowproducts[i].Manufacturer,
      sizeS: buynowproducts[i].sizeS,
      sizeM: buynowproducts[i].sizeM,
      sizeL: buynowproducts[i].sizeL,
      sizeXL: buynowproducts[i].sizeXL,
      sizeXXL: buynowproducts[i].sizeXXL,
      thumbnail: buynowproducts[i].thumbnail,
      thumbnail1: buynowproducts[i].thumbnail1,
      thumbnail2: buynowproducts[i].thumbnail2,
      thumbnail3: buynowproducts[i].thumbnail3,
      thumbnail4: buynowproducts[i].thumbnail4,
      discountPercentage: buynowproducts[i].discountPercentage,
      quantity:buynowproducts[i].quantity,
      selectedsize:buynowproducts[i].selectedsize,
      total:buynowproducts[i].total,
      itemid: buynowproducts[i].cartid,
      username:this.getaddressdata.username,
      phnumber:this.getaddressdata.phnumber,
      pincode:this.getaddressdata.pincode,
      address:this.getaddressdata.address,
      city:this.getaddressdata.city,
      state:this.getaddressdata.state,
      Homeorwork:this.getaddressdata.Homeorwork,
      email:this.getaddressdata.email,
      Paymenttype: this.Paymenttype,
      orderstatus:this.orderstatus,
   }
//  console.log("cashpro",cartpros);
 this.http.post<any>(this.url+'/orders',cartpros).subscribe(data=>{ const dialogcomp = this.dialog.open(AfterorderComponent,{height: '300px',
 width: '600px',});
 dialogcomp.afterClosed().subscribe(()=>{
   this.route.navigate(['home']);
 })})

  }
}
}

// -------------------------------------buy from card----------------------------------------
oncard(buynowproducts:any){
  if(this.buyfrom==this.buynow){
    var orderid = new Date().getTime();
    this.Paymenttype="ATM Card";
    this.orderstatus="Waiting for confirmation";
    let buynow={
      orderid:orderid,
      title:buynowproducts.title,
      brand:buynowproducts.brand,
      category: buynowproducts.category,
      description: buynowproducts.description,
      descrip: buynowproducts.descrip,
      Department: buynowproducts.Department,
      price: buynowproducts.price,
      offerprice: buynowproducts.offerprice,
      Country: buynowproducts.Country,
      Manufacturer: buynowproducts.Manufacturer,
      sizeS: buynowproducts.sizeS,
      sizeM: buynowproducts.sizeM,
      sizeL: buynowproducts.sizeL,
      sizeXL: buynowproducts.sizeXL,
      sizeXXL: buynowproducts.sizeXXL,
      thumbnail: buynowproducts.thumbnail,
      thumbnail1: buynowproducts.thumbnail1,
      thumbnail2: buynowproducts.thumbnail2,
      thumbnail3: buynowproducts.thumbnail3,
      thumbnail4: buynowproducts.thumbnail4,
      discountPercentage: buynowproducts.discountPercentage,
      quantity:1,
      selectedsize:this.size,
      total:buynowproducts.offerprice,
      itemid: buynowproducts.id,
      username:this.getaddressdata.username,
      phnumber:this.getaddressdata.phnumber,
      pincode:this.getaddressdata.pincode,
      address:this.getaddressdata.address,
      city:this.getaddressdata.city,
      state:this.getaddressdata.state,
      Homeorwork:this.getaddressdata.Homeorwork,
      email:this.getaddressdata.email,
      Paymenttype: this.Paymenttype,
      orderstatus:this.orderstatus,
   }
    // console.log("cashpro",buynow);
    this.http.post<any>(this.url+'/orders',buynow).subscribe(data=>{ const dialogcomp = this.dialog.open(AfterorderComponent,{height: '300px',
    width: '600px',});
    dialogcomp.afterClosed().subscribe(()=>{
      this.route.navigate(['home']);
    })})

  }
 else{
  var orderid = new Date().getTime();
  this.Paymenttype="ATM Card";
    this.orderstatus="Waiting for confirmation";
  for(var i=0;i<buynowproducts.length;i++){

    let cartpros={
      orderid:orderid,
      title:buynowproducts[i].title,
      brand:buynowproducts[i].brand,
      category: buynowproducts[i].category,
      description: buynowproducts[i].description,
      descrip: buynowproducts[i].descrip,
      Department: buynowproducts[i].Department,
      price: buynowproducts[i].price,
      offerprice: buynowproducts[i].offerprice,
      Country: buynowproducts[i].Country,
      Manufacturer: buynowproducts[i].Manufacturer,
      sizeS: buynowproducts[i].sizeS,
      sizeM: buynowproducts[i].sizeM,
      sizeL: buynowproducts[i].sizeL,
      sizeXL: buynowproducts[i].sizeXL,
      sizeXXL: buynowproducts[i].sizeXXL,
      thumbnail: buynowproducts[i].thumbnail,
      thumbnail1: buynowproducts[i].thumbnail1,
      thumbnail2: buynowproducts[i].thumbnail2,
      thumbnail3: buynowproducts[i].thumbnail3,
      thumbnail4: buynowproducts[i].thumbnail4,
      discountPercentage: buynowproducts[i].discountPercentage,
      quantity:buynowproducts[i].quantity,
      selectedsize:buynowproducts[i].selectedsize,
      total:buynowproducts[i].total,
      itemid: buynowproducts[i].cartid,
      username:this.getaddressdata.username,
      phnumber:this.getaddressdata.phnumber,
      pincode:this.getaddressdata.pincode,
      address:this.getaddressdata.address,
      city:this.getaddressdata.city,
      state:this.getaddressdata.state,
      Homeorwork:this.getaddressdata.Homeorwork,
      email:this.getaddressdata.email,
      Paymenttype: this.Paymenttype,
      orderstatus:this.orderstatus,
   }
//  console.log("cashpro",cartpros);
 this.http.post<any>(this.url+'/orders',cartpros).subscribe(data=>{ const dialogcomp = this.dialog.open(AfterorderComponent,{height: '300px',
 width: '600px',});
 dialogcomp.afterClosed().subscribe(()=>{
   this.route.navigate(['home']);
 })})

  }
}
}





  // ----------------------------getaddress---------------------------------------------------

  getaddress(){
    this.http.get<any>(this.url+'/address/'+`${this.addressid}`).subscribe(addressdata=>{
      this.getaddressdata=addressdata;
      // console.log("add",this.getaddressdata);
    })
  }
  // ----------------------------getproducts from cart----------------------------------

getcartitem(){
  if(this.buyfrom!==this.buynow){
this.http.get(this.url+'/cart').subscribe(cartitem=>{
  this.cartitems=cartitem;

  for(var pro in this.cartitems){
    var oprice=this.cartitems[pro].total;
    this.totalprice=this.totalprice+oprice;}
})

}
}


  // ----------------------------getproducts from buynow----------------------------------
  getbuypro(){
    if(this.department == this.mens && this.buyfrom==this.buynow){
      this.http.get<any>(this.url+"/mens-product/"+`${this.productid}`).subscribe(res=>{
        this.products = res;


    })
  }
  if(this.department == this.womens && this.buyfrom==this.buynow){
    this.http.get<any>(this.url+"/womens-product/"+`${this.productid}`).subscribe(res=>{
      this.products = res;
      // console.log("data",this.products);
    })
  }
  if(this.department == this.kids && this.buyfrom==this.buynow){
    this.http.get<any>(this.url+"/kids-product/"+`${this.productid}`).subscribe(res=>{
      this.products = res;
      // console.log("data",this.products);
    })
    }
  }


}
