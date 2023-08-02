import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Confirmedvalidators } from '../confirmvalidation';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})


export class UserprofileComponent {
  itemid: any;
  url:any="http://localhost:3000";
  profile:undefined | any;
  profiles:undefined | any;
  email:any;
  loggedemailid:any;
  panelOpenState = false;
  getaddressdata: any;
  addressitemid: any;

  constructor(private http:HttpClient,private form:FormBuilder){}
userinfo=this.form.group({
  username:[,[Validators.required]],
  emailid:[,[Validators.required, Validators.email]],
  password:[,[Validators.required,,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/)]],
  cpassword:[,[Validators.required]],
},{validator:Confirmedvalidators('password','cpassword')})


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

ngOnInit() {

  this.getprofile();
  this.getaddress();
    }



// ---------------------------------get userinformation----------------------------------------------------
getprofile(){
  this.loggedemailid=localStorage.getItem('loggedemailid');
  this.http.get<any>(this.url+'/users').subscribe(res=>{
      res.filter((data:any)=>{
        console.log("data",data.emailid);
      if(data.emailid==this.loggedemailid){
        this.profile=data;
        console.log("profile",this.profile.name);
        console.log("profileid", data.id);
      }

  })
})

}
  onedit(item:any){
    this.itemid=item.id;
    this.userinfo.controls['username'].setValue(item.username);
    this.userinfo.controls['emailid'].setValue(item.emailid);
    this.userinfo.controls['password'].setValue(item.password);
    this.userinfo.controls['cpassword'].setValue(item.cpassword);
    this.getprofile();
  }
  onupdate(){
    // var data={username:this.userinfo.value,emailid:this.userinfo.value}
    // console.log("userinfo",data)
    this.http.put<any>(this.url+'/users/'+this.itemid,{...this.userinfo.value}).subscribe(res=>{
      alert("Update Successfully");
      this.getprofile();
    })
  }





  // ---------------------------------get address----------------------------------------------------


  getaddress(){
    this.http.get<any>(this.url+'/address').subscribe(addressdata=>{
      const addressemail=addressdata.filter((data:any)=>{
       return data.email==this.loggedemailid;

      })
  if(addressemail){
    this.getaddressdata=addressemail;
  }
    })
  }


  oneditaddress(item:any){
    this.addressitemid=item.id;
    this.addressform.controls['username'].setValue(item.username);
    this.addressform.controls['phnumber'].setValue(item.phnumber);
    this.addressform.controls['pincode'].setValue(item.pincode);
    this.addressform.controls['address'].setValue(item.address);
    this.addressform.controls['locality'].setValue(item.locality);
    this.addressform.controls['city'].setValue(item.city);
    this.addressform.controls['state'].setValue(item.state);
    this.addressform.controls['Homeorwork'].setValue(item.Homeorwork);

  }


  onupdateaddress(){
    this.http.put<any>(this.url+'/address/'+`${this.addressitemid}`,{...this.addressform.value,email:this.loggedemailid}).subscribe(res=>{
      alert("Updated successfully");
      this.addressform.reset();
      this.getaddress();
  })
}

  ondeleteaddress(item:any){
    this.http.delete(this.url+'/address/'+item.id).subscribe(res=>{
      alert("delete successfully");
      this.getaddress();
    })
  }

  
  }



