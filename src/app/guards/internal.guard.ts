import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternalGuard implements CanActivate {

  constructor( private router: Router ){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const { url } = state;
    if (url.indexOf('private/email-list') > -1) {
      const token = localStorage.getItem('hasspro_internal_token');
      if (!token) {
        this.router.navigateByUrl('private/auth-login');
        return false;
      }
    } else if (url.indexOf('private/auth-login') > -1) {
      const token = localStorage.getItem('hasspro_internal_token');
      if (token) {
        this.router.navigateByUrl('private/email-list');
        return true;
      }
    }

    return true;
  }

}
