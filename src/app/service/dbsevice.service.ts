import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DbseviceService {

constructor(private http:HttpClient) { }



adduserinformation(body:any){
  return this.http.post("http://localhost:3000/users",body)
    }


}
