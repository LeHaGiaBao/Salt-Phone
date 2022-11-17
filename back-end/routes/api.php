<?php

use App\Http\Controllers\Api\HangDienThoaiController;
use App\Models\HangDienThoai;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('hangdienthoai', HangDienThoaiController::class);

/*
CREATE DATABASE IS207;

USE IS207;

INSERT INTO hang_dien_thoai (TenHangDienThoai)
VALUE
('Apple'),
('Samsung'),
('Oppo'),
('Nokia'),
('Realme'),
('Vivo'),
('Xiaomi'),
('Asus'),
('Oneplus');
*/