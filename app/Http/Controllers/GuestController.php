<?php

namespace App\Http\Controllers;

use App\Services\EkskulService;
use App\Services\PengumumanService;

class GuestController extends Controller
{
    protected EkskulService $ekskulService;
    protected PengumumanService $pengumumanService;

    public function __construct(EkskulService $ekskulService, PengumumanService $pengumumanService){
        $this->ekskulService = $ekskulService;
        $this->pengumumanService = $pengumumanService;
    }

    public function index(){
        $ekskuls = $this->ekskulService->getAllWithCount();
        $announcements = $this->pengumumanService->getAll();
        return view('guest.dashboard.index', compact('ekskuls', 'announcements'));
    }
}
