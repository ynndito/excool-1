<?php

namespace App\Repositories\Contracts;

use Illuminate\Support\Collection;

interface RecentActivitiesRepositoryInterface
{
    public function getRecentActivitiesAll(): collection;
}