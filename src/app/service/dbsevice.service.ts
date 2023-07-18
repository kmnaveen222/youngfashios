import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbseviceService {
  loggedemailid: any;
  isloggedin: boolean=false;
  password: any;
  url:any='http://localhost:3000';
  username: any;
  wishlistdata: any;

constructor(private http:HttpClient) { }


// ---------------------------------------------login check----------------------------------------------------------
adduserinformation(body:any){
  return this.http.post("http://localhost:3000/users",body)
    }
    login(u:any,p:any){
      this.username=u;
      this.password=p;
      console.log(this.username,this.password);
      this.isloggedin=true;
      return of(this.isloggedin);
    }



    isuserloggedin():boolean{
      this.loggedemailid=localStorage.getItem('loggedemailid');

      if(this.loggedemailid!==null){
        return this.isloggedin=true;
      }else{
        return this.isloggedin=false;
      }
      }



// addwishlist(item:any){
// this.loggedemailid=localStorage.getItem('loggedemailid');
// let data1={

//   title:item.title,
//   brand:item.brand,
//   category: item.category,
//   description: item.description,
//   descrip: item.descrip,
//   Department: item.Department,
//   price: item.price,
//   offerprice: item.offerprice,
//   Country: item.Country,
//   Manufacturer: item.Manufacturer,
//   sizeS: item.sizeS,
//   sizeM: item.sizeM,
//   sizeL: item.sizeL,
//   sizeXL: item.sizeXL,
//   sizeXXL: item.sizeXXL,
//   thumbnail: item.thumbnail,
//   thumbnail1: item.thumbnail1,
//   thumbnail2: item.thumbnail2,
//   thumbnail3: item.thumbnail3,
//   thumbnail4: item.thumbnail4,
//   discountPercentage: item.discountPercentage,
//   quantity:1,
//   itemid: item.id,
//   email:this.loggedemailid,

// }

// // return this.http.patch(this.url+"/users/2",{array}).subscribe(data=>{
// //   alert("your item added to cart");
// // window.location.reload();
// // })




// return this.http.post(this.url+"/wishlist",data1).subscribe(data=>{
// alert("your item added to wishlist");
// });

// }


// deletewishlist(item:any){



//   return this.http.delete(this.url+"/wishlist/"+`${item}`).subscribe(data=>{
//     alert("your item removed from wishlist");
//     });
// }
}
