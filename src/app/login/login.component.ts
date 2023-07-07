import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbseviceService } from '../service/dbsevice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showPassword:boolean=false;
  loggedemailid: string | any;
  adminname: any;
  password: any;
  adminusername:any;
  adminloggedin: boolean =false;


  constructor(private http:HttpClient,private route:Router, private forms:FormBuilder) { }


  LoginForm = this.forms.group({
    emailid:[,[Validators.required, Validators.email]],
    password:[,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],

  })


adminlog(u:any,p:any){
  // this.adminname=u;
  // this.password=p;
  // if(this.adminname=="admin@gmail.com"&& this.password=="@Naveen222"){
  //   localStorage.setItem('loggedemailid',this.adminname);
  //   this.adminloggedin=true;
  //   console.log(this.adminloggedin);
  //   alert("Welcome Admin!")
  //   this.route.navigate(['/admin']).then(()=>{
  //     window.location.reload();
  //   })

  // }

  this.adminname=u;
  this.password=p;
  this.http.get<any>('http://localhost:3000/admin').subscribe(res=>{
        res.filter((data:any)=>{
        if(data.emailid===this.adminname && data.password===this.password){
          console.log("user",data.name);
          localStorage.setItem('loggedemailid',this.adminname);
          localStorage.setItem('loggednaame',data.name);
    this.adminloggedin=true;
    alert("Welcome Admin!")
    this.route.navigate(['/homeadmin']).then(()=>{
      window.location.reload();

        })
      };

    });
  })
}


  login(){


this.adminlog(this.LoginForm.value.emailid,this.LoginForm.value.password);

this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
  const user = res.find((a:any)=>{
    return a.emailid === this.LoginForm.value.emailid && a.password === this.LoginForm.value.password;
  });

  if(user){
    alert('You are successfully login');
    this.LoginForm.reset();
    localStorage.setItem('loggedemailid',user.emailid);
    localStorage.setItem('loggedename',user.name);
    this.route.navigate(['/home']).then(()=>{
      window.location.reload();
    })
  }
  if(!user && this.adminloggedin==false){
    alert('user not found. please register first')
  }
})
  }
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  ngOnInit() {



  }

}
