<?php

// database/migrations/2025_07_15_000003_create_bukti_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('bukti', function (Blueprint $table) {
            $table->id('id_bukti');
            $table->unsignedBigInteger('id_ekstra');
            $table->string('foto')->nullable(); // simpan path, bukan blob
            $table->date('tanggal_bukti');
            $table->text('isi_bukti');
            $table->enum('status_validasi', ['menunggu', 'diterima', 'ditolak'])->default('menunggu');
            $table->timestamps();

            // $table->foreign('id_ekstra')->references('id')->on('ekstra');
        });
    }

    public function down(): void {
        Schema::dropIfExists('bukti');
    }
};
