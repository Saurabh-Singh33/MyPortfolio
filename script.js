/**
 * SAURABH SINGH RATHORE — PERSONAL PORTFOLIO
 * Vanilla JavaScript interactions & EmailJS Contact Form
 */

// ==========================================================================
// EMAILJS CONFIGURATION
// Replace the placeholders below with your actual keys from EmailJS Dashboard:
// 1. PUBLIC_KEY: Account > General > Public Key
// 2. SERVICE_ID: Email Services > Service ID (e.g. "service_xxxxxxx")
// 3. TEMPLATE_ID: Email Templates > Template ID (e.g. "template_xxxxxxx")
// ==========================================================================
const EMAILJS_CONFIG = {
    PUBLIC_KEY: "YOUR_PUBLIC_KEY",       // Replace with your EmailJS Public Key
    SERVICE_ID: "YOUR_SERVICE_ID",       // Replace with your EmailJS Service ID
    TEMPLATE_ID: "YOUR_TEMPLATE_ID"      // Replace with your EmailJS Template ID
};

// Initialize EmailJS SDK
(function initEmailJS() {
    if (typeof emailjs !== "undefined" && EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
        emailjs.init({
            publicKey: EMAILJS_CONFIG.PUBLIC_KEY
        });
    }
})();

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

// ==========================================================================
// CONTACT FORM SUBMISSION WITH EMAILJS & FORM VALIDATION
// ==========================================================================
function handleContactSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById("sender-name");
    const emailInput = document.getElementById("sender-email");
    const messageInput = document.getElementById("sender-message");
    const submitBtn = document.getElementById("submit-btn");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    // 1. Basic Form Validation
    if (!name || name.length < 2) {
        showStatus("Please enter your name (at least 2 characters).", "error");
        showToast("Please enter your name.", "error");
        if (nameInput) nameInput.focus();
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showStatus("Please enter a valid email address.", "error");
        showToast("Please enter a valid email address.", "error");
        if (emailInput) emailInput.focus();
        return;
    }

    if (!message || message.length < 5) {
        showStatus("Please enter a message (at least 5 characters).", "error");
        showToast("Please enter a detailed message.", "error");
        if (messageInput) messageInput.focus();
        return;
    }

    // 2. Check if EmailJS keys are still placeholders
    if (
        EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_PUBLIC_KEY" ||
        EMAILJS_CONFIG.SERVICE_ID === "YOUR_SERVICE_ID" ||
        EMAILJS_CONFIG.TEMPLATE_ID === "YOUR_TEMPLATE_ID"
    ) {
        // Friendly notice with mailto fallback
        const mailtoUrl = `mailto:saurabhsinghdeveloper591@gmail.com?subject=${encodeURIComponent("Portfolio Message from " + name)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
        window.open(mailtoUrl, "_blank");
        showStatus("Please paste your EmailJS keys in script.js (EMAILJS_CONFIG). Opened your email client as fallback.", "error");
        showToast("Please add your EmailJS keys in script.js", "error");
        return;
    }

    // 3. UI Sending State
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    }
    showStatus("Sending your message...", "");

    // 4. Template parameters mapped for EmailJS
    // reply_to allows you to reply directly to the sender's email from Gmail!
    const templateParams = {
        name: name,
        from_name: name,
        user_name: name,
        email: email,
        user_email: email,
        reply_to: email,
        message: message,
        to_email: "saurabhsinghdeveloper591@gmail.com"
    };

    // 5. Send email via EmailJS
    emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, templateParams)
        .then(() => {
            showStatus("Thank you! Your message has been sent successfully. I'll get back to you soon.", "success");
            showToast("Message sent successfully!", "success");

            const form = document.getElementById("contact-form");
            if (form) form.reset();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            showStatus("Oops! Failed to send message. Please try again or email directly.", "error");
            showToast("Failed to send message. Please try again.", "error");
        })
        .finally(() => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = "Submit";
            }
        });
}

// Inline status display helper
function showStatus(text, type) {
    const status = document.getElementById("form-status");
    if (!status) return;

    status.textContent = text;
    status.className = "form-status";
    if (type === "success") {
        status.classList.add("success");
    } else if (type === "error") {
        status.classList.add("error");
    } else {
        status.style.display = "block";
        status.style.color = "var(--text-muted)";
    }
}

// Toast notification helper with success / error support
function showToast(message, type = "success") {
    const toast = document.getElementById("toast");
    const toastText = document.getElementById("toast-text");
    const toastIcon = document.getElementById("toast-icon");
    if (!toast || !toastText) return;

    toastText.textContent = message;

    if (toastIcon) {
        if (type === "error") {
            toastIcon.className = "fa-solid fa-circle-exclamation";
            toast.style.borderColor = "#f43f5e";
            toastIcon.style.color = "#f43f5e";
        } else {
            toastIcon.className = "fa-solid fa-circle-check";
            toast.style.borderColor = "var(--accent)";
            toastIcon.style.color = "var(--accent)";
        }
    }

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);
}

// Copy email to clipboard
function copyEmail() {
    const email = "saurabhsinghdeveloper591@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        showToast("Copied email: " + email, "success");
    }).catch(() => {
        showToast("Email: " + email, "success");
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
