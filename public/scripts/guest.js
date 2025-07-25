// Pagination state
const paginationState = {
    activities: { currentPage: 1, itemsPerPage: 6, isLoading: false },
    announcements: { currentPage: 1, itemsPerPage: 4, isLoading: false },
    recentActivities: { currentPage: 1, itemsPerPage: 4, isLoading: false },
};

// Notification System
let notificationId = 0;

function showNotification(title, message, type = "success", duration = 4000) {
    const container = document.getElementById("notificationContainer");
    const id = ++notificationId;

    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.id = `notification-${id}`;

    let icon = "✅";
    if (type === "error") icon = "❌";
    else if (type === "warning") icon = "⚠️";
    else if (type === "info") icon = "ℹ️";

    notification.innerHTML = `
                <div class="notification-content">
                    <span class="notification-icon">${icon}</span>
                    <div class="notification-text">
                        <div class="notification-title">${title}</div>
                        <div class="notification-message">${message}</div>
                    </div>
                </div>
                <button class="notification-close" onclick="hideNotification('${id}')">&times;</button>
                <div class="notification-progress"></div>
            `;

    container.appendChild(notification);

    // Trigger animation
    setTimeout(() => {
        notification.classList.add("show");
    }, 100);

    // Auto hide
    setTimeout(() => {
        hideNotification(id);
    }, duration);

    return id;
}

function hideNotification(id) {
    const notification = document.getElementById(`notification-${id}`);
    if (notification) {
        notification.classList.remove("show");
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const themeToggles = document.querySelectorAll(".theme-toggle");
    const mobileThemeIcon = document.getElementById("mobileThemeIcon");

    if (body.getAttribute("data-theme") === "dark") {
        body.removeAttribute("data-theme");
        themeToggles.forEach((toggle) => {
            if (toggle.textContent.includes("Ganti")) {
                toggle.innerHTML = "<span>🌙</span> Ganti Tema";
            } else {
                toggle.textContent = "🌙";
            }
        });
        if (mobileThemeIcon) mobileThemeIcon.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        body.setAttribute("data-theme", "dark");
        themeToggles.forEach((toggle) => {
            if (toggle.textContent.includes("Ganti")) {
                toggle.innerHTML = "<span>☀️</span> Ganti Tema";
            } else {
                toggle.textContent = "☀️";
            }
        });
        if (mobileThemeIcon) mobileThemeIcon.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const themeToggles = document.querySelectorAll(".theme-toggle");
    const mobileThemeIcon = document.getElementById("mobileThemeIcon");

    if (savedTheme === "dark") {
        document.body.setAttribute("data-theme", "dark");
        themeToggles.forEach((toggle) => {
            if (toggle.textContent.includes("Ganti")) {
                toggle.innerHTML = "<span>☀️</span> Ganti Tema";
            } else {
                toggle.textContent = "☀️";
            }
        });
        if (mobileThemeIcon) mobileThemeIcon.textContent = "☀️";
    } else {
        themeToggles.forEach((toggle) => {
            if (toggle.textContent.includes("Ganti")) {
                toggle.innerHTML = "<span>🌙</span> Ganti Tema";
            } else {
                toggle.textContent = "🌙";
            }
        });
        if (mobileThemeIcon) mobileThemeIcon.textContent = "🌙";
    }
}

// Mobile Menu
function toggleMobileMenu() {
    const mobileNav = document.getElementById("mobileNav");
    mobileNav.classList.toggle("active");
}

function closeMobileMenu() {
    const mobileNav = document.getElementById("mobileNav");
    mobileNav.classList.remove("active");
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
    document.body.style.overflow = "auto";
    // Clear validation states when modal is closed
    clearFormValidation(modalId);
}

// Clear form validation
function clearFormValidation(modalId) {
    const modal = document.getElementById(modalId);
    const inputs = modal.querySelectorAll(
        ".form-input, .form-select, .form-textarea"
    );
    const messages = modal.querySelectorAll(".validation-message");

    inputs.forEach((input) => {
        input.classList.remove("invalid", "valid");
    });

    messages.forEach((message) => {
        message.classList.remove("show");
    });
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
        const modalId = event.target.id;
        event.target.classList.remove("active");
        document.body.style.overflow = "auto";
        clearFormValidation(modalId);
    }
};

// FAQ Toggle
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector("span");

    if (answer.classList.contains("active")) {
        answer.classList.remove("active");
        icon.textContent = "+";
    } else {
        // Close all other FAQs
        document
            .querySelectorAll(".faq-answer")
            .forEach((ans) => ans.classList.remove("active"));
        document
            .querySelectorAll(".faq-question span")
            .forEach((ic) => (ic.textContent = "+"));

        // Open this FAQ
        answer.classList.add("active");
        icon.textContent = "−";
    }
}

