import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthService } from '../auth.service';

import { List } from '../../models/list.model';

const httpOptions = { // Fix this so we dont try to set auth-bearer-token when logged out
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser')).access_token}`
  })
};

@Injectable()
export class ListService {

  constructor(
  	private http: HttpClient, 
  	private auth: AuthService
  ) 
  { }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>('http://dev.manchildman.com/lists', httpOptions)
    	.pipe(
          catchError(this.errorHandler('getRecipes', []))
        );
  }

  getList(id: string): Observable<List[]> {
  	return this.http.get<List[]>(`http://dev.manchildman.com/lists/${id}`, httpOptions)
    	.pipe(
        catchError(this.errorHandler('getRecipes', []))
      );
  }

  private errorHandler<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error.message);
      return of(result as T);
    }
  }


}
