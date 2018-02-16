<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
		// echo app('hash')->make('test');
    return $router->app->version();
});


//Recipes
$router->get('/recipes', 'RecipeController@index');

//Lists
$router->post('/lists/add', 'RecipeListController@store');
// $router->get('/lists/{list}', 'RecipeListController@show');

Route::get('lists', 'RecipeListController@index');
Route::get('lists/{list}', 'RecipeListController@show');

Route::post('login', 'AuthController@login');
Route::post('register', 'AuthController@register');
Route::post('logout', 'AuthController@logout');
Route::get('whoami', 'AuthController@getUser');