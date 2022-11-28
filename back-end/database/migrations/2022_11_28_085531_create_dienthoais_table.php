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
        Schema::create('dienthoais', function (Blueprint $table) {
            $table->id()->unique()->nullable(false);
            $table->text('tendienthoai')->nullable(false);
            $table->text('hinhanh')->nullable(false);
            $table->integer('giadienthoai')->nullable(false);
            $table->text('manhinh')->nullable(false);
            $table->text('camerasau')->nullable(false);
            $table->text('cameratruoc')->nullable(false);
            $table->text('cpu')->nullable(false);
            $table->text('hedieuhanh')->nullable(false);
            $table->integer('ram')->nullable(false);
            $table->integer('bonho')->nullable(false);
            $table->integer('dungluongpin')->nullable(false);
            $table->integer('soluong')->nullable(false);
            $table->foreignId('mahangdienthoai')->constrained('hangdienthoais');
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
        Schema::dropIfExists('dienthoais');
    }
};
