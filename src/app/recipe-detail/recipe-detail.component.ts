import { Component, OnInit, Input } from '@angular/core';
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

	@Input() recipe: Recipe;

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
  		.subscribe(recipe => this.recipe = JSON.stringify(recipe, null, 2));
  }

}
