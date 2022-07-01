<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_details',function (Blueprint $table){
               $table->bigIncrements('id');
               $table->string('product_code');
               $table->string('img1');
               $table->string('img2');
               $table->string('img3');
               $table->string('img4');
               $table->string('address');
               $table->string('des');
               $table->string('color');
               $table->string('size');
               $table->string('details');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
