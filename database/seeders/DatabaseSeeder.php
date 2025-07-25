<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory()->count(200)->create();

        $this->call([
            PembinaSeeder::class,
            EkskulSeeder::class,
            SiswaSeeder::class,
            PengumumanSeeder::class
        ]);
    }
}
