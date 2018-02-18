import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

import { List } from '../models/list.model';
import { ListService } from '../shared/services/list.service';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  recipeJson: string;
  lists: List[];
  model: any = {};

  constructor(
  	private recipeService: RecipeService,
  	private route: ActivatedRoute,
  	private location: Location,
    private listService: ListService,
    private auth: AuthService
  	) { }

  ngOnInit() {
  	this.getRecipe();
    this.getLists();
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
      });
  }

  goBack(): void {
    this.location.back();
  }

  saveToList() {
    const id = this.route.snapshot.paramMap.get('id');
    this.listService.saveToList(this.model.list, id)
      .subscribe(res => console.log(res));
  }

  getLists(): void {
    this.listService.getLists()
      .subscribe(res => {
        this.lists = res['lists']
          .map(list => new List(
            list.id, 
            list.name, 
            list.user
            )
          );
      });
  }

}


