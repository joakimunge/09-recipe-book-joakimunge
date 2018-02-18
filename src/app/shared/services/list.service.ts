import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthService } from '../auth.service';

import { List } from '../../models/list.model';

@Injectable()
export class ListService {

  constructor(
  	private http: HttpClient, 
  	private auth: AuthService
  ) 
  { }

  getLists() {
    return this.http.get<List[]>('http://dev.manchildman.com/lists', this.auth.setAuthHeaders())
    	.pipe(
          catchError(this.errorHandler('getLists', []))
        );
  }

  getList(id: string) {
  	return this.http.get<List[]>(`http://dev.manchildman.com/lists/${id}`, this.auth.setAuthHeaders())
    	.pipe(
        catchError(this.errorHandler('getList', []))
    );
  }

  createList(name: string) {
    return this.http.post<any>(`http://dev.manchildman.com/lists/store`, {name: name},this.auth.setAuthHeaders())
  }

  saveToList(list: number, recipe: string) {
    return this.http.post<any>(`http://dev.manchildman.com/lists/save`, {list: list, recipe: recipe}, this.auth.setAuthHeaders())
  }

  private errorHandler<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error.message);
      return of(result as T);
    }
  }


}
