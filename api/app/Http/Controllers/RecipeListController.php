<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\RecipeList;
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
        $list = new RecipeList;
        $user = Auth::user();
        $list->name = $request->name;
        $list->user_id = $user->id;
        $list->save();
    }

    public function show(Request $request, $id) {

        $list = RecipeList::find($id);

        return response([
            'status' => 'success',
            'user' => Auth::user(),
            'list' => $list
        ]);
    }
}
