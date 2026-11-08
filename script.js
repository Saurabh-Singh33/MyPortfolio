/**
 * SAURABH SINGH RATHORE — PERSONAL PORTFOLIO
 * Clean, lightweight, vanilla JavaScript interactions
 */

document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // 1. THEME TOGGLE (DARK & LIGHT MODE)
    // ==========================================================================
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector("i") : null;

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem("saurabh_theme");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;

    if (savedTheme === "light" || (!savedTheme && prefersLight)) {
        document.body.classList.add("light-theme");
        if (themeIcon) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        }
    }

    if (themeToggleBtn && themeIcon) {
        themeToggleBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");
            const isLight = document.body.classList.contains("light-theme");

            if (isLight) {
                themeIcon.classList.remove("fa-moon");
                themeIcon.classList.add("fa-sun");
                localStorage.setItem("saurabh_theme", "light");
            } else {
                themeIcon.classList.remove("fa-sun");
                themeIcon.classList.add("fa-moon");
                localStorage.setItem("saurabh_theme", "dark");
            }
        });
    }

    // ==========================================================================
    // 2. MOBILE NAVIGATION DRAWER
    // ==========================================================================
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileNav = document.getElementById("mobile-nav");
    const mobileLinks = mobileNav ? mobileNav.querySelectorAll("a") : [];

    if (hamburgerBtn && mobileNav) {
        hamburgerBtn.addEventListener("click", () => {
            hamburgerBtn.classList.toggle("active");
            mobileNav.classList.toggle("open");
        });

        mobileLinks.forEach((link) => {
            link.addEventListener("click", () => {
                hamburgerBtn.classList.remove("active");
                mobileNav.classList.remove("open");
            });
        });

        // Close when clicking outside
        document.addEventListener("click", (e) => {
            if (!mobileNav.contains(e.target) && !hamburgerBtn.contains(e.target) && mobileNav.classList.contains("open")) {
                hamburgerBtn.classList.remove("active");
                mobileNav.classList.remove("open");
            }
        });
    }

    // ==========================================================================
    // 3. SCROLLSPY & ACTIVE LINK INDICATION
    // ==========================================================================
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section[id]");
    const scrollTopBtn = document.getElementById("scroll-top");

    const onScroll = () => {
        const scrollY = window.pageYOffset;

        // Show/Hide Scroll-to-Top Button
        if (scrollTopBtn) {
            if (scrollY > 400) {
                scrollTopBtn.classList.add("visible");
            } else {
                scrollTopBtn.classList.remove("visible");
            }
        }

        // Active Nav Link Spy
        sections.forEach((section) => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });

                mobileLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Scroll to Top action
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});

// ==========================================================================
// 4. COPY EMAIL HELPER WITH TOAST
// ==========================================================================
function copyEmail() {
    const email = "saurabhsingh.dev@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        showToast("Copied email to clipboard!");
    }).catch(() => {
        showToast("Email: " + email);
    });
}

function showToast(message) {
    const toast = document.getElementById("toast");
    const toastText = document.getElementById("toast-text");
    if (!toast || !toastText) return;

    toastText.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}
