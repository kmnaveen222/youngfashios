import { Component } from '@angular/core';
import { DbseviceService } from './dbsevice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YoungFashios';
  pro:any;
constructor(private service:DbseviceService){
  this.service.getproducts().subscribe(data=>{
    this.pro=data;
  })
}
}
