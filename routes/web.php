<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\QuiSomController;

/*
Route::get('/', function () {
    return view('app');
});

Route::get('quisom', function () {
    return view('quisom');
});
*/

Route::view('/{path?}', 'app');

//Auth::routes();