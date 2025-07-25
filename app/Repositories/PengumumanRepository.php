<?php

namespace App\Repositories;

use App\Models\Pengumuman;
use App\Repositories\Contracts\PengumumanRepositoryInterface;
use Illuminate\Support\Collection;

class PengumumanRepository implements PengumumanRepositoryInterface
{
    public function getAllWithEkskul(): Collection{
        return Pengumuman::with('ekskul')->get();
    }
}