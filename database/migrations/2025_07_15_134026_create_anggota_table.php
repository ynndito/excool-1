<?php

// database/migrations/2025_07_15_000001_create_anggota_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('anggota', function (Blueprint $table) {
            $table->id();
            $table->string('nama', 100)->nullable();
            $table->string('email', 100)->nullable();
            $table->integer('umur')->nullable();
            $table->unsignedBigInteger('id_ekstra')->nullable();
            $table->timestamps();

            // kalau ada tabel ekstra, tambahkan FK
            // $table->foreign('id_ekstra')->references('id')->on('ekstra');
        });
    }

    public function down(): void {
        Schema::dropIfExists('anggota');
    }
};
