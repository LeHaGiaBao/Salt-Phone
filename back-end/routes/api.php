<?php

use App\Http\Controllers\ChitietdonhangController;
use App\Http\Controllers\DienthoaiController;
use App\Http\Controllers\DonhangController;
use App\Http\Controllers\KhachhangController;
use App\Http\Controllers\TaikhoanadminController;
use App\Http\Controllers\TaikhoanController;
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

Route::apiResource('dienthoai', DienthoaiController::class);
Route::apiResource('khachhang', KhachhangController::class);
Route::apiResource('donhang', DonhangController::class);
Route::apiResource('chitietdonhang', ChitietdonhangController::class);
Route::apiResource('taikhoan', TaikhoanController::class);
