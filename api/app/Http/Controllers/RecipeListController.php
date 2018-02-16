<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\RecipeList;
use App\User;

class RecipeListController extends Controller
{
    public function index() 
    {
        // We don't know the user here
        return response([
            'data' => Auth::user()
        ]);
    }

    public function store(Request $request) {
        $list = new RecipeList;
        $user = Auth::user();
        $list->name = $request->name;
        $list->user_id = user->id;
        $list->save();
    }

    //
}
