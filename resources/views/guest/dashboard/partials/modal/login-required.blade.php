<div id="loginRequiredModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h3 class="modal-title">Login Diperlukan</h3>
            <button class="close-btn" onclick="closeModal('loginRequiredModal')" aria-label="Tutup">&times;</button>
        </div>
        <div class="login-required">
            <div class="login-required-icon">🔒</div>
            <div class="login-required-title">Akses Terbatas</div>
            <div class="login-required-text">
                Untuk bergabung dengan kegiatan ekstrakurikuler, Anda perlu masuk ke akun terlebih dahulu.
                Jika belum memiliki akun, silakan daftar untuk memulai perjalanan ekstrakurikuler Anda!
            </div>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <button class="btn btn-primary" onclick="closeModal('loginRequiredModal'); openModal('loginModal');">
                    🔐 Masuk
                </button>
                <button class="btn btn-secondary"
                    onclick="closeModal('loginRequiredModal'); openModal('registerModal');">
                    🚀 Daftar
                </button>
            </div>
        </div>
    </div>
</div>
