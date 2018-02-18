<?php 

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model {

    protected $table = 'recipes';

    protected $fillable = [
        'remote_id'
    ];

    public function recipelists() {
	    return $this->belongsToMany('App\RecipeList', 'recipelist_recipe')
	    	->withTimestamps();
    }

}