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
        Schema::create('khachhangs', function (Blueprint $table) {
            $table->id()->unique()->nullable(false);
            $table->text('hovaten')->nullable(false);
            $table->string('email')->unique()->nullable(false);
            $table->string('sodienthoai')->unique()->nullable(false);
            $table->boolean('gioitinh')->nullable(false);
            $table->date('ngaysinh')->nullable(false);
            $table->foreignId('mataikhoan')->constrained('taikhoans')->unique()->nullable(false);
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
        Schema::dropIfExists('khachhangs');
    }
};