// Form validation
function validateInput(input) {
    const isValid = input.value.trim() !== "";
    const message = input.parentElement.querySelector(".validation-message");

    if (!isValid && input.hasAttribute("required")) {
        input.classList.add("invalid");
        input.classList.remove("valid");
        if (message) message.classList.add("show");
        return false;
    } else if (input.hasAttribute("required")) {
        input.classList.remove("invalid");
        input.classList.add("valid");
        if (message) message.classList.remove("show");
        return true;
    }
    return true;
}

function validateForm(form) {
    const inputs = form.querySelectorAll(
        "input[required], select[required], textarea[required]"
    );
    let isValid = true;

    inputs.forEach((input) => {
        if (!validateInput(input)) {
            isValid = false;
        }
    });

    return isValid;
}

// Extended Sample Data
console.log(sampleActivities);

const sampleAnnouncements = [
    {
        id: 1,
        judul: "Pendaftaran Turnamen Basket Dibuka",
        isi: "Pendaftaran untuk turnamen basket antar sekolah tahunan sekarang dibuka. Ini adalah kesempatan bagus untuk menunjukkan keterampilan dan mewakili sekolah kita. Daftar sebelum 15 Maret!",
        tanggal: "2024-03-01",
        ekskul: "Klub Basket",
    },
    {
        id: 2,
        judul: "Pertunjukan Musim Semi Komunitas Drama",
        isi: "Bergabunglah dengan kami untuk pertunjukan musim semi yang spektakuler 'Romeo dan Juliet' pada 20 April di auditorium sekolah. Tiket tersedia di kantor utama.",
        tanggal: "2024-03-05",
        ekskul: "Komunitas Drama",
    },
    {
        id: 3,
        judul: "Workshop Persiapan Pameran Sains",
        isi: "Workshop wajib untuk semua anggota Olimpiade Sains pada 12 Maret untuk mempersiapkan pameran sains regional yang akan datang. Bawa ide proyek Anda!",
        tanggal: "2024-03-08",
        ekskul: "Olimpiade Sains",
    },
    {
        id: 4,
        judul: "Pameran Fotografi",
        isi: "Kirimkan foto terbaik Anda untuk pameran fotografi tahunan kami. Tema: 'Kehidupan di Sekolah'. Batas waktu pengiriman: 25 Maret.",
        tanggal: "2024-03-10",
        ekskul: "Klub Fotografi",
    },
    // Additional announcements
    {
        id: 5,
        judul: "Kompetisi Robotika Nasional",
        isi: "Tim robotika sekolah akan mengikuti kompetisi nasional bulan depan. Dukungan dan doa dari seluruh warga sekolah sangat diharapkan!",
        tanggal: "2024-03-12",
        ekskul: "Klub Robotika",
    },
    {
        id: 6,
        judul: "Konser Paduan Suara",
        isi: "Paduan suara akan mengadakan konser amal untuk membantu korban bencana alam. Tiket dapat dibeli di sekretariat sekolah mulai hari ini.",
        tanggal: "2024-03-14",
        ekskul: "Paduan Suara",
    },
    {
        id: 7,
        judul: "Lomba Puisi Tingkat Provinsi",
        isi: "Anggota klub sastra terpilih akan mewakili sekolah dalam lomba puisi tingkat provinsi. Persiapan intensif dimulai minggu depan.",
        tanggal: "2024-03-16",
        ekskul: "Klub Sastra",
    },
    {
        id: 8,
        judul: "Turnamen Futsal Antar Kelas",
        isi: "Turnamen futsal antar kelas akan dimulai bulan depan. Setiap kelas dapat mendaftarkan satu tim. Hadiah menarik menanti pemenang!",
        tanggal: "2024-03-18",
        ekskul: "Tim Futsal",
    },
    {
        id: 9,
        judul: "Aksi Penanaman Pohon",
        isi: "Klub lingkungan mengajak seluruh warga sekolah untuk berpartisipasi dalam aksi penanaman 1000 pohon di area sekolah dan sekitarnya.",
        tanggal: "2024-03-20",
        ekskul: "Klub Lingkungan",
    },
    {
        id: 10,
        judul: "English Speech Contest",
        isi: "Kompetisi pidato bahasa Inggris tingkat sekolah akan diadakan bulan depan. Pendaftaran dibuka untuk semua siswa yang berminat.",
        tanggal: "2024-03-22",
        ekskul: "Klub Bahasa Inggris",
    },
    {
        id: 11,
        judul: "Olimpiade Matematika Regional",
        isi: "Tim olimpiade matematika berhasil lolos ke tingkat regional. Persiapan intensif dan bimbingan khusus akan diberikan kepada peserta.",
        tanggal: "2024-03-24",
        ekskul: "Klub Matematika",
    },
    {
        id: 12,
        judul: "Festival Tari Nusantara",
        isi: "Klub tari tradisional akan tampil dalam Festival Tari Nusantara tingkat kota. Latihan tambahan akan diadakan setiap hari Sabtu.",
        tanggal: "2024-03-26",
        ekskul: "Klub Tari Tradisional",
    },
];

