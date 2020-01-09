import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
  constructor(
    private hardcodedauthenticationService:HardcodedauthenticationService,
    private router:Router

  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {//throw new Error("Method not implemented.");
    if(this.hardcodedauthenticationService.isUserLoggedIn())
    return true;
    this.router.navigate(['login'])
    return false;
  }
 

  
  }
