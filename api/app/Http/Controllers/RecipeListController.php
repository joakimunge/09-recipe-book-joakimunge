<?php

namespace App\Http\Controllers;

use Tymon\JWTAuth\JWTAuth;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\RecipeList;
use App\User;

class RecipeListController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(JWTAuth $jwt)
    {
        $this->jwt = $jwt;
    }

    public function index() 
    {
        // $token = $this->jwt->attempt($request->only('email', 'password'))
        // $token = auth()->attempt($credentials);
        dd($this->jwt->user());
    }

    public function store(Request $request) {
        $list = new RecipeList;

        $list->name = $request->name;
        $list->user_id = $request->
        $list->save();
    }

    //
}