const sampleRecentActivities = [
    {
        id: 1,
        judul: "Sesi Latihan Basket",
        deskripsi:
            "Sesi latihan mingguan yang fokus pada strategi bertahan dan koordinasi tim. Partisipasi yang bagus dengan 20+ anggota berpartisipasi!",
        tanggal: "2024-03-08",
        ekskul: "Klub Basket",
    },
    {
        id: 2,
        judul: "Latihan Drama",
        deskripsi:
            "Latihan terakhir untuk pertunjukan musim semi yang akan datang dengan kostum lengkap dan makeup. Para pemain siap bersinar di panggung!",
        tanggal: "2024-03-07",
        ekskul: "Komunitas Drama",
    },
    {
        id: 3,
        judul: "Eksperimen Lab Sains",
        deskripsi:
            "Eksperimen kimia langsung mempersiapkan kompetisi sains regional. Siswa mengeksplorasi struktur molekul dan reaksi.",
        tanggal: "2024-03-06",
        ekskul: "Olimpiade Sains",
    },
    {
        id: 4,
        judul: "Jalan-jalan Foto di Pusat Kota",
        deskripsi:
            "Sesi fotografi grup mengeksplorasi arsitektur urban dan fotografi jalanan. Anggota berhasil mengambil foto kehidupan kota yang menakjubkan!",
        tanggal: "2024-03-05",
        ekskul: "Klub Fotografi",
    },
    // Additional recent activities
    {
        id: 5,
        judul: "Workshop Programming Robot",
        deskripsi:
            "Anggota klub robotika belajar programming lanjutan untuk persiapan kompetisi. Fokus pada algoritma navigasi dan sensor integration.",
        tanggal: "2024-03-04",
        ekskul: "Klub Robotika",
    },
    {
        id: 6,
        judul: "Latihan Vokal Paduan Suara",
        deskripsi:
            "Sesi latihan intensif untuk persiapan konser amal. Harmonisasi suara semakin membaik dengan teknik breathing yang benar.",
        tanggal: "2024-03-03",
        ekskul: "Paduan Suara",
    },
    {
        id: 7,
        judul: "Diskusi Buku Bulan Ini",
        deskripsi:
            "Klub sastra mendiskusikan novel 'Laskar Pelangi' dengan antusias. Banyak insight menarik tentang pendidikan dan persahabatan.",
        tanggal: "2024-03-02",
        ekskul: "Klub Sastra",
    },
    {
        id: 8,
        judul: "Friendly Match Futsal",
        deskripsi:
            "Pertandingan persahabatan melawan sekolah tetangga berakhir dengan kemenangan 3-2. Kerjasama tim semakin solid!",
        tanggal: "2024-03-01",
        ekskul: "Tim Futsal",
    },
    {
        id: 9,
        judul: "Kampanye Reduce Plastic",
        deskripsi:
            "Klub lingkungan mengadakan kampanye pengurangan penggunaan plastik di kantin sekolah. Respon positif dari seluruh warga sekolah.",
        tanggal: "2024-02-28",
        ekskul: "Klub Lingkungan",
    },
    {
        id: 10,
        judul: "English Conversation Club",
        deskripsi:
            "Sesi conversation dengan native speaker dari program pertukaran pelajar. Topik diskusi tentang cultural differences sangat menarik!",
        tanggal: "2024-02-27",
        ekskul: "Klub Bahasa Inggris",
    },
];

