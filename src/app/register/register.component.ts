import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbseviceService } from '../service/dbsevice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Confirmedvalidators } from '../confirmvalidation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // name:any="";
  // mailid:any="";
  // password:any="";
  // cpassword:any="";

  showPassword: boolean = false;
  showConfirmPassword:boolean=false;
  constructor(private  service:DbseviceService,private forms:FormBuilder ,private route:Router, private http:HttpClient) { }

  ResisterForm = this.forms.group({
    username:[,[Validators.required,Validators.pattern(/^(?!.*([a-zA-Z0-9])\1{3})[a-zA-Z0-9!@#$%^&*-_]+$/)]],
    emailid:[,[Validators.required, Validators.email,Validators.pattern(/^(?!.*([a-z])\1{3})[a-z0-9]+(\.[a-z0-9]+)*@([\w-]+\.)+(com|net|org|edu|gov|int|mil|biz|info|name|museum|coop|aero|[a-z]{2})$/)]],
    password:[,[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]){8,32}.+$/)]],
    cpassword:[,[Validators.required]]},{validator:Confirmedvalidators('password','cpassword')})
  submitform(){

    this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
      const user = res.find((a:any)=>{
        console.log(a.emailid);
        return a.emailid === this.ResisterForm.value.emailid ;
      });

      if(user){
        alert('You are already register using this email-id');
      }
      else{
        if(this.ResisterForm.valid){
          this.service.adduserinformation(this.ResisterForm.value).subscribe(data=>{
                alert("Form submitted");
                this.ResisterForm.reset();
                this.route.navigate(['/login'])
              })
            }
      }
    })




  }






  // submitform(ResisterForm:any){

  //   var body={
  //     name:this.name,
  //     emailid:this.mailid,
  //     password:this.password
 // ,Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}')
  //   }

  //   this.service.adduserinformation(body).subscribe(data=>{
  //     alert("Form submitted");
  //     ResisterForm.form.reset();
  //     this.route.navigate(['/login'])

  //   })
  // }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  ngOnInit() {
  }

}
