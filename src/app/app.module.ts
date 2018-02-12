import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RecipeService } from './recipe.service';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { AppRoutingModule } from './/app-routing.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  	RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
