import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DbseviceService } from './dbsevice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private dbservice:DbseviceService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.dbservice.isuserloggedin()){
        alert("You are not logged in to view the page");
        // console.log("returl",route.url[1]);
        this.router.navigate(["login"],{queryParams:{retUrl:route.url}}); //localhost:4200/login?retUrl=product
        return false;
        }
          return true;
  }

}
