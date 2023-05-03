import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
pro:any;
  constructor(private http:HttpClient) {}

  ngOnInit() {
    this.http.get<any>("http://localhost:3000/home-categories").subscribe(res=>{
  this.pro = res;

    })


}
}
