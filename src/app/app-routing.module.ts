import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/recipes', pathMatch: 'full'},
	{ path: 'recipes', component: RecipesComponent },
	{ path: 'recipe/:id', component: RecipeDetailComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'register', component: RegisterComponent}


]

@NgModule({
	exports: [
		RouterModule
	],
	imports: [
		RouterModule.forRoot(routes)
	]
})
export class AppRoutingModule { }
