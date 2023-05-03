import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbseviceService } from '../dbsevice.service';
import { FormBuilder, Validators } from '@angular/forms';

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
  constructor(private  service:DbseviceService,private forms:FormBuilder ,private route:Router) { }

  ResisterForm = this.forms.group({
    username:[,[Validators.required,Validators.minLength(4)]],
    emailid:[,[Validators.required, Validators.email]],
    password:[,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
    cpassword:[,[Validators.required,Validators.minLength(8), Validators.maxLength(15)]],

  })
  submitform(){
    if(this.ResisterForm.valid){
    this.service.adduserinformation(this.ResisterForm.value).subscribe(data=>{
          alert("Form submitted");
          this.ResisterForm.reset();
          this.route.navigate(['/login'])
        })
      }
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
