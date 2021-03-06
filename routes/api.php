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


Route::middleware('cors')->group(function() {
    
   /* -- Send -- */

    // Email Route
    Route::post('send/contactEmail', [App\Http\Controllers\ContactEmailController::class, 'mail']);

    // Home Budget Route
    Route::post('send/homeBudget', [App\Http\Controllers\Budget\HomeBudgetController::class, 'store']);

    // Commercial Premises Budget Route
    Route::post('send/commercialPremisesBudget', [App\Http\Controllers\Budget\CommercialPremisesBudgetController::class, 'store']);

    /* -- List -- */

    // Home Budget GET Route
    Route::get('/', [App\Http\Controllers\Budget\HomeBudgetController::class, 'index']);

    /* -- Delete -- */

    // Home Budget DELETE ONE Route
    Route::delete('/delete/homeBudget', [App\Http\Controllers\Budget\HomeBudgetController::class, 'destroy']); 

});