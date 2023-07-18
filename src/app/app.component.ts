import { Component } from '@angular/core';
import { DbseviceService } from './service/dbsevice.service';
import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'YoungFashios';
  pro:any;
  loggedemailid: string | any;
  adminlogin:boolean=true;
  loggedname:any;
  mens:any="mens";
  womens:any="womens";
  kids:any="kids";

  constructor(private service:DbseviceService, private router:Router, private http:HttpClient){

  }

  ngOnInit():void{
    this.loggedemailid=localStorage.getItem('loggedemailid');
    this.loggedname=localStorage.getItem('loggedename');

if(this.loggedemailid ==''){
  this.loggedemailid =null;
}
this.getadmin();
// if(this.loggedemailid){}
  }
  getadmin(){
  this.http.get<any>('http://localhost:3000/admin').subscribe(res=>{
    res.filter((data:any)=>{
      if(data.emailid===this.loggedemailid){
        console.log("1",this.adminlogin);
        this.adminlogin=false;
        console.log("2",this.adminlogin);
      }
    })
  })
    }

logout(){
  localStorage.removeItem('loggedemailid');
  localStorage.removeItem('loggedename');
  console.log("3",this.adminlogin);
  this.adminlogin=true;
  console.log("4",this.adminlogin);
  this.router.navigate(['/home']).then(()=>{
    window.location.reload();

  })


  }

//   onclickmens(){
// localStorage.setItem("department",this.mens);
//   }
//   onclickwomens(){
//     localStorage.setItem("department",this.womens);

//   }
//   onclickkids(){
//     localStorage.setItem("department",this.kids);

//   }
}






