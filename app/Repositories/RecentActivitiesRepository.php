<?php

namespace App\Repositories;

use App\Models\Kegiatan;
use App\Repositories\Contracts\RecentActivitiesRepositoryInterface;
use Illuminate\Support\Collection;

class RecentActivitiesRepository implements RecentActivitiesRepositoryInterface
{
    public function getRecentActivitiesAll(): Collection
    {
        return Kegiatan::with(['ekskul', 'uploader'])->get();
    }
}