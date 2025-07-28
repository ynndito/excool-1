<?php

namespace App\Http\Controllers;

use App\Services\EkskulService;
use App\Services\PengumumanService;
use App\Services\RecentActivitiesService;

class GuestController extends Controller
{
    protected EkskulService $ekskulService;
    protected PengumumanService $pengumumanService;
    protected RecentActivitiesService $recentActivitiesService;

    public function __construct(EkskulService $ekskulService, PengumumanService $pengumumanService, RecentActivitiesService $recentActivitiesService){
        $this->ekskulService = $ekskulService;
        $this->pengumumanService = $pengumumanService;
        $this->recentActivitiesService = $recentActivitiesService;
    }

    public function index(){
        $ekskuls = $this->ekskulService->getAllWithCount();
        $announcements = $this->pengumumanService->getAll();
        $recentActivities = $this->recentActivitiesService->getAll();
        return view('guest.dashboard.index', compact('ekskuls', 'announcements', 'recentActivities'));
    }
}
