<?php

namespace App\Http\Controllers;

use App\Models\Ekskul;
use App\Models\Pengumuman;
use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function index(){
        $ekskuls = Ekskul::with('pembina')->withCount('siswa')->get();
        $announcements = Pengumuman::with('ekskul')->get();
        return view('guest.dashboard.index', compact('ekskuls', 'announcements'));
    }
}
