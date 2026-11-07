/**
 * ==========================================================================
 * SAURABH.SYS — THE DEVELOPER ARCHIVE
 * Interactive Personal Operating System Engine
 * Architect: Saurabh Singh Rathore
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    // ==========================================================================
    // 1. BOOT SEQUENCE INITIALIZATION
    // ==========================================================================
    const bootSequence = document.getElementById("boot-sequence");
    const bootLogs = document.getElementById("boot-logs");
    const bootProgressFill = document.getElementById("boot-progress-fill");
    const bootPct = document.getElementById("boot-pct");
    const bootStatusText = document.getElementById("boot-status-text");
    const bootTimer = document.getElementById("boot-timer");
    const bootSkipBtn = document.getElementById("boot-skip-btn");

    const bootSteps = [
        { text: "[OK] ROM Check 64MB // 0x7FFE0000", status: "Checking memory buffers...", pct: 20 },
        { text: "[OK] Loading operative profile: SAURABH SINGH RATHORE", status: "Parsing credentials...", pct: 45 },
        { text: "[OK] Mounting projects: VartaConnect, Medicare, PaperReader-RAG, Aaroh", status: "Linking project laboratory...", pct: 70 },
        { text: "[OK] Indexing full-stack & AI/ML toolkit matrix", status: "Compiling skills...", pct: 85 },
        { text: "[OK] National Level Hackathon telemetry verified (Team Rebel)", status: "Finalizing boot protocols...", pct: 95 },
        { text: "[OK] SYSTEM READY // ACCESS GRANTED", status: "System operational.", pct: 100 }
    ];

    let currentStep = 0;
    let bootStartTime = performance.now();
    let bootInterval = null;
    let timerInterval = null;

    const endBootSequence = () => {
        clearInterval(bootInterval);
        clearInterval(timerInterval);
        if (bootSequence) {
            bootSequence.classList.add("boot-complete");
            setTimeout(() => {
                bootSequence.style.display = "none";
            }, 600);
        }
    };

    // Live boot timer ticker
    if (bootTimer) {
        timerInterval = setInterval(() => {
            const elapsed = ((performance.now() - bootStartTime) / 1000).toFixed(2);
            bootTimer.textContent = `${elapsed}s`;
        }, 30);
    }

    // Step-by-step log output
    const runBootStep = () => {
        if (currentStep < bootSteps.length) {
            const step = bootSteps[currentStep];

            const line = document.createElement("div");
            line.className = "boot-line";
            line.innerHTML = `<span class="status-ok">${step.text.split(" ")[0]}</span> <span>${step.text.substring(step.text.indexOf(" ") + 1)}</span>`;
            bootLogs.appendChild(line);

            bootProgressFill.style.width = `${step.pct}%`;
            bootPct.textContent = `${step.pct}%`;
            bootStatusText.textContent = step.status;

            currentStep++;
            bootInterval = setTimeout(runBootStep, 260);
        } else {
            setTimeout(endBootSequence, 400);
        }
    };

    // Start boot sequence
    bootInterval = setTimeout(runBootStep, 200);

    // Skip handler
    if (bootSkipBtn) {
        bootSkipBtn.addEventListener("click", endBootSequence);
    }
    window.addEventListener("keydown", (e) => {
        if (e.code === "Space" || e.code === "Escape") {
            if (bootSequence && !bootSequence.classList.contains("boot-complete")) {
                endBootSequence();
            }
        }
    });

    // ==========================================================================
    // 2. LIVE TELEMETRY SYSTEM CLOCK
    // ==========================================================================
    const liveClockEl = document.getElementById("sys-live-clock");
    const updateSystemClock = () => {
        if (!liveClockEl) return;
        const now = new Date();
        const hrs = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        const secs = String(now.getSeconds()).padStart(2, '0');
        liveClockEl.textContent = `${hrs}:${mins}:${secs} IST`;
    };
    setInterval(updateSystemClock, 1000);
    updateSystemClock();

    // ==========================================================================
    // 3. SYSTEM BAR SCROLL & SCROLLSPY
    // ==========================================================================
    const systemBar = document.getElementById("system-bar");
    const navLinks = document.querySelectorAll(".sys-nav-link");
    const mobileLinks = document.querySelectorAll(".mobile-nav-list a");
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
        const scrollPos = window.pageYOffset;

        // Sticky style toggle
        if (scrollPos > 40) {
            systemBar.classList.add("bar-scrolled");
        } else {
            systemBar.classList.remove("bar-scrolled");
        }

        // ScrollSpy
        sections.forEach((section) => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute("id");

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
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
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // ==========================================================================
    // 4. THEME ACCENT SWITCHER
    // ==========================================================================
    const themeBtn = document.getElementById("theme-toggle-btn");
    const themeVariants = ["default", "theme-emerald", "theme-amber"];
    let currentThemeIndex = 0;

    // Load saved preference
    const savedTheme = localStorage.getItem("saurabh_sys_theme");
    if (savedTheme && themeVariants.includes(savedTheme)) {
        currentThemeIndex = themeVariants.indexOf(savedTheme);
        if (savedTheme !== "default") {
            document.body.classList.add(savedTheme);
        }
    }

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            // Remove previous theme class
            if (themeVariants[currentThemeIndex] !== "default") {
                document.body.classList.remove(themeVariants[currentThemeIndex]);
            }

            // Next theme
            currentThemeIndex = (currentThemeIndex + 1) % themeVariants.length;
            const newTheme = themeVariants[currentThemeIndex];

            if (newTheme !== "default") {
                document.body.classList.add(newTheme);
            }

            localStorage.setItem("saurabh_sys_theme", newTheme);
            showSystemToast(`Palette switched: ${newTheme.toUpperCase().replace("THEME-", "")}`);
        });
    }

    // ==========================================================================
    // 5. MOBILE DRAWER NAVIGATION
    // ==========================================================================
    const mobileToggle = document.getElementById("mobile-toggle-btn");
    const mobileDrawer = document.getElementById("mobile-drawer");

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener("click", () => {
            mobileDrawer.classList.toggle("open");
        });

        mobileLinks.forEach((link) => {
            link.addEventListener("click", () => {
                mobileDrawer.classList.remove("open");
            });
        });

        // Close on click outside
        document.addEventListener("click", (e) => {
            if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target) && mobileDrawer.classList.contains("open")) {
                mobileDrawer.classList.remove("open");
            }
        });
    }

    // ==========================================================================
    // 6. PROJECT LABORATORY CATEGORY FILTERS
    // ==========================================================================
    const filterBtns = document.querySelectorAll(".lab-filter-btn");
    const artifactCards = document.querySelectorAll(".artifact-card");

    filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            artifactCards.forEach((card) => {
                const category = card.getAttribute("data-category");
                if (filterValue === "all" || category === filterValue) {
                    card.style.display = "flex";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // ==========================================================================
    // 7. KEYBOARD SHORTCUTS & CLI LAUNCHER
    // ==========================================================================
    const toggleCliBtn = document.getElementById("toggle-cli-btn");
    const heroCliTrigger = document.getElementById("hero-cli-trigger");
    const terminalSection = document.getElementById("terminal");
    const terminalInput = document.getElementById("terminal-input");

    const jumpToTerminal = () => {
        if (terminalSection) {
            terminalSection.scrollIntoView({ behavior: "smooth" });
            setTimeout(() => {
                if (terminalInput) terminalInput.focus();
            }, 500);
        }
    };

    if (toggleCliBtn) toggleCliBtn.addEventListener("click", jumpToTerminal);
    if (heroCliTrigger) heroCliTrigger.addEventListener("click", jumpToTerminal);

    window.addEventListener("keydown", (e) => {
        // Press 'T' (when not inside an input/textarea) to jump to CLI
        if ((e.key === "t" || e.key === "T") && document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") {
            e.preventDefault();
            jumpToTerminal();
        }
        // Press ESC to close modal
        if (e.key === "Escape") {
            closeInspectorModal();
        }
    });

    // ==========================================================================
    // 8. INTERACTIVE COMMAND TERMINAL ENGINE
    // ==========================================================================
    const terminalHistory = document.getElementById("terminal-history");
    const terminalScreen = document.getElementById("terminal-screen");
    const cmdHistory = [];
    let historyIdx = -1;

    const commands = {
        help: () => `
            <p class="cmd-highlight">AVAILABLE SYSTEM COMMANDS:</p>
            <p>• <span class="cmd-success">about</span>      : Detailed dossier on Saurabh Singh Rathore</p>
            <p>• <span class="cmd-success">projects</span>   : Index of engineered software artifacts & live URLs</p>
            <p>• <span class="cmd-success">skills</span>     : Technical capability & toolkit matrix</p>
            <p>• <span class="cmd-success">proof</span>      : National Hackathon victory verification</p>
            <p>• <span class="cmd-success">contact</span>    : Dispatch direct communication channels</p>
            <p>• <span class="cmd-success">github</span>     : Open GitHub profile in new tab</p>
            <p>• <span class="cmd-success">linkedin</span>   : Open LinkedIn profile in new tab</p>
            <p>• <span class="cmd-success">theme</span>      : Cycle color palette variant</p>
            <p>• <span class="cmd-success">clear</span>      : Reset terminal output buffer</p>
        `,
        about: () => `
            <p class="cmd-highlight">OPERATIVE DOSSIER // SAURABH SINGH RATHORE:</p>
            <p>• Status       : B.Tech Computer Science and Engineering Undergraduate</p>
            <p>• Disciplines  : Full-Stack Engineering, Software Development, Applied AI/ML</p>
            <p>• Philosophy   : "I don't just write code. I build things that work."</p>
            <p>• Focus Areas  : MERN Stack, Next.js, RAG Pipelines, Speech AI, Algorithms & DSA</p>
        `,
        projects: () => `
            <p class="cmd-highlight">VERIFIED PROJECT ARTIFACTS:</p>
            <p>1. <span class="cmd-success">VartaConnect</span>      [Real-Time & WebRTC] — Video meetings, meeting rooms & collaborative whiteboard.</p>
            <p>2. <span class="cmd-success">Medicare</span>          [Full-Stack MERN] — Doctor appointment & clinical management portal. <br>&nbsp;&nbsp;&nbsp;↳ Live: https://mymedicareapp.vercel.app/</p>
            <p>3. <span class="cmd-success">PaperReader-RAG</span>   [AI / RAG Pipeline] — Contextual PDF research paper query engine. <br>&nbsp;&nbsp;&nbsp;↳ Live: https://paper-reader-rag-vgdh.vercel.app/</p>
            <p>4. <span class="cmd-success">Aaroh Assistant</span>   [Python & Speech AI] — Desktop voice automation & OS workflow executor.</p>
        `,
        skills: () => `
            <p class="cmd-highlight">TOOLKIT MATRIX:</p>
            <p>• <span class="cmd-highlight">Frontend</span>  : HTML5, CSS3, JavaScript (ES6+), React, Next.js, Tailwind, Bootstrap</p>
            <p>• <span class="cmd-highlight">Backend</span>   : Node.js, Express.js, Java, Spring Boot</p>
            <p>• <span class="cmd-highlight">Databases</span> : MongoDB, MySQL</p>
            <p>• <span class="cmd-highlight">Languages</span> : C, Java, JavaScript, Python</p>
            <p>• <span class="cmd-highlight">Tooling</span>   : Git, GitHub, Postman, WebSockets, REST APIs</p>
        `,
        proof: () => `
            <p class="cmd-highlight">PROOF OF EXECUTION // VERIFIED MILESTONES:</p>
            <p class="cmd-success">🏆 NATIONAL LEVEL HACKATHON WINNER / FINALIST (SIH Team Rebel)</p>
            <p>• Team ID     : SPT-61</p>
            <p>• Innovation  : AI-Powered Mock Interview Platform with OpenAI Whisper integration</p>
            <p>• Benchmark   : 500+ Algorithmic DSA Problems Solved in Java & C</p>
        `,
        contact: () => `
            <p class="cmd-highlight">COMMUNICATION DISPATCH:</p>
            <p>• Email    : saurabhsingh.dev@gmail.com</p>
            <p>• GitHub   : https://github.com/Saurabh-Singh33</p>
            <p>• LinkedIn : https://www.linkedin.com/in/saurabh-singh-b1b88a326/</p>
            <p>• Location : India (Open to Remote & Global Relocation)</p>
        `,
        github: () => {
            window.open("https://github.com/Saurabh-Singh33", "_blank");
            return `<p class="cmd-success">Opening GitHub profile in new browser tab...</p>`;
        },
        linkedin: () => {
            window.open("https://www.linkedin.com/in/saurabh-singh-b1b88a326/", "_blank");
            return `<p class="cmd-success">Opening LinkedIn profile in new browser tab...</p>`;
        },
        theme: () => {
            if (themeBtn) themeBtn.click();
            return `<p class="cmd-success">Palette variant toggled.</p>`;
        },
        clear: () => {
            terminalHistory.innerHTML = "";
            return "";
        },
        date: () => `<p class="cmd-highlight">SYSTEM TIME: ${new Date().toUTCString()} (UTC)</p>`,
        time: () => `<p class="cmd-highlight">LOCAL TELEMETRY: ${new Date().toLocaleTimeString()} IST</p>`,
        whoami: () => `<p class="cmd-success">guest@saurabh.sys [READ_ONLY_ACCESS // VISITOR]</p>`
    };

    window.executeCLICommand = (cmdStr) => {
        const rawCmd = cmdStr.trim().toLowerCase();
        if (!rawCmd) return;

        // Print user entry
        const entryBlock = document.createElement("div");
        entryBlock.className = "terminal-output-block";
        entryBlock.innerHTML = `<span class="terminal-prompt-label">saurabh@archive:<span class="cwd">~</span>$</span> <span style="color:#fff;">${rawCmd}</span>`;
        terminalHistory.appendChild(entryBlock);

        // Process response
        const resultBlock = document.createElement("div");
        resultBlock.className = "terminal-output-block";

        if (commands[rawCmd]) {
            const output = commands[rawCmd]();
            if (rawCmd !== "clear") {
                resultBlock.innerHTML = output;
                terminalHistory.appendChild(resultBlock);
            }
        } else {
            resultBlock.innerHTML = `<p class="cmd-warn">Command not recognized: '${rawCmd}'. Type 'help' to review valid operations.</p>`;
            terminalHistory.appendChild(resultBlock);
        }

        // Auto-scroll terminal
        if (terminalScreen) {
            terminalScreen.scrollTop = terminalScreen.scrollHeight;
        }
    };

    if (terminalInput) {
        terminalInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const val = terminalInput.value.trim();
                if (val) {
                    cmdHistory.push(val);
                    historyIdx = cmdHistory.length;
                    window.executeCLICommand(val);
                    terminalInput.value = "";
                }
            } else if (e.key === "ArrowUp") {
                if (cmdHistory.length > 0 && historyIdx > 0) {
                    historyIdx--;
                    terminalInput.value = cmdHistory[historyIdx];
                }
            } else if (e.key === "ArrowDown") {
                if (historyIdx < cmdHistory.length - 1) {
                    historyIdx++;
                    terminalInput.value = cmdHistory[historyIdx];
                } else {
                    historyIdx = cmdHistory.length;
                    terminalInput.value = "";
                }
            }
        });
    }
});

// ==========================================================================
// 9. PROJECT INSPECTOR MODAL SYSTEM
// ==========================================================================
const projectSpecs = {
    vartaconnect: {
        id: "SYS://LAB/VARTACONNECT_SPEC.JSON",
        title: "VartaConnect",
        type: "Real-Time Video Communication & Whiteboard Platform",
        problem: "Eliminates friction in remote engineering collaboration by providing zero-download meeting rooms and synchronized interactive canvas diagramming.",
        architecture: [
            "WebRTC Mesh implementation for low-latency peer-to-peer audio and video transmission.",
            "Node.js and WebSockets signaling layer for connection handshake and dynamic room codes.",
            "Custom HTML5 Canvas collaborative whiteboard synchronized across multi-user sessions in real-time.",
            "Modern component frontend architecture with responsive stream layouts."
        ],
        stack: ["React", "Node.js", "WebSockets", "WebRTC", "Canvas API", "Express"],
        github: "https://github.com/Saurabh-Singh33",
        live: null
    },
    medicare: {
        id: "SYS://LAB/MEDICARE_SPEC.JSON",
        title: "Medicare",
        type: "Full-Stack Doctor Appointment & Healthcare Management Platform",
        problem: "Replaces fragmented clinical scheduling and physical records with a centralized digital appointment and patient management system.",
        architecture: [
            "Role-based JWT authentication separating Patient, Doctor, and Administrative access tiers.",
            "Dynamic booking algorithm ensuring doctor availability without double-booking conflicts.",
            "Cloudinary cloud integration for automated medical reports, prescription PDFs, and doctor avatars.",
            "RESTful API backend in Express.js with optimized MongoDB schema indexes."
        ],
        stack: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary", "Tailwind CSS"],
        github: "https://github.com/Saurabh-Singh33",
        live: "https://mymedicareapp.vercel.app/"
    },
    paperreader: {
        id: "SYS://LAB/PAPERREADER_RAG_SPEC.JSON",
        title: "PaperReader-RAG",
        type: "AI-Powered Research Paper Reading & Q&A Assistant",
        problem: "Drastically shortens academic literature review cycles by providing citation-grounded semantic question answering over dense research papers.",
        architecture: [
            "Retrieval-Augmented Generation (RAG) architecture chunking PDFs with sliding semantic windows.",
            "Vector database embedding indexing for contextual similarity search and top-k retrieval.",
            "Strict hallucination mitigation by constraining LLM responses strictly to retrieved academic passages.",
            "Next.js and Python backend pipeline parsing structured mathematical and tabular PDF content."
        ],
        stack: ["Python", "Next.js", "LangChain", "Vector Database", "RAG Pipeline", "OpenAI"],
        github: "https://github.com/Saurabh-Singh33/PaperReader-RAG",
        live: "https://paper-reader-rag-vgdh.vercel.app/"
    },
    aaroh: {
        id: "SYS://LAB/AAROH_ASSISTANT_SPEC.JSON",
        title: "Aaroh Voice Assistant",
        type: "Desktop AI Voice Operations & System Automation",
        problem: "Automates repetitive developer tasks, system queries, and local OS navigation via hands-free voice commands.",
        architecture: [
            "Speech recognition (STT) parsing acoustic audio into structured command tokens.",
            "Configurable wake-word detection loop running with low background CPU overhead.",
            "Pyttsx3 text-to-speech audio feedback synthesizing spoken confirmations.",
            "Python OS automation scripts executing shell routines, application launching, and web search."
        ],
        stack: ["Python", "SpeechRecognition", "Pyttsx3", "OS Automation", "NLP Parser"],
        github: "https://github.com/Saurabh-Singh33/Aaroh-voice-assistant",
        live: null
    }
};

function inspectProject(projectId) {
    const spec = projectSpecs[projectId];
    if (!spec) return;

    const modal = document.getElementById("project-inspector-modal");
    const modalId = document.getElementById("inspector-modal-id");
    const modalBody = document.getElementById("inspector-modal-body");
    const modalFooter = document.getElementById("inspector-modal-footer");

    modalId.textContent = spec.id;

    let actionsHTML = `<button class="btn-sys btn-sys-outline" onclick="closeInspectorModal()">[ ESC ] CLOSE</button>`;
    if (spec.live) {
        actionsHTML += `<a href="${spec.live}" target="_blank" rel="noopener noreferrer" class="btn-sys btn-sys-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i> OPEN LIVE DEMO</a>`;
    }
    if (spec.github) {
        actionsHTML += `<a href="${spec.github}" target="_blank" rel="noopener noreferrer" class="btn-sys btn-sys-outline"><i class="fa-brands fa-github"></i> REPOSITORY</a>`;
    }
    modalFooter.innerHTML = actionsHTML;

    modalBody.innerHTML = `
        <div>
            <h2>${spec.title}</h2>
            <div class="spec-tagline">${spec.type}</div>
        </div>

        <div class="spec-section-block">
            <h4>[ 01 // PROBLEM SOLVED ]</h4>
            <p>${spec.problem}</p>
        </div>

        <div class="spec-section-block">
            <h4>[ 02 // ARCHITECTURE & ENGINEERING HIGHLIGHTS ]</h4>
            <ul>
                ${spec.architecture.map(item => `<li>${item}</li>`).join("")}
            </ul>
        </div>

        <div class="spec-section-block">
            <h4>[ 03 // TECHNICAL STACK ]</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 6px;">
                ${spec.stack.map(tech => `<span class="tech-chip">${tech}</span>`).join("")}
            </div>
        </div>
    `;

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeInspectorModal() {
    const modal = document.getElementById("project-inspector-modal");
    if (modal) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
    }
}

// ==========================================================================
// 10. CONTACT / MAIL DISPATCH HANDLER
// ==========================================================================
function copyEmailToClipboard() {
    const email = "saurabhsingh.dev@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        showSystemToast("Copied 'saurabhsingh.dev@gmail.com' to clipboard.");
    }).catch(() => {
        showSystemToast("Email: saurabhsingh.dev@gmail.com");
    });
}

function handleMailDispatch(event) {
    event.preventDefault();
    const name = document.getElementById("sender-name").value.trim();
    const subject = document.getElementById("sender-subject").value.trim();
    const message = document.getElementById("sender-message").value.trim();

    const formattedSubject = encodeURIComponent(`[SAURABH.SYS] ${subject} - from ${name}`);
    const formattedBody = encodeURIComponent(`Hello Saurabh,

${message}

Best regards,
${name}`);

    const mailtoUrl = `mailto:saurabhsingh.dev@gmail.com?subject=${formattedSubject}&body=${formattedBody}`;
    
    showSystemToast("Opening mail client dispatch...");
    window.location.href = mailtoUrl;
}

// System Toast Notification Utility
function showSystemToast(msg) {
    const toast = document.getElementById("sys-toast");
    const toastText = document.getElementById("toast-text");
    if (!toast || !toastText) return;

    toastText.textContent = msg;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 4000);
}
