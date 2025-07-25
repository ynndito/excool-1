<?php

namespace App\Http\Controllers;

use App\Models\Ekskul;
use Illuminate\Http\Request;

class EkskulController extends Controller
{
    public function index(){
        $ekskuls = Ekskul::with('pembina')->withCount('siswa')->get();
        return view('guest.dashboard.index', compact('ekskuls'));
    }
}