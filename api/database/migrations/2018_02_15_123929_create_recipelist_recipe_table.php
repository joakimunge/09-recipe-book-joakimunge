<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecipeListRecipeTable extends Migration
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
          $table->integer('recipe_list_id')->unsigned();
          $table->foreign('recipe_list_id')->references('id')
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
