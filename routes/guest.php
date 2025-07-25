<?php

use App\Http\Controllers\EkskulController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/ekstrasmexa', [EkskulController::class, 'index']);