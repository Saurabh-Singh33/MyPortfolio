/**
 * SAURABH SINGH RATHORE — PERSONAL PORTFOLIO
 * Vanilla JavaScript interactions & Tab navigation
 */

// Global opentab function for About Me section tabs (Skills | Experience | Education)
function opentab(tabname, event) {
    const tablinks = document.querySelectorAll(".tab-links");
    const tabcontents = document.querySelectorAll(".tab-contents");

    tablinks.forEach((link) => link.classList.remove("active-link"));
    tabcontents.forEach((content) => content.classList.remove("active-tab"));

    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active-link");
    } else {
        tablinks.forEach((link) => {
            const attr = link.getAttribute("onclick") || "";
            if (attr.includes(tabname)) {
                link.classList.add("active-link");
            }
        });
    }

    const targetTab = document.getElementById(tabname);
    if (targetTab) {
        targetTab.classList.add("active-tab");
    }
}

// Global handleContactSubmit function for Contact form
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById("sender-name")?.value.trim() || "";
    const email = document.getElementById("sender-email")?.value.trim() || "";
    const message = document.getElementById("sender-message")?.value.trim() || "";

    const mailtoUrl = `mailto:singhsaurabh43431@gmail.com?subject=${encodeURIComponent("Portfolio Contact from " + name)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;

    window.open(mailtoUrl, "_blank");

    showToast("Opening email client to reach Saurabh!");
    const form = document.getElementById("contact-form");
    if (form) form.reset();
}

// Toast notification helper
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

// Copy email to clipboard
function copyEmail() {
    const email = "singhsaurabh43431@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        showToast("Copied email: " + email);
    }).catch(() => {
        showToast("Email: " + email);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // 1. THEME TOGGLE (DARK & LIGHT MODE)
    // ==========================================================================
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector("i") : null;

    // Pure dark theme is DEFAULT. Only switch to light if explicitly chosen by user.
    const savedTheme = localStorage.getItem("saurabh_theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        if (themeIcon) {
            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");
        }
    } else {
        document.body.classList.remove("light-theme");
        if (themeIcon) {
            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");
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
