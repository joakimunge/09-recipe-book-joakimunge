import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  constructor(
  	private http: HttpClient,
  	private jwtHelper: JwtHelperService,
  	private router: Router
  ) { 
  }

  setAuthHeaders(): any {
    if(!this.isAuthenticated()) {
      return false;
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser')).access_token}`
      })
    };
    return httpOptions;
  }

  login(email: string, password: string) {
  	return this.http.post<any>('http://weegan.lanayru.me/login', {email: email, password: password}).pipe(
	  		map(user => {
	  			if (user && user.access_token) {
	  				localStorage.setItem('currentUser', JSON.stringify(user))
	  			}

	  			return user;
	  		})
  		);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/recipes']);
  }

  register(email: string, password: string) {
  	return this.http.post<any>('http://weegan.lanayru.me/register', {email: email, password: password});
  }

  isAuthenticated(): boolean {
    if (!localStorage.getItem('currentUser')) {
      return false;
    }
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return !this.jwtHelper.isTokenExpired(user.access_token);
  }

  getUser() {
    if (!this.isAuthenticated()) {
      return;
    }
    return this.http.get<any>('http://weegan.lanayru.me/lists', this.setAuthHeaders())
      .subscribe(user => console.log(user));
  }

}
