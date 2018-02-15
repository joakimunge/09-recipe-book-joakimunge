<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListRecipeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
      Schema::create('recipelist_recipe', function(Blueprint $table)
      {
          $table->integer('recipelist_id')->unsigned();
          $table->foreign('recipelist_id')->references('id')
                ->on('recipelists')->onDelete('cascade');

          $table->integer('recipe_id')->unsigned();
          $table->foreign('recipe_id')->references('id')
                ->on('recipes')->onDelete('cascade');

          $table->timestamps();
      });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('recipelist_recipe');
    }
}
