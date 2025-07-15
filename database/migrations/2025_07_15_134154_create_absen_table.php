<?php

// database/migrations/2025_07_15_000002_create_absen_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('absen', function (Blueprint $table) {
            $table->id('id_absensi');
            $table->unsignedBigInteger('id_anggota');
            $table->unsignedBigInteger('id_ekstra');
            $table->date('tanggal_absen');
            $table->timestamps();

            // FK optional
            // $table->foreign('id_anggota')->references('id')->on('anggota');
            // $table->foreign('id_ekstra')->references('id')->on('ekstra');
        });
    }

    public function down(): void {
        Schema::dropIfExists('absen');
    }
};
