<?php

use App\Http\Controllers\EkskulController;
use App\Http\Controllers\GuestController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/ekstrasmexa', [GuestController::class, 'index']);