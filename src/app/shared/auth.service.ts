import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class AuthService {

  constructor(
  	private http: HttpClient,
  	private jwtHelper: JwtHelperService,
  	private router: Router
  ) { }

  login(email: string, password: string) {
  	return this.http.post<any>('http://dev.manchildman.com/auth/login', {email: email, password: password}).pipe(
	  		map(user => {
	  			if (user && user.token) {
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
  	return this.http.post<any>('http://dev.manchildman.com/auth/register', {email: email, password: password});
  }

  isUserLoggedin() {
    const user = localStorage.getItem('currentUser');

    if (user && !this.jwtHelper.isTokenExpired(user)) {
      return true;
    } else {
      return false;
    }
  }

  getUser() { //Why doesn't this work with CORS but the other methods do?
    return this.http.get<any>('http://dev.manchildman.com/lists')
      .subscribe(user => console.log(user));
  }

}
