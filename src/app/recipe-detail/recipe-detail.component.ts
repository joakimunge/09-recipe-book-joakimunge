import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  recipeJson: string;

  constructor(
  	private recipeService: RecipeService,
  	private route: ActivatedRoute,
  	private location: Location
  	) { }

  ngOnInit() {
  	this.getRecipe();
  }

  getRecipe(): void {
  	const id = this.route.snapshot.paramMap.get('id');
  	this.recipeService.getRecipe(id)
  		.subscribe(res => {
        this.recipeJson = JSON.stringify(res, null, 2)
        this.recipe = new Recipe(
          res.id, 
          res['images'][0]['hostedMediumUrl'], 
          res['name'],
          res['ingredientLines'],
          res.source,
          res['numberOfServings'],
          res.totalTime,
          res.rating
          )
        console.log(this.recipe);
      });
  }

  goBack(): void {
    this.location.back();
  }

}
