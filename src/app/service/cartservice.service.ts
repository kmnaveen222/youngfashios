import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  loginemailid: string | any;
  cartitems:any;
url:any='http://localhost:3000';

  constructor(private http:HttpClient) { }

// getProducts(){
//    return this.http.get(this.url+"/cart").subscribe(res=>{
//     this.cartitems=res;
//     console.log("cartitem",this.cartitems);
//   })
// }

  cartitemstore(item:any){
    console.log('item1',item);
    this.loginemailid=localStorage.getItem('loggedemailid');
    const data ={...item,email:this.loginemailid};

  return this.http.post(this.url+"/cart",data).subscribe(data=>{
    alert("your item added to cart");
    window.location.reload();
    
  });


  // this.gettotalprice();
  }

//   gettotalprice() : number{
// let grandtotal=0;
// this.cartitems.map((a:any)=>{
//   grandtotal+=a.total;
//   console.log("granttotal",grandtotal);
// })
// return grandtotal;

//   }

}
