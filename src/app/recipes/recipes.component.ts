import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

	recipes: Recipe[];
  defaultQuery = 'pasta';

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  	this.getRecipes(this.defaultQuery);
  }

  getRecipes(term: string): void {
  	this.recipeService.getRecipes(term)
  		.subscribe(recipes => {
        console.log(recipes)
        this.recipes = recipes['matches']
          .map(recipe => new Recipe(
            recipe.id, 
            recipe.imageUrlsBySize, 
            recipe.recipeName
            )
          );
      });
  }

}