// Load More Items Function
function loadMoreItems(section) {
    const state = paginationState[section];
    if (state.isLoading) return;

    state.isLoading = true;
    const loadMoreBtn = document.getElementById(
        `loadMore${section.charAt(0).toUpperCase() + section.slice(1)}`
    );
    const spinner = loadMoreBtn.querySelector(".loading-spinner");
    const btnText = loadMoreBtn.childNodes[2]; // Get text node

    // Show loading state
    spinner.style.display = "inline-block";
    loadMoreBtn.disabled = true;

    // Simulate loading delay
    setTimeout(() => {
        state.currentPage++;

        if (section === "activities") {
            loadActivities();
        } else if (section === "announcements") {
            loadAnnouncements();
        } else if (section === "recentActivities") {
            loadRecentActivities();
        }

        // Hide loading state
        spinner.style.display = "none";
        loadMoreBtn.disabled = false;
        state.isLoading = false;

        showNotification(
            "Berhasil!",
            `Lebih banyak ${
                section === "activities"
                    ? "kegiatan"
                    : section === "announcements"
                    ? "pengumuman"
                    : "kegiatan terbaru"
            } telah dimuat.`,
            "info",
            2000
        );
    }, 1000);
}

// Create skeleton loading cards
function createSkeletonCard() {
    const skeletonCard = document.createElement("div");
    skeletonCard.className = "skeleton-card";
    skeletonCard.innerHTML = `
                <div class="skeleton-line short"></div>
                <div class="skeleton-line long"></div>
                <div class="skeleton-line medium"></div>
                <div class="skeleton-line long"></div>
                <div class="skeleton-line short"></div>
            `;
    return skeletonCard;
}

