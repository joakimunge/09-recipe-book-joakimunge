import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Recipe } from './recipe.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RecipeService {

	private params: any = {
	  	app_id: '79b4a929',
	  	app_key: '133a07e4ca1d6027a996f6e2bab5533e',
      query: 'pasta'
	}

  recipes: Observable<Recipe[]>;		

  constructor(private http: HttpClient) { 

   }

  private recipesUrl = `http://api.yummly.com/v1/api/recipes?_app_id=${this.params.app_id}&_app_key=${this.params.app_key}&allowedDiet[]=386^Vegan&requirePictures=true&maxResult=60&start=0&q=`;
  private recipeUrl = `http://api.yummly.com/v1/api/recipe`;
  private searchUrl = `http://api.yummly.com/v1/api/recipes?_app_id=${this.params.app_id}&_app_key=${this.params.app_key}&q=`;

  getRecipes(term: string = this.params.query): Observable<Recipe[]> {
    this.params.query = term;
    console.log(this.recipesUrl + this.params.query);
  	this.recipes = this.http.get<Recipe[]>(this.recipesUrl + this.params.query)
      .pipe(
          catchError(this.errorHandler('getRecipes', []))
        );
     return this.recipes;
  }

  getRecipe(id: string): Observable<Recipe> {
    const url = `${this.recipeUrl}/${id}?_app_id=${this.params.app_id}&_app_key=${this.params.app_key}`;
    return this.http.get<Recipe>(url)
  }

  search(term: string): Observable<Recipe[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Recipe[]>(this.searchUrl + term)
      .pipe(
        catchError(this.errorHandler<Recipe[]>('searchRecipes', []))
       );
  }

  private errorHandler<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error.message);
      return of(result as T);
    }
  }

}
