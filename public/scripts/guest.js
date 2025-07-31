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
    const modal = document.getElementById(modalId);
    clearFormValidation(modalId);

    // Reset form saat modal dibuka
    const forms = modal.querySelectorAll("form");
    forms.forEach((form) => form.reset());

    const inputs = modal.querySelectorAll("input");
    inputs.forEach((input) => input.classList.remove("invalid"));

    const errorForm = modal.querySelector("#errorForm");
    if (errorForm) errorForm.style.display = "none";

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
    document.body.style.overflow = "auto";

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

function showLoginRequired() {
    openModal("loginRequiredModal");
}

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

        const buttonClass = window.isLoggedIn
            ? "btn btn-primary"
            : "btn btn-disabled";
        const buttonText = window.isLoggedIn
            ? "✨ Bergabung dengan Kegiatan"
            : "🔒 Login untuk Bergabung";
        const buttonAction = window.isLoggedIn
            ? `joinActivity(${activity.id}, '${activity.nama}')`
            : `showLoginRequired()`;

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
                        <button class="${buttonClass}" style="width: 100%;" onclick="${buttonAction}">
                            ${buttonText}
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
                        <span class="badge">${announcement.ekskul.nama}</span>
                    </div>
                    <p class="card-description">${announcement.isi}</p>
                    <div class="card-meta">
                        <span>📅 ${new Date(
                            announcement.tanggal_pengumuman
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
                            activity.ekskul.nama
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

function updateUIProfile() {
    const isMobile = window.innerWidth <= 768; // bisa kamu sesuaikan breakpoint-nya

    document.getElementById("guestNav").style.display = "none";
    document.getElementById("profileNav").style.display = isMobile ? "none" : "flex";

    if (!isMobile) {
        const name = window.currentUser.name ?? "User";
        const role = window.currentUser.role ?? "-";
        const email = window.currentUser.email ?? "-";

        document.getElementById("userAvatar").textContent = name.charAt(0).toUpperCase();
        document.getElementById("userName").textContent = name;
        document.getElementById("userRole").textContent = role;
        document.getElementById("dropdownAvatar").textContent = name.charAt(0).toUpperCase();
        document.getElementById("dropdownName").textContent = name;
        document.getElementById("dropdownEmail").textContent = email;
        document.getElementById("dropdownRole").textContent = role;
    }
}

function toggleProfileDropdown() {
    const dropdown = document.getElementById("profileDropdown");
    dropdown.classList.toggle("show");
}

function closeProfileDropdown() {
    const dropdown = document.getElementById("profileDropdown");
    dropdown.classList.remove("show");
}

function openProfileModal() {
    closeProfileDropdown();
    openModal("profileModal");
    loadProfileData();
}

// Form Handlers
document
    .getElementById("loginForm")
    .addEventListener("submit", async function (e) {
        e.preventDefault();

        if (!validateForm(this)) {
            return;
        }

        document.getElementById("errorForm").style.display = "none";
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        const inputs = document.querySelectorAll("#loginForm input");

        // Add loading state
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="loading-spinner"></span> Masuk...';
        submitBtn.disabled = true;

        let response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
            body: JSON.stringify({ email, password }),
        });

        let data = await response.json();

        if (data.status == "success") {
            window.currentUser = data.user;
            // Simulate login
            showNotification(
                "Berhasil Masuk!",
                `Selamat datang kembali! Login berhasil untuk: ${email}`
            );
            closeModal("loginModal");
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            e.target.reset();
            clearFormValidation("loginModal");

            loadActivities();

            updateUIProfile();
        } else {
            inputs.forEach((input) => {
                input.classList.add("invalid");
            });

            setTimeout(() => {
                document.getElementById("errorForm").style.display = "flex";
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false; // WAJIB supaya bisa login lagi
            }, 500);
        }
    });

document
    .getElementById("registerForm")
    .addEventListener("submit", async function (e) {
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
        let response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            },
            body: JSON.stringify({ name, email, password, password_confirmation })
        });

        let data = await response.json();

        if(data.status == 'success'){
            window.isLoggedIn = data.user;
            showNotification(
                "Berhasil Daftar!",
                `Pendaftaran berhasil, selamat datang ${name}!`
            );
            closeModal("registerModal");
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            e.target.reset();
            clearFormValidation("registerModal");

            loadActivities(); // atau redirect ke halaman dashboard jika perlu
        }else{
            inputs.forEach((input) => {
                input.classList.add('invalid')
            });

            setTimeout(() => {
                document.getElementById('errorForm').style.display = "flex";
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 500);
        }

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

    if (window.currentUser) {
        updateUIProfile(); // panggil SEKALI saat awal
    }

    window.addEventListener('resize', () => {
        if (window.currentUser) {
            updateUIProfile();
        }
    });

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
