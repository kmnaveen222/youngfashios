import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Mens',
  templateUrl: './Mens.component.html',
  styleUrls: ['./Mens.component.css']
})
export class MensComponent implements OnInit {
pro:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>("http://localhost:3000/mens-product").subscribe(res=>{
  this.pro = res;

    })
  }

}
