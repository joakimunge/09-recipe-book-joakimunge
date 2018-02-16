import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = { // Fix this so we dont try to set auth-bearer-token when logged out
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser')).access_token}`
  })
};

@Injectable()
export class AuthService {

  constructor(
  	private http: HttpClient,
  	private jwtHelper: JwtHelperService,
  	private router: Router
  ) { 
  }

  login(email: string, password: string) {
  	return this.http.post<any>('http://dev.manchildman.com/login', {email: email, password: password}).pipe(
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
  	return this.http.post<any>('http://dev.manchildman.com/register', {email: email, password: password});
  }

  isUserLoggedin() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user && !this.jwtHelper.isTokenExpired(user.access_token)) {
      return true;
    } else {
      return false;
    }
  }

  getUser() {
    return this.http.get<any>('http://dev.manchildman.com/lists', httpOptions)
      .subscribe(user => console.log(user));
  }

}
