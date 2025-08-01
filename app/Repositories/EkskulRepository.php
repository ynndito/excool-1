<?php

namespace App\Repositories;

use App\Models\Ekskul;
use App\Repositories\Contracts\EkskulRepositoryInterface;
use Illuminate\Support\Collection;

class EkskulRepository implements EkskulRepositoryInterface
{
    public function getAllWithPembinaAndCount(): collection{
        return Ekskul::with('pembina')->withCount('siswa')->get();
    }
}