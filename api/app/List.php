<?php 

namespace App;

use Illuminate\Database\Eloquent\Model;

class List extends Model {

    protected $table = 'lists';

    protected $fillable = [
        'user_id',
        'name'
    ];

    public function recipes() {
		  return $this->belongsToMany('App\Recipe')
		  ->withTimestamps();
    }

}