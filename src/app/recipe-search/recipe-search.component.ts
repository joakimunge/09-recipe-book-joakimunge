import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { RecipesComponent } from '../recipes/recipes.component';

@Component({
  selector: 'app-recipe-search',
  templateUrl: './recipe-search.component.html',
  styleUrls: ['./recipe-search.component.css']
})
export class RecipeSearchComponent implements OnInit {
	recipes$: Observable<Recipe[]>;
	private searchTerms = new Subject<string>();
  public filters = [];
  public toggles = [
      { value: true},
      { value: false},
  ];

  constructor(private recipeService: RecipeService, private recipesComponent: RecipesComponent) { }

  ngOnInit(): void {
    this.filters = [
    { name: 'appetizers', toggled: false, value: '&allowedCourse[]=course^course-Appetizers'},
    { name: 'entrees', toggled: false, value: '&allowedCourse[]=course^course-Main%20Dishes'},
    { name: 'desserts', toggled: false, value: '&allowedCourse[]=course^course-Desserts'},
    ];
    
  	this.recipes$ = this.searchTerms.pipe(
  		debounceTime(800),
  		distinctUntilChanged(),
  		switchMap((term: string) => this.recipeService.search(term))
  	);
  }

  onSubmit(term: string) {
    let filters = this.filters.map(filter => {
      if(filter.toggled) {
        return filter.value;
      }
    })
    let filterString = filters.join('');
    term += filterString;
    this.recipesComponent.getRecipes(term);
  }

  search(term: string): void {
  	this.searchTerms.next(term);
  }

}
