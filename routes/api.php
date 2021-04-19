<?php

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Email Route which we used in angular http service
Route::post('send/email', [App\Http\Controllers\ContactEmailController::class, 'mail'])->name('email');

//Budget Route which we used in angular http service
Route::post('send/budget', [App\Http\Controllers\HomeBudgetController::class, 'store'])->name('budget');
