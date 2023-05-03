import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbseviceService {

  public cartitemlist:any=[]
  public productlist:any
constructor(private http:HttpClient) { }

getproducts(){
  return this.http.get('http://localhost:3000/profile')
}


adduserinformation(body:any){
  return this.http.post("http://localhost:3000/users",body)
    }
}
