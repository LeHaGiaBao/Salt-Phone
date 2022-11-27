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
        Schema::create('phones', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('tendienthoai');
            $table->string('hangdienthoai');
            $table->text('hinhanh');
            $table->string('giatien');
            $table->string('manhinh');
            $table->string('camerasau');
            $table->string('cameratruoc');
            $table->string('cpu');
            $table->string('hedieuhanh');
            $table->string('ram');
            $table->string('bonho');
            $table->string('pin');
            $table->integer('soluong');
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
        Schema::dropIfExists('phones');
    }
};
