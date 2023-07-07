import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../service/cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
grandtotal:any;
product:any;
loginemailid: string | any;
totalprice: number=0;
totalamount: number=0;
discountprice: number=0;
totaldiscountprice: number=0;
prolen:boolean=false;
url:any='http://localhost:3000';
  constructor(private http:HttpClient, private cartservice:CartserviceService) {

   }

  ngOnInit() {


//--------------------email id check & cart product getting-------------------------
    this.loginemailid=localStorage.getItem('loggedemailid');
    this.http.get<any>(this.url+'/cart').subscribe(res=>{
      const user=res.filter((data:any)=>{
        console.log("Email address in data:", data.email,this.loginemailid);
      return data.email==this.loginemailid;

    });
    if(user){
      this.product =user;
      for(var pro in this.product){
        var oprice=this.product[pro].price;
        console.log("oprice",oprice);
        var disprice=this.product[pro].offerprice;
        console.log("offerprice",disprice);
        this.totalprice=this.totalprice+oprice;
        console.log("totalprice",this.totalprice);
        this.totalamount+=disprice;
        // this.discountprice=disprice-oprice;
        // this.totaldiscountprice+=this.discountprice;


      }
      console.log("tprice",this.totaldiscountprice);
      // if(this.product.length==0){
      //   this.prolen=true;
      // }
    }

    });
//---------------------------cart product getting------------------
    // this.http.get(this.url+'/cart').subscribe(res=>{
    //   this.product=res;

    // })

}

quantityIncrement(item:any){
  if(item.quantity<=9){
    this.totalprice+=item.price;
    this.discountprice=item.offerprice-item.price;
    this.totaldiscountprice+=this.discountprice;
  item.quantity++;
  item.total = (item.quantity*item.price);
this.http.patch(this.url+'/cart/'+`${item.id}`,{quantity:item.quantity,total:item.total}).subscribe(res=>{//quantity sending to db server
    })
  }
}
quantityDecrement(item:any){
  if(item.quantity>=2){
    this.totalprice-=item.price;
    this.discountprice=item.offerprice-item.price;
    this.totaldiscountprice-=this.discountprice;
    item.quantity--;
    item.total = (item.quantity*item.price);
    this.http.patch(this.url+'/cart/'+`${item.id}`,{quantity:item.quantity,total:item.total}).subscribe(res=>{//quantity sending to db server

    })
  }
}
ondelete(item:any){

  // console.log(this.url+'/cart/'+`${item.id}`)
  this.http.delete(this.url+'/cart/'+`${item.id}`).subscribe((res =>{

    alert('your item deleted');
    window.location.reload();

} ))

}

// onselectall(){

//   for(var i=1; i<=this.product.length; i++){
//         this.product[i].checked=true;
// }
// }
// ondeselectall(){}

}
