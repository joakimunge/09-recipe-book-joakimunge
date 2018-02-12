import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Recipe } from './recipe.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RecipeService {

	private params: any = {
	  	app_id: '79b4a929',
	  	app_key: '133a07e4ca1d6027a996f6e2bab5533e'
	}		

  constructor(private http: HttpClient) { 

   }

  private recipesUrl = `http://api.yummly.com/v1/api/recipes?_app_id=${this.params.app_id}&_app_key=${this.params.app_key}&q=pasta&requirePictures=true&maxResult=10&start=0`;
  private recipeUrl = `http://api.yummly.com/v1/api/recipe`;

  getRecipes(): Observable<Recipe[]> {
  	return this.http.get<Recipe[]>(this.recipesUrl)
  }

  getRecipe(id: string): Observable<Recipe> {
    const url = `${this.recipeUrl}/${id}?_app_id=${this.params.app_id}&_app_key=${this.params.app_key}`;
    return this.http.get<Recipe>(url)
  }

}
