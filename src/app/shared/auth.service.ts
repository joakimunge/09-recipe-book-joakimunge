import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable()
export class AuthService {

  constructor(
  	private http: HttpClient,
  	private jwtHelper: JwtHelperService,
  	private location: Location
  ) { }

  login(email: string, password: string) {
  	return this.http.post<any>('http://dev.manchildman.com/auth/login', {email: email, password: password}).pipe(
	  		map(user => {
	  			if (user && user.data.access_token) {
	  				localStorage.setItem('currentUser', JSON.stringify(user))
	  			}

	  			return user;
	  		})
  		);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.location.back(); //Temp
    
  }

  register(email: string, password: string) {
  	return this.http.post<any>('http://dev.manchildman.com/auth/register', {email: email, password: password});
  }

}
