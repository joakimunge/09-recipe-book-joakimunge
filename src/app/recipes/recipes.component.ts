import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

	recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  	this.getRecipes();
  }

  getRecipes(): void {
  	this.recipeService.getRecipes()
  		.subscribe(recipes => {
        this.recipes = recipes['matches']
          .map(recipe => new Recipe(
            recipe.id, 
            recipe.imageUrlsBySize, 
            recipe.recipeName
            )
          );
        console.log(this.recipes)
      });
  }

}