// Load Activities with pagination
function loadActivities() {
    const grid = document.getElementById("activitiesGrid");
    const state = paginationState.activities;
    const startIndex = 0;
    const endIndex = state.currentPage * state.itemsPerPage;
    const itemsToShow = sampleActivities.slice(startIndex, endIndex);
    const totalItems = sampleActivities.length;

    // Clear existing cards
    grid.innerHTML = "";

    // Add cards with staggered animation
    itemsToShow.forEach((activity, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
                    <div class="card-header">
                        <div>
                            <h3 class="card-title">${activity.nama}</h3>
                        </div>
                        <span class="badge badge-success">Aktif</span>
                    </div>
                    <p class="card-description">${activity.deskripsi}</p>
                    <div class="card-meta">
                        <span>👨‍🏫 ${activity.pembina.name}</span>
                        <span>👥 ${activity.siswa_count} anggota</span>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-primary" style="width: 100%;" onclick="joinActivity(${activity.id}, '${activity.nama}')">
                            ✨ Bergabung dengan Kegiatan
                        </button>
                    </div>
                `;

        // Add staggered animation
        setTimeout(() => {
            card.classList.add("show");
        }, index * 100);

        grid.appendChild(card);
    });

    // Update counter
    const counter = document.getElementById("activitiesCounter");
    counter.textContent = `Menampilkan ${Math.min(
        endIndex,
        totalItems
    )} dari ${totalItems} kegiatan`;

    // Show/hide load more button
    const loadMoreBtn = document.getElementById("loadMoreActivities");
    if (endIndex < totalItems) {
        loadMoreBtn.style.display = "flex";
    } else {
        loadMoreBtn.style.display = "none";
    }
}

// Load Announcements with pagination
function loadAnnouncements() {
    const grid = document.getElementById("announcementsGrid");
    const state = paginationState.announcements;
    const startIndex = 0;
    const endIndex = state.currentPage * state.itemsPerPage;
    const itemsToShow = sampleAnnouncements.slice(startIndex, endIndex);
    const totalItems = sampleAnnouncements.length;

    // Clear existing cards
    grid.innerHTML = "";

    // Add cards with staggered animation
    itemsToShow.forEach((announcement, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
                    <div class="card-header">
                        <div>
                            <h3 class="card-title">${announcement.judul}</h3>
                        </div>
                        <span class="badge">${announcement.ekskul}</span>
                    </div>
                    <p class="card-description">${announcement.isi}</p>
                    <div class="card-meta">
                        <span>📅 ${new Date(
                            announcement.tanggal
                        ).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}</span>
                        <span>📢 Pengumuman</span>
                    </div>
                `;

        // Add staggered animation
        setTimeout(() => {
            card.classList.add("show");
        }, index * 100);

        grid.appendChild(card);
    });

    // Update counter
    const counter = document.getElementById("announcementsCounter");
    counter.textContent = `Menampilkan ${Math.min(
        endIndex,
        totalItems
    )} dari ${totalItems} pengumuman`;

    // Show/hide load more button
    const loadMoreBtn = document.getElementById("loadMoreAnnouncements");
    if (endIndex < totalItems) {
        loadMoreBtn.style.display = "flex";
    } else {
        loadMoreBtn.style.display = "none";
    }
}

