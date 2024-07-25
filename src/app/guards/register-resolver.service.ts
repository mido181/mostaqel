import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../service/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterResolverService implements Resolve<any> {
  constructor(private auth: AuthService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.auth.currentUser();
  }
}
