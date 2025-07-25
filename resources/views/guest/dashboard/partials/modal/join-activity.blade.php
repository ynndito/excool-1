<div id="joinActivityModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h3 class="modal-title">Bergabung dengan Kegiatan</h3>
            <button class="close-btn" onclick="closeModal('joinActivityModal')" aria-label="Tutup">&times;</button>
        </div>
        <form id="joinActivityForm">
            <div class="form-group float-label">
                <input type="text" id="selectedActivity" class="form-input" readonly>
                <label class="form-label" for="selectedActivity">Kegiatan yang Dipilih</label>
            </div>

            <div class="form-row">
                <div class="form-group float-label">
                    <input type="text" id="studentName" class="form-input" placeholder=" " required>
                    <label class="form-label" for="studentName">Nama Lengkap</label>
                    <div class="validation-message">Nama lengkap harus diisi</div>
                </div>
                <div class="form-group float-label">
                    <input type="email" id="studentEmail" class="form-input" placeholder=" " required>
                    <label class="form-label" for="studentEmail">Alamat Email</label>
                    <div class="validation-message">Email harus diisi</div>
                </div>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <label class="form-label" for="studentGrade">Tingkat Kelas</label>
                    <select id="studentGrade" class="form-select" required>
                        <option value="">Pilih Kelas</option>
                        <option value="10">Kelas 10</option>
                        <option value="11">Kelas 11</option>
                        <option value="12">Kelas 12</option>
                    </select>
                    <div class="validation-message">Tingkat kelas harus dipilih</div>
                </div>
                <div class="form-group float-label">
                    <input type="tel" id="studentPhone" class="form-input" placeholder=" " required>
                    <label class="form-label" for="studentPhone">Nomor Telepon</label>
                    <div class="validation-message">Nomor telepon harus diisi</div>
                </div>
            </div>

            <div class="form-group">
                <label class="form-label" for="whyJoin">Mengapa Anda ingin bergabung dengan kegiatan ini?</label>
                <textarea id="whyJoin" class="form-textarea"
                    placeholder="Ceritakan tentang minat Anda dan apa yang ingin Anda dapatkan dari kegiatan ini..." required></textarea>
                <div class="validation-message">Alasan bergabung harus diisi</div>
            </div>

            <div class="form-group">
                <label class="form-label" for="previousExperience">Pengalaman Sebelumnya (Opsional)</label>
                <textarea id="previousExperience" class="form-textarea"
                    placeholder="Pengalaman atau keterampilan relevan yang ingin Anda bagikan..."></textarea>
            </div>

            <div class="form-group">
                <label class="form-label" for="availability">Ketersediaan Waktu</label>
                <select id="availability" class="form-select" required>
                    <option value="">Pilih Ketersediaan</option>
                    <option value="weekdays">Hanya Hari Kerja</option>
                    <option value="weekends">Hanya Akhir Pekan</option>
                    <option value="both">Hari Kerja dan Akhir Pekan</option>
                    <option value="flexible">Jadwal Fleksibel</option>
                </select>
                <div class="validation-message">Ketersediaan waktu harus dipilih</div>
            </div>

            <div class="form-group float-label">
                <input type="text" id="emergencyContact" class="form-input" placeholder=" " required>
                <label class="form-label" for="emergencyContact">Kontak Darurat</label>
                <div class="validation-message">Kontak darurat harus diisi</div>
            </div>

            <button type="submit" class="btn btn-success" style="width: 100%; margin-top: 1.5rem;">
                ✨ Kirim Aplikasi
            </button>
        </form>
    </div>
</div>
