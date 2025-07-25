<!-- Enhanced Login Modal -->
<div id="loginModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h3 class="modal-title">Selamat Datang Kembali</h3>
            <button class="close-btn" onclick="closeModal('loginModal')" aria-label="Tutup">&times;</button>
        </div>
        <form id="loginForm">
            <div class="form-group float-label">
                <input type="email" id="loginEmail" class="form-input" placeholder=" " required>
                <label class="form-label" for="loginEmail">Alamat Email</label>
                <div class="validation-message">Email harus diisi</div>
            </div>
            <div class="form-group float-label">
                <input type="password" id="loginPassword" class="form-input" placeholder=" " required>
                <label class="form-label" for="loginPassword">Kata Sandi</label>
                <div class="validation-message">Kata sandi harus diisi</div>
            </div>
            <div class="form-group" style="display: flex; justify-content: space-between; align-items: center;">
                <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                    <input type="checkbox" style="width: 1rem; height: 1rem;">
                    <span style="font-size: 0.875rem; color: var(--text-secondary);">Ingat saya</span>
                </label>
                <a href="#"
                    style="font-size: 0.875rem; color: var(--accent); text-decoration: none; font-weight: 500;">Lupa
                    kata sandi?</a>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;">
                🔐 Masuk
            </button>
        </form>
        <p style="text-align: center; margin-top: 1.5rem; color: var(--text-secondary);">
            Belum punya akun?
            <a href="#" onclick="closeModal('loginModal'); openModal('registerModal')"
                style="color: var(--accent); font-weight: 600;">Daftar di sini</a>
        </p>
    </div>
</div>
