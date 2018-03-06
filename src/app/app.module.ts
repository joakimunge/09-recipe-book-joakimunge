import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';

import { RouterStateSnapshot } from '@angular/router';

import { AuthGuardService as AuthGuard} from './auth-guard/auth-guard.service';

import { RecipeService } from './recipe.service';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';

import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/auth.service';
import { RegisterComponent } from './register/register.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ListsComponent } from './lists/lists.component';
import { ListService } from './shared/services/list.service';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListCreateComponent } from './list-create/list-create.component';

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => {
      return localStorage.getItem('access_token') ? localStorage.getItem('access_token') : null;
    },
      whitelistedDomains: ['weegan.lanayru.me'],
      skipWhenExpired: true
  };
} 


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeSearchComponent,
    LoginComponent,
    RegisterComponent,
    ListsComponent,
    ListDetailComponent,
    ListCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    JwtModule.forRoot({
        jwtOptionsProvider: {
          provide: JWT_OPTIONS,
          useFactory: jwtOptionsFactory
        }
    })
  ],
  providers: [
  	RecipeService,
    AuthService,
    ListService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