// Load Recent Activities with pagination
function loadRecentActivities() {
    const grid = document.getElementById("recentActivitiesGrid");
    const state = paginationState.recentActivities;
    const startIndex = 0;
    const endIndex = state.currentPage * state.itemsPerPage;
    const itemsToShow = sampleRecentActivities.slice(startIndex, endIndex);
    const totalItems = sampleRecentActivities.length;

    // Clear existing cards
    grid.innerHTML = "";

    // Add cards with staggered animation
    itemsToShow.forEach((activity, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
                    <div class="card-header">
                        <div>
                            <h3 class="card-title">${activity.judul}</h3>
                        </div>
                        <span class="badge badge-warning">${
                            activity.ekskul
                        }</span>
                    </div>
                    <p class="card-description">${activity.deskripsi}</p>
                    <div class="card-meta">
                        <span>📅 ${new Date(
                            activity.tanggal
                        ).toLocaleDateString("id-ID", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}</span>
                        <span>🎯 Kegiatan</span>
                    </div>
                `;

        // Add staggered animation
        setTimeout(() => {
            card.classList.add("show");
        }, index * 100);

        grid.appendChild(card);
    });

    // Update counter
    const counter = document.getElementById("recentActivitiesCounter");
    counter.textContent = `Menampilkan ${Math.min(
        endIndex,
        totalItems
    )} dari ${totalItems} kegiatan`;

    // Show/hide load more button
    const loadMoreBtn = document.getElementById("loadMoreRecentActivities");
    if (endIndex < totalItems) {
        loadMoreBtn.style.display = "flex";
    } else {
        loadMoreBtn.style.display = "none";
    }
}

// Join Activity Function
function joinActivity(activityId, activityName) {
    document.getElementById("selectedActivity").value = activityName;
    openModal("joinActivityModal");
}

// Form Handlers
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateForm(this)) {
        return;
    }

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Add loading state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<span class="loading-spinner"></span> Masuk...';
    submitBtn.disabled = true;

    // Simulate login
    setTimeout(() => {
        showNotification(
            "Berhasil Masuk!",
            `Selamat datang kembali! Login berhasil untuk: ${email}`
        );
        closeModal("loginModal");
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        e.target.reset();
        clearFormValidation("loginModal");
    }, 1500);
});

document
    .getElementById("registerForm")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        if (!validateForm(this)) {
            return;
        }

        const name = document.getElementById("registerName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            showNotification(
                "Kesalahan!",
                "Kata sandi tidak cocok! Silakan coba lagi.",
                "error"
            );
            return;
        }

        // Add loading state
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML =
            '<span class="loading-spinner"></span> Membuat akun...';
        submitBtn.disabled = true;

        // Simulate registration
        setTimeout(() => {
            showNotification(
                "Pendaftaran Berhasil!",
                `🎉 Selamat datang di EkstraKu, ${name}! Akun Anda telah berhasil dibuat. Sekarang Anda dapat menjelajahi dan bergabung dengan kegiatan!`
            );
            closeModal("registerModal");
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            e.target.reset();
            clearFormValidation("registerModal");
        }, 2000);
    });

document
    .getElementById("joinActivityForm")
    .addEventListener("submit", function (e) {
        e.preventDefault();

        if (!validateForm(this)) {
            return;
        }

        const activityName = document.getElementById("selectedActivity").value;
        const studentName = document.getElementById("studentName").value;
        const studentEmail = document.getElementById("studentEmail").value;
        const whyJoin = document.getElementById("whyJoin").value;

        // Add loading state
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML =
            '<span class="loading-spinner"></span> Mengirim...';
        submitBtn.disabled = true;

        // Simulate join activity
        setTimeout(() => {
            showNotification(
                "Aplikasi Berhasil Dikirim!",
                `🎉 Aplikasi berhasil dikirim untuk ${activityName}! Mentor kami akan meninjau aplikasi Anda dan menghubungi dalam 2-3 hari kerja. Bersiaplah untuk memulai perjalanan bersama kami!`
            );
            closeModal("joinActivityModal");
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            e.target.reset();
            clearFormValidation("joinActivityModal");
        }, 2000);
    });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// Initialize
document.addEventListener("DOMContentLoaded", function () {
    loadTheme();
    loadActivities();
    loadAnnouncements();
    loadRecentActivities();

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = "running";
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll(".fade-in").forEach((el) => {
        observer.observe(el);
    });

    // Highlight active section in bottom nav
    updateActiveNavLink();
    window.addEventListener("scroll", updateActiveNavLink);

    // Add real-time form validation
    document
        .querySelectorAll(".form-input, .form-select, .form-textarea")
        .forEach((input) => {
            // Only validate after user has interacted with the field
            let hasInteracted = false;

            input.addEventListener("focus", function () {
                hasInteracted = true;
            });

            input.addEventListener("blur", function () {
                if (hasInteracted && this.hasAttribute("required")) {
                    validateInput(this);
                }
            });

            input.addEventListener("input", function () {
                if (
                    hasInteracted &&
                    this.classList.contains("invalid") &&
                    this.value.trim()
                ) {
                    validateInput(this);
                }
            });
        });
});

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll("section[id]");
    const scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            document.querySelectorAll(".bottom-nav-link").forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("data-section") === sectionId) {
                    link.classList.add("active");
                }
            });
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
    const mobileNav = document.getElementById("mobileNav");
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

    if (
        !mobileNav.contains(event.target) &&
        !mobileMenuBtn.contains(event.target)
    ) {
        mobileNav.classList.remove("active");
    }
});

// Keyboard navigation support
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        // Close any open modals
        document.querySelectorAll(".modal.active").forEach((modal) => {
            const modalId = modal.id;
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
            clearFormValidation(modalId);
        });

        // Close mobile menu
        closeMobileMenu();

        // Close any notifications
        document
            .querySelectorAll(".notification.show")
            .forEach((notification) => {
                const id = notification.id.replace("notification-", "");
                hideNotification(id);
            });
    }
});

// Ripple effect for touch devices
if ("ontouchstart" in window) {
    document.addEventListener("touchstart", function (e) {
        const target = e.target.closest(
            ".btn, .card, .mobile-nav-link, .bottom-nav-link"
        );
        if (!target) return;

        const rect = target.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        const y = e.touches[0].clientY - rect.top;

        const ripple = document.createElement("span");
        ripple.className = "ripple";
        ripple.style.left = x + "px";
        ripple.style.top = y + "px";

        target.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}
