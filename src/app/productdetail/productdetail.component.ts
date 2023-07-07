import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent {
  productid:any;
  products:any;
  url:any="http://localhost:3000/mens-product/";
  constructor(private Activateroute:ActivatedRoute, private http:HttpClient){}
  ngOnInit():void{
    this.productid=this.Activateroute.snapshot.paramMap.get('id');
    console.log(this.productid);
    this.getproduct();
  }
  getproduct(){
    this.http.get(this.url+`${this.productid}`).subscribe(res=>{
      this.products = res;
      console.log("pro det",this.products);
  })
}
  }

