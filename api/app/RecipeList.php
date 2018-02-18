<?php 

namespace App;

use Illuminate\Database\Eloquent\Model;

class RecipeList extends Model {

    protected $table = 'recipelists';

    protected $fillable = [
        'user_id',
        'name'
    ];

    public function recipes() {
		  return $this->belongsToMany('App\Recipe', 'recipelist_recipe')
		  	->withTimestamps();
    }

}