import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-womensadmin',
  templateUrl: './womensadmin.component.html',
  styleUrls: ['./womensadmin.component.css']
})
export class WomensadminComponent {
  itemid:any;
  updatedpro:boolean=false;
  pro:any;
  url:any="http://localhost:3000";
constructor(private http:HttpClient,private forms:FormBuilder){}


addproduct=this.forms.group({
  title:[,[Validators.required]],
  brand:[,[Validators.required]],
  category:[,[Validators.required]],
  description:[,[Validators.required]],
  descrip:[,[Validators.required]],
  Department:['womens',[Validators.required]],
  price:[,[Validators.required]],
  offerprice:[,[Validators.required]],
  Country:['India',[Validators.required]],
  Manufacturer:[,[Validators.required]],
  thumbnail:[,[Validators.required]],
  thumbnail1:[,[Validators.required]],
  thumbnail2:[,[Validators.required]],
  thumbnail3:[,[Validators.required]],
  thumbnail4:[,[Validators.required]],

})



ngOnInit(){

  this.getproduct();
}
submit(){
  console.log(this.addproduct.value);
  if(this.addproduct.valid){
    this.http.post(this.url+"/womens-product",this.addproduct.value).subscribe(data=>{
          alert("Form submitted");
          this.addproduct.reset();
          window.location.reload();

        })
      }

}

getproduct(){
  this.http.get(this.url+'/womens-product').subscribe(res=>{
    this.pro = res;

   })
  }

  onEdit(item:any){
    this.itemid=item.id;
     this.addproduct.controls['title'].setValue(item.title);
     this.addproduct.controls['brand'].setValue(item.brand);
     this.addproduct.controls['category'].setValue(item.category);
     this.addproduct.controls['description'].setValue(item.description);
     this.addproduct.controls['descrip'].setValue(item.descrip);
     this.addproduct.controls['Department'].setValue(item.Department);
     this.addproduct.controls['price'].setValue(item.price);
     this.addproduct.controls['offerprice'].setValue(item.offerprice);
     this.addproduct.controls['Country'].setValue(item.Country);
     this.addproduct.controls['Manufacturer'].setValue(item.Manufacturer);
     this.addproduct.controls['thumbnail'].setValue(item.thumbnail);
     this.addproduct.controls['thumbnail1'].setValue(item.thumbnail1);
     this.addproduct.controls['thumbnail2'].setValue(item.thumbnail2);
     this.addproduct.controls['thumbnail3'].setValue(item.thumbnail3);
     this.addproduct.controls['thumbnail4'].setValue(item.thumbnail4);
     this.updatedpro=true;
   }


 update(){
   if(this.addproduct.valid){
 this.http.put<any>(this.url+'/womens-product/'+`${this.itemid}`,this.addproduct.value).subscribe(res=>{
   alert("Updated successfully");
   this.addproduct.reset();
   this.getproduct();
 })
 }
 }

 ondelete(item:any){
   this.http.delete(this.url+'/womens-product/'+`${item.id}`).subscribe((res =>{
     alert('your item deleted');
     this.getproduct();
 } ))

 }

}
