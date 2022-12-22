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
        Schema::create('donhangs', function (Blueprint $table) {
            $table->id()->unique()->nullable(false);
            $table->integer('tongsotien')->nullable(false);
            $table->text('diachigiaohang')->nullable(false);
            $table->enum('trangthaidonhang', ['Đặt hàng', 'Đang giao dịch', 'Hoàn thành', 'Kết thúc', 'Huỷ']);
            $table->foreignId('makhachhang')->constrained('khachhangs');
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
        //
    }
};
