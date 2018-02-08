import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { RecipeService } from './recipe.service';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
		  InMemoryDataService, { dataEncapsulation: false }
		)
  ],
  providers: [
  	RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
