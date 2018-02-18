import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './../shared/auth.service';

@Injectable()
export class AuthGuardService {

  constructor(
  	private auth: AuthService, 
  	private router: Router
  	) 
  {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  	const url: string = state.url;
  	return this.verifyLogin(url);
  }

  verifyLogin(url: string): boolean {
  	if (this.auth.isAuthenticated()) {
  		if (url === '/register') {
  			this.router.navigate(['/recipes']);
  		}
  		return true;
  	}

  	if(url === '/register') {
  		return true;
  	}

  	this.router.navigate(['/login']);
  	return false;
  }

}
