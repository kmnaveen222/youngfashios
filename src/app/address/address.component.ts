import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {

  panelOpenState = false;
  productid:any;
  emailid:any;
  getaddressdata:any;
  url:any="http://localhost:3000";
  itemid: any;
  updatingdata:any=false;
  buyfrom: any;
  buynow: any="buynow";

  constructor(private Activateroute:ActivatedRoute, private form:FormBuilder, private http:HttpClient){}
  ngOnInit(){
  this.productid=this.Activateroute.snapshot.paramMap.get('id');
  this.buyfrom=localStorage.getItem('buyfrom');
  this.emailid=localStorage.getItem('loggedemailid');
  this.getaddress();
}
addressform=this.form.group({
  username:[,[Validators.required]],
  phnumber:[,[Validators.required]],
  pincode:[,[Validators.required]],
  address:[,[Validators.required]],
  locality:[,[Validators.required]],
  city:[,[Validators.required]],
  state:[,[Validators.required]],
  Homeorwork:[,[Validators.required]],


})
onclick(){
  this.panelOpenState=true;
}
// ---------------------------address getting--------------------------------------------
getaddress(){
  this.http.get<any>(this.url+'/address').subscribe(addressdata=>{
    const addressemail=addressdata.filter((data:any)=>{
     return data.email==this.emailid;

    })
if(addressemail){
  this.getaddressdata=addressemail;
}
  })
}


// ------------------------------on edit----------------------------------------
onedit(item:any){
  this.itemid=item.id;
  this.addressform.controls['username'].setValue(item.username);
  this.addressform.controls['phnumber'].setValue(item.phnumber);
  this.addressform.controls['pincode'].setValue(item.pincode);
  this.addressform.controls['address'].setValue(item.address);
  this.addressform.controls['locality'].setValue(item.locality);
  this.addressform.controls['city'].setValue(item.city);
  this.addressform.controls['state'].setValue(item.state);
  this.addressform.controls['Homeorwork'].setValue(item.Homeorwork);
  this.updatingdata=true;
}


// -------------------------------update address-----------------------------------
updateaddress(){

  this.http.put<any>(this.url+'/address/'+`${this.itemid}`,{...this.addressform.value,email:this.emailid}).subscribe(res=>{
    alert("Updated successfully");
    this.addressform.reset();
    this.updatingdata=false;
    this.getaddress();
})
}

// --------------------------cancel btn-------------------------------------
cancel(){
  this.addressform.reset();
  this.updatingdata=false;
  this.getaddress();
}

// -----------------------delivery address-------------------------------------------------
ondelivery(item:any){
localStorage.setItem('addressid',item.id);
}

// -----------------------add address to jsonserver----------------------------
addaddress(){
  this.emailid=localStorage.getItem('loggedemailid');
const addressdata={...this.addressform.value,email:this.emailid}
this.http.post<any>(this.url+'/address',addressdata).subscribe(data=>{
  alert("Address is submitted");
  this.addressform.reset();
  this.getaddress();
})

}

}
