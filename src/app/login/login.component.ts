import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbseviceService } from '../dbsevice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // username:any="";
  // password:any="";
  // user:any;
  // saved:any;
  showPassword:boolean=false;

  constructor(private http:HttpClient,private service:DbseviceService,private route:Router, private forms:FormBuilder) { }


  LoginForm = this.forms.group({
    emailid:[,[Validators.required, Validators.email]],
    password:[,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],

  })
  login(){

// console.log(this.LoginForm.value);
this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
  const user = res.find((a:any)=>{
    return a.emailid === this.LoginForm.value.emailid && a.password === this.LoginForm.value.password
  });

  if(user){
    alert('You are successfully login');
    this.LoginForm.reset();
    this.route.navigate(['home']);
  }
  else{
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
