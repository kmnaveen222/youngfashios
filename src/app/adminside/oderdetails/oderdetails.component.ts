import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-oderdetails',
  templateUrl: './oderdetails.component.html',
  styleUrls: ['./oderdetails.component.css']
})
export class OderdetailsComponent {
  orderdata: any;
  orderstatus:any="Waiting for confirmation";
  orderstatus1:any="Approved";
  orderstatus2:any="Ready to shipment";
  orderstatus3:any="Order Delivered";
  orderstatus4:any="Cancelled";
  url:any="http://localhost:3000";

constructor(private http:HttpClient){}

ngOnInit(){
  this.getorders();

}
  getorders(){
    this.http.get<any>(this.url+'/orders').subscribe(orderdata=>{
      this.orderdata=orderdata;

    })
  }

  onorderstatus(item:any){
    if(item.orderstatus==this.orderstatus){
      const data={orderstatus:this.orderstatus1}
      // console.log("da",orderstatus:this.orderstatus)
      this.http.patch(this.url+'/orders/'+`${item.id}`,data).subscribe(data=>{
        this.getorders();
      })
    }
    if(item.orderstatus==this.orderstatus1){
      const data={orderstatus:this.orderstatus2}
      // console.log("da",orderstatus:this.orderstatus)
      this.http.patch(this.url+'/orders/'+`${item.id}`,data).subscribe(data=>{
        this.getorders();
      })
    }
    if(item.orderstatus==this.orderstatus2){
      const data={orderstatus:this.orderstatus3}
      // console.log("da",orderstatus:this.orderstatus)
      this.http.patch(this.url+'/orders/'+`${item.id}`,data).subscribe(data=>{
        this.getorders();
      })
    }
  }
}
