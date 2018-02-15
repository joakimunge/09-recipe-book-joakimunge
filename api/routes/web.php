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

//Auth
$router->post('/auth/login', 'AuthController@login');
$router->post('/auth/register', 'AuthController@register');
$router->get('/auth/whoami', 'AuthController@getUser');

//Recipes
$router->get('/recipes', 'RecipeController@index');

//Lists
$router->post('/lists/create', 'RecipeListController@store');
$router->get('/lists', 'RecipeListController@index');

$router->group(['middleware' => 'auth:api'], function($router)
{
    $router->get('/test', function() {
        return response()->json([
            'message' => 'Hello World!',
        ]);
    });
});