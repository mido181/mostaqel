import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

import { AuthService } from '../service/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorsService implements HttpInterceptor {
  constructor(private injector: Injector) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authService = this.injector.get(AuthService);
    const tokenreq = req.clone({
      setHeaders: { authorization: `${authService.getToken}` },
    });
    return next.handle(tokenreq);
  }
}
