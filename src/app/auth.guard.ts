import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ActiveUserService } from './active-user.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private activeUser: ActiveUserService, private router: Router){}

  canActivate(
     next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
    ): boolean {
      //si esta logueado puede acceder
      console.log(next.url.toString())
      switch (next.url.toString()) {
        case "home":
            if(this.activeUser.isLogued())
            {
              return true
            }
            this.router.navigateByUrl("login")
            return false

        case "login":
            if(this.activeUser.isLogued())
            {
              this.router.navigateByUrl("home")
              return false
            }
            return true

      }
  }
}
