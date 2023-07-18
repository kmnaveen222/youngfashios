import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  loginemailid: string | any;
  cartpro:any[] =[];
  cartitemproduct:any;
  cartitems:any;
  disper:any;
url:any='http://localhost:3000';

  constructor(private http:HttpClient) { }

// getProducts(){
//    return this.http.get(this.url+"/cart").subscribe(res=>{
//     this.cartitems=res;
//     console.log("cartitem",this.cartitems);
//   })
// }

  cartitemstore(item:any,size:any){



    if( item.discountPercentage==0|| item.discountPercentage==null){
      this.disper=item.price;

    }
    else{
      this.disper=item.offerprice;
    }

    console.log('item1',this.disper);
    this.loginemailid=localStorage.getItem('loggedemailid');
    // const data ={...item,email:this.loginemailid,};

     let data1={

        title:item.title,
        brand:item.brand,
        category: item.category,
        description: item.description,
        descrip: item.descrip,
        Department: item.Department,
        price: item.price,
        offerprice: item.offerprice,
        Country: item.Country,
        Manufacturer: item.Manufacturer,
        sizeS: item.sizeS,
        sizeM: item.sizeM,
        sizeL: item.sizeL,
        sizeXL: item.sizeXL,
        sizeXXL: item.sizeXXL,
        thumbnail: item.thumbnail,
        thumbnail1: item.thumbnail1,
        thumbnail2: item.thumbnail2,
        thumbnail3: item.thumbnail3,
        thumbnail4: item.thumbnail4,
        discountPercentage: item.discountPercentage,
        quantity:1,
        selectedsize:size,
        total:this.disper,
        cartid: item.id,
        email:this.loginemailid,

     }

    // return this.http.patch(this.url+"/users/2",{array}).subscribe(data=>{
    //   alert("your item added to cart");
    // window.location.reload();
    // })




  return this.http.post(this.url+"/cart",data1).subscribe(data=>{
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
