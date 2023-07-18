import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css']
})
export class MyorderComponent {

  url:any="http://localhost:3000";
  orderdata:any;
  emailid: any;
  myorderproduct: boolean=true;
  orderstatus3:any="Order Delivered";
  orderstatus: any="Cancelled";

  constructor(private http:HttpClient){ }

  ngOnInit(){
    this.emailid=localStorage.getItem('loggedemailid');
    this.getorders();
  }

  oncancel(item:any){
    const data={orderstatus:this.orderstatus}
    // console.log("da",orderstatus:this.orderstatus)
    this.http.patch(this.url+'/orders/'+`${item.id}`,data).subscribe(data=>{
      this.getorders();
    })
  }
  getorders(){
    this.http.get<any>(this.url+'/orders').subscribe(orderdata=>{
      const data=orderdata.filter((orddata:any)=>{
        return orddata.email==this.emailid;
      })
      if(data){
        this.orderdata=data;
        this.myorderproduct=false;
      }


    })
  }

}
