<?php

// database/migrations/2025_07_15_000004_create_ekstra_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('ekstra', function (Blueprint $table) {
            $table->id('id_ekstra');
            $table->string('nama_ekstra', 60);
            $table->string('deskripsi', 255)->nullable();
            $table->string('foto')->nullable();  // ganti blob jadi path string
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('ekstra');
    }
};
