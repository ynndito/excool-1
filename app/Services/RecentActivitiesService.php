<?php

namespace App\Services;

use App\Repositories\Contracts\RecentActivitiesRepositoryInterface;

class RecentActivitiesService
{
    protected RecentActivitiesRepositoryInterface $repository;

    public function __construct(RecentActivitiesRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function getAll()
    {
        return $this->repository->getRecentActivitiesAll();
    }
}