<?php

namespace Database\Seeders;

use App\Models\Ekskul;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $siswaList = User::factory()->count(200)->create();

        $ekskuls = Ekskul::all();

        foreach($siswaList as $siswa){
            $jumlahEks = rand(1, 3);
            $ekskulRandom = $ekskuls->random($jumlahEks)->pluck('id');

            $siswa->ekskuls()->attach($ekskulRandom);
        }
    }
}
