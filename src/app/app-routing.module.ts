import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ListsComponent } from './lists/lists.component';
import { ListDetailComponent } from './list-detail/list-detail.component';
import { ListCreateComponent } from './list-create/list-create.component';
import { AuthGuardService as AuthGuard } from './auth-guard/auth-guard.service';

const routes: Routes = [
	{ path: '', redirectTo: '/recipes', pathMatch: 'full'},
	{ path: 'recipes', component: RecipesComponent },
	{ path: 'recipe/:id', component: RecipeDetailComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
	{ path: 'lists', component: ListsComponent, canActivate: [AuthGuard]},
	{ path: 'list/:id', component: ListDetailComponent, canActivate: [AuthGuard]},
	{ path: 'lists/create', component: ListCreateComponent, canActivate: [AuthGuard]},

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
