<?php

use App\Http\Controllers\PhoneController;
use App\Models\Phone;
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

Route::resource('phones', PhoneController::class);

// Route::get('/phones', function () {
//     return Phone::all()->toJson();
// });

// Route::get('/phones/{id}', function () {
//     return Phone::all()->toJson();
// });
