/**
 * SAURABH SINGH — PERSONAL PORTFOLIO
 * High-performance, vanilla JavaScript interactions
 */

        document.addEventListener("DOMContentLoaded", () => {
            // ==========================================
            // 1. NAVBAR SCROLL & ACTIVE STATE
            // ==========================================
            const navbar = document.getElementById("navbar");
            const navLinks = document.querySelectorAll(".nav-links a");
            const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");
            const sections = document.querySelectorAll("section[id]");
            const scrollTopBtn = document.getElementById("scroll-top");

            const handleScroll = () => {
                const scrollY = window.pageYOffset;

                // Sticky Navbar background blur
                if (scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }

                // Show/Hide Scroll-to-Top button
                if (scrollY > 400) {
                    scrollTopBtn.classList.add("visible");
                } else {
                    scrollTopBtn.classList.remove("visible");
                }

                // Active link spy based on scroll position
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

                        mobileNavLinks.forEach((link) => {
                            link.classList.remove("active");
                            if (link.getAttribute("href") === `#${sectionId}`) {
                                link.classList.add("active");
                            }
                        });
                    }
                });
            };

            window.addEventListener("scroll", handleScroll);
            handleScroll(); // Initial check

            // Scroll to Top Click
            if (scrollTopBtn) {
                scrollTopBtn.addEventListener("click", () => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                });
            }

                // ==========================================
                // 2. MOBILE NAVIGATION DRAWER
                // ==========================================
                const hamburgerBtn = document.getElementById("hamburger-btn");
                const mobileMenu = document.getElementById("mobile-menu");
                const navOverlay = document.getElementById("nav-overlay");

                const toggleMobileMenu = () => {
                    hamburgerBtn.classList.toggle("active");
                    mobileMenu.classList.toggle("open");
                    navOverlay.classList.toggle("active");
                    document.body.style.overflow = mobileMenu.classList.contains("open") ? "hidden" : "";
                };

                const closeMobileMenu = () => {
                    hamburgerBtn.classList.remove("active");
                    mobileMenu.classList.remove("open");
                    navOverlay.classList.remove("active");
                    document.body.style.overflow = "";
                };

                if (hamburgerBtn) {
                    hamburgerBtn.addEventListener("click", toggleMobileMenu);
                }

            if (navOverlay) {
                navOverlay.addEventListener("click", closeMobileMenu);
            }

            mobileNavLinks.forEach((link) => {
                link.addEventListener("click", closeMobileMenu);
            });

                // ==========================================
                // 3. TYPEWRITER EFFECT IN HERO
                // ==========================================
                const typingElement = document.getElementById("typing-element");
                if (typingElement) {
                    const phrases = [
                        "Full-Stack Web Applications",
                        "Scalable MERN Solutions",
                        "AI-Powered Smart Tools",
                        "Performant REST APIs",
                        "Clean & Intuitive Interfaces"
                    ];
            
                    let phraseIndex = 0;
                    let charIndex = 0;
                    let isDeleting = false;
                    const typeSpeed = 75;
                    const deleteSpeed = 35;
                    const pauseDelay = 1800;
            
                    const type = () => {
                        const currentPhrase = phrases[phraseIndex];
            
                        if (isDeleting) {
                            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
                            charIndex--;
                        } else {
                            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
                            charIndex++;
                        }
            
                        if (!isDeleting && charIndex === currentPhrase.length) {
                            isDeleting = true;
                            setTimeout(type, pauseDelay);
                            return;
                        } else if (isDeleting && charIndex === 0) {
                            isDeleting = false;
                            phraseIndex = (phraseIndex + 1) % phrases.length;
                            setTimeout(type, 400);
                            return;
                        }
            
                        setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
                    };
            
                    type();
                }
            
                // ==========================================
                // 4. SKILLS CATEGORY FILTER
                // ==========================================
                const filterBtns = document.querySelectorAll(".filter-btn");
                const skillCards = document.querySelectorAll(".skill-card");
            
                filterBtns.forEach((btn) => {
                    btn.addEventListener("click", () => {
                        // Update active button
                        filterBtns.forEach((b) => b.classList.remove("active"));
                        btn.classList.add("active");
            
                        const filterValue = btn.getAttribute("data-filter");
            
                        skillCards.forEach((card) => {
                            const category = card.getAttribute("data-category");
            
                            if (filterValue === "all" || category === filterValue) {
                                card.style.display = "flex";
                                card.style.animation = "fadeIn 0.35s ease forwards";
                            } else {
                                card.style.display = "none";
                            }
                        });
                    });
                });
            
                // ==========================================
                // 5. CONTACT FORM INTERACTION
                // ==========================================
                const contactForm = document.getElementById("contact-form");
                const submitBtn = document.getElementById("submit-btn");
                const toastNotice = document.getElementById("toast-notice");
                const toastMsg = document.getElementById("toast-msg");
            
                if (contactForm) {
                    contactForm.addEventListener("submit", (e) => {
                        e.preventDefault();
            
                        const name = document.getElementById("name").value.trim();
                        const originalBtnHTML = submitBtn.innerHTML;
            
                        // Loading state
                        submitBtn.innerHTML = `<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
                        submitBtn.disabled = true;
            
                        setTimeout(() => {
                            // Restore button
                            submitBtn.innerHTML = originalBtnHTML;
                            submitBtn.disabled = false;
            
                            // Show Toast Notification
                            toastMsg.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
                            toastNotice.classList.add("show");
            
                            // Clear input fields
                            contactForm.reset();
            
                            // Auto hide toast after 4.5 seconds
                            setTimeout(() => {
                                toastNotice.classList.remove("show");
                            }, 4500);
                        }, 800);
                    });
                }
        });

        // ==========================================
        // 6. GLOBAL TAB SWITCHER (ABOUT ME)
        // ==========================================
        function opentab(tabname, event) {
            const tablinks = document.getElementsByClassName("tab-links");
            const tabcontents = document.getElementsByClassName("tab-contents");

            for (let link of tablinks) {
                link.classList.remove("active-link");
            }

            for (let content of tabcontents) {
                content.classList.remove("active-tab");
            }

            // Activate selected tab and content
            if (event && event.currentTarget) {
                event.currentTarget.classList.add("active-link");
            }
            const targetTab = document.getElementById(tabname);
            if (targetTab) {
                targetTab.classList.add("active-tab");
            }
        }
