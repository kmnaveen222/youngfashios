import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  retUrl:any="home";
  adminusername:any;
  adminloggedin: boolean =false;


  constructor(private http:HttpClient,private route:Router,private router:ActivatedRoute,private dbservice:DbseviceService ,private forms:FormBuilder) { }

  LoginForm = this.forms.group({
    emailid:[,[Validators.required, Validators.email]],
    password:[,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
  })


  ngOnInit() {
    this.router.queryParamMap.subscribe(parama=>{
      this.retUrl=parama.get('retUrl');
    })

  }
// --------------------admin login check ---------------------------------------
adminlog(u:any,p:any){
  this.adminname=u;
  this.password=p;
  this.http.get<any>('http://localhost:3000/admin').subscribe(res=>{
        res.filter((data:any)=>{
        if(data.emailid===this.adminname && data.password===this.password){
          console.log("user",data.name);
          localStorage.setItem('loggedemailid',this.adminname);
          localStorage.setItem('loggedename',data.username);
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
// --------------------username and pass sending to the admin login------------------------------------
this.adminlog(this.LoginForm.value.emailid,this.LoginForm.value.password);

// ------------------------user login check---------------------------------------------
this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
  const user = res.find((a:any)=>{
    return a.emailid === this.LoginForm.value.emailid && a.password === this.LoginForm.value.password;
  });

  if(user){
    alert('You are successfully login');
    localStorage.setItem('loggedemailid',user.emailid);
    localStorage.setItem('loggedename',user.username);
    console.log("ret",this.retUrl)
// ---------------------------to check user logger in or not---------------------------------
    this.dbservice.login(this.LoginForm.value.emailid,this.LoginForm.value.password).subscribe((data)=>{

      console.log("return to"+this.retUrl);

      if(this.retUrl!==null){
        this.LoginForm.reset();
        this.route.navigate([this.retUrl]);
      }
      else{
        this.LoginForm.reset();
        this.route.navigate(['home']).then(()=>{
          window.location.reload();})

      }
    })
  }
  // -------------------user returns false & admin also false execute this below code---------------------------
  if(!user && this.adminloggedin==false){
    alert('user not found. please register first')
  }
})
  }



  // ----------------to password view----------------------
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }





}
