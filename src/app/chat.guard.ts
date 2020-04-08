import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { constants } from './Constants';

@Injectable({
  providedIn: 'root',
})
export class ChatGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.checkUser();
  }

  checkUser(): boolean {
    let user = constants.userName;
    console.log(user);
    if (!user) {
      this.router.navigate(['/']);
    }
    return true;
  }
}
