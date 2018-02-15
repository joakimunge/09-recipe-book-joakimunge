<?php 

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model {

    protected $table = 'recipes';

    protected $fillable = [
        'remote_id'
    ];

    public function lists() {
	    return $this->belongsToMany('App\List')
	    ->withTimestamps();
    }

}