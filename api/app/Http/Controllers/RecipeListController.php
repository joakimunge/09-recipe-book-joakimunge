<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\RecipeList;
use App\Recipe;
use App\User;

class RecipeListController extends Controller
{

    public function __construct() {
        $this->middleware('auth:api', ['except' => ['show']]);
    }

    public function index() {
        $user = Auth::user();
        $lists = RecipeList::where('user_id', '=', $user->id)->get();

        return response([
            'status' => 'success',
            'user' => Auth::user(),
            'lists' => $lists
        ]);
    }

    public function store(Request $request) {

        try {

            $user = Auth::user();

            $list = new RecipeList;
            $list->name = $request->name;
            $list->user_id = $user->id;
            $list->save();

            return response([
                'status' => 'success',
                'user' => Auth::user(),
                'list' => $list
            ]);
        }

        catch(\Exception $e) {
            return response([
                'status' => 'Something went wrong..',
                'exception' => $e->getMessage()
            ]);
        }

        catch (\Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

            return response(['token_expired' => 'beeee'], 500);

        } catch (\Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

            return response(['token_invalid'  => 'beeee'], 500);

        } catch (\Tymon\JWTAuth\Exceptions\JWTException $e) {

            return response()->json(['token_absent' => $e->getMessage()], 500);

        }

    }

    public function save(Request $request) {

        try {
            $user = Auth::user();
            $list = RecipeList::find($request->list);

            $recipe = new Recipe;
            $recipe->remote_id = $request->recipe;
            $recipe->save();

            $list->recipes()->attach($recipe->id);


            return response([
                'status' => 'success',
                'user' => Auth::user(),
                'list' => $list,
                'recipe' => $recipe,
            ]);

        } 

        catch(\Exception $e) {
            return response([
                'status' => 'Something went wrong..',
                'exception' => $e->getMessage(),
                'list' => $list,
                'recipe' => $recipe
            ]);
        }
    }

    public function show(Request $request, $id) {

        $list = RecipeList::find($id);
        $recipes = [];
        foreach($list->recipes as $recipe) {
            $recipes[] = $recipe->pivot->remote_id;
        }

        return response([
            'status' => 'success',
            'user' => Auth::user(),
            'list' => $list,
            'recipes' => $recipes
        ]);
    }
}
