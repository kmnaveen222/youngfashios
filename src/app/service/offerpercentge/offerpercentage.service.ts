import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferpercentageService {


  constructor(private http:HttpClient) { }

ispercent(ofprice:any,oprice:any){
  console.log(ofprice,oprice);
  var sub=oprice-ofprice;
  var result= ((sub/oprice)*100);
  return Math.round(result);

}


}
