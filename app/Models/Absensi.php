<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Absensi extends Model
{
    use HasFactory;

    protected $table = 'absensis';

    protected $fillable = [
        'user_id',
        'ekskul_id',
        'tanggal',
        'status',
        'is_valid',
    ];

    # Relasi: absensi dimiliki oleh siswa dari user
    public function user(){
        return $this->belongsTo(User::class);
    }

    # Relasi: absensi dimiliki oleh ekskul tertentu
    public function ekskul(){
        return $this->belongsTo(Ekskul::class);
    }
}
