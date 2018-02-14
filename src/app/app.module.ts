import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';

import { RecipeService } from './recipe.service';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeSearchComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['dev.manchildman.com']
      }
    })
  ],
  providers: [
  	RecipeService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
