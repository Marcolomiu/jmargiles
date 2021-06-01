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

//Email Route
Route::post('send/contactEmail', [App\Http\Controllers\ContactEmailController::class, 'mail'])->name('email');

//Budget Route
Route::post('send/homeBudget', [App\Http\Controllers\Budget\HomeBudgetController::class, 'store'])->name('budget');

Route::get('/', [App\Http\Controllers\Budget\HomeBudgetController::class, 'index']);