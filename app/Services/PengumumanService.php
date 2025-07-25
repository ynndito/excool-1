<?php

namespace App\Services;

use App\Repositories\Contracts\PengumumanRepositoryInterface;

class PengumumanService
{
    protected PengumumanRepositoryInterface $repository;

    public function __construct(PengumumanRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    public function getAll()
    {
        return $this->repository->getAllWithEkskul();
    }
}