<?php

namespace Database\Seeders;

use App\Models\Ekskul;
use App\Models\Kegiatan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class KegiatanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ekskuls = Ekskul::orderBy('id')->get();

        $kegiatanList = [
                        [
                'judul' => 'Latihan Rutin Basket',
                'deskripsi' => 'Latihan fisik dan strategi untuk persiapan turnamen antar sekolah.',
                'tanggal' => '2025-08-01',
                'bukti' => 'bukti1.jpg',
            ],
            [
                'judul' => 'Pertunjukan Drama Sekolah',
                'deskripsi' => 'Pagelaran drama tahunan dengan tema sosial budaya.',
                'tanggal' => '2025-08-05',
                'bukti' => 'bukti2.jpg',
            ],
            [
                'judul' => 'Kompetisi Olimpiade Sains',
                'deskripsi' => 'Seleksi siswa untuk lomba Olimpiade Sains tingkat kota.',
                'tanggal' => '2025-08-10',
                'bukti' => 'bukti3.jpg',
            ],
            [
                'judul' => 'Workshop Fotografi',
                'deskripsi' => 'Pelatihan teknik fotografi outdoor bersama fotografer profesional.',
                'tanggal' => '2025-08-12',
                'bukti' => 'bukti4.jpg',
            ],
            [
                'judul' => 'Debat Persiapan Kompetisi',
                'deskripsi' => 'Latihan debat formal dengan simulasi lomba.',
                'tanggal' => '2025-08-15',
                'bukti' => 'bukti5.jpg',
            ],
            [
                'judul' => 'Konser Mini Band Musik',
                'deskripsi' => 'Penampilan band sekolah di acara peringatan kemerdekaan.',
                'tanggal' => '2025-08-17',
                'bukti' => 'bukti6.jpg',
            ],
            [
                'judul' => 'Lomba Robotika Nasional',
                'deskripsi' => 'Persiapan dan seleksi untuk lomba robotika tingkat nasional.',
                'tanggal' => '2025-08-20',
                'bukti' => 'bukti7.jpg',
            ],
            [
                'judul' => 'Pentas Paduan Suara',
                'deskripsi' => 'Penampilan paduan suara sekolah di acara musik tahunan.',
                'tanggal' => '2025-08-22',
                'bukti' => 'bukti8.jpg',
            ],
            [
                'judul' => 'Diskusi Buku Sastra',
                'deskripsi' => 'Diskusi buku puisi dan novel terbaru dengan anggota klub sastra.',
                'tanggal' => '2025-08-25',
                'bukti' => 'bukti9.jpg',
            ],
            [
                'judul' => 'Pertandingan Futsal Antar Sekolah',
                'deskripsi' => 'Turnamen futsal antar sekolah di kota.',
                'tanggal' => '2025-08-27',
                'bukti' => 'bukti10.jpg',
            ],
            [
                'judul' => 'Kegiatan Go Green',
                'deskripsi' => 'Kampanye menanam pohon dan peduli lingkungan di sekolah.',
                'tanggal' => '2025-08-30',
                'bukti' => 'bukti11.jpg',
            ],
            [
                'judul' => 'Lomba Speech Bahasa Inggris',
                'deskripsi' => 'Kompetisi public speaking untuk meningkatkan kemampuan bahasa Inggris.',
                'tanggal' => '2025-09-01',
                'bukti' => 'bukti12.jpg',
            ],
            [
                'judul' => 'Kompetisi Olimpiade Matematika',
                'deskripsi' => 'Seleksi siswa untuk kompetisi matematika tingkat kota.',
                'tanggal' => '2025-09-03',
                'bukti' => 'bukti13.jpg',
            ],
            [
                'judul' => 'Pentas Tari Tradisional',
                'deskripsi' => 'Tampil di acara budaya dengan tarian tradisional daerah.',
                'tanggal' => '2025-09-05',
                'bukti' => 'bukti14.jpg',
            ],
            [
                'judul' => 'Workshop Jurnalistik',
                'deskripsi' => 'Pelatihan menulis artikel dan wawancara untuk majalah sekolah.',
                'tanggal' => '2025-09-07',
                'bukti' => 'bukti15.jpg',
            ],
        ];

        foreach($kegiatanList as $index => $kegiatan){
            $ekskul = $ekskuls[$index];
            Kegiatan::create([
                'ekskul_id' => $ekskul->id,
                'uploaded_by' => $ekskul->pembina_id,
                'judul' => $kegiatan['judul'],
                'deskripsi' => $kegiatan['deskripsi'],
                'tanggal' => $kegiatan['tanggal'],
                'bukti' => $kegiatan['bukti'],
            ]);
        }
    }
}
