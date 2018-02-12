import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Recipe } from './recipe.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) { 

   }

  private recipesUrl = 'api/recipes';

  getRecipes(): Observable<Recipe[]> {
  	return this.http.get<Recipe[]>(this.recipesUrl)
  		.pipe(
  			.map(recipe => new Recipe(recipe.id, recipe.title, recipe.image))
  		)
  }

}
