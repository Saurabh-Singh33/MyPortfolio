import os

html_code = """<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Saurabh Singh | Full-Stack Developer Portfolio</title>
    <meta name="description" content="Personal Portfolio of Saurabh Singh - Full-Stack Developer & Computer Science Engineering Student.">
    <meta name="theme-color" content="#080808">

    <!-- Fonts: Plus Jakarta Sans & Outfit -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

    <!-- Stylesheet -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- ==========================================================================
         NAVIGATION
         ========================================================================== -->
    <header id="navbar">
        <div class="container nav-container">
            <a href="#home" class="nav-logo">
                SAURABH<span>.</span>
            </a>

            <!-- Desktop Links -->
            <ul class="nav-links">
                <li><a href="#home" class="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#technical-skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <!-- Nav Actions: Theme Toggle & Mobile Hamburger -->
            <div class="nav-actions">
                <button class="theme-btn" id="theme-toggle" aria-label="Toggle Light and Dark Mode" title="Toggle Light/Dark Theme">
                    <i class="fa-solid fa-moon"></i>
                </button>
                <button class="hamburger" id="hamburger-btn" aria-label="Open Navigation Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>

    <!-- Mobile Navigation Drawer -->
    <div class="mobile-nav" id="mobile-nav">
        <a href="#home" class="active">Home</a>
        <a href="#about">About</a>
        <a href="#technical-skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#contact">Contact</a>
    </div>

    <!-- ==========================================================================
         MAIN CONTENT
         ========================================================================== -->
    <main>
        <!-- ==========================================================================
             HERO SECTION
             ========================================================================== -->
        <section id="home" class="hero">
            <div class="container">
                <div class="hero-grid">
                    <!-- Left Hero Content -->
                    <div class="hero-content">
                        <div class="hero-intro">HELLO, I'M</div>
                        <h1 class="hero-title">SAURABH SINGH RATHORE</h1>
                        <h2 class="hero-designation">Full-Stack Developer & Computer Science Engineering Student</h2>
                        <p class="hero-desc">
                            "I enjoy building practical web applications, exploring modern technologies and turning ideas into useful digital products."
                        </p>

                        <div class="hero-actions">
                            <a href="#projects" class="btn btn-primary">
                                <span>View My Work</span>
                                <i class="fa-solid fa-arrow-right"></i>
                            </a>
                            <a href="#contact" class="btn btn-outline">
                                <span>Contact Me</span>
                            </a>
                            <a href="mailto:singhsaurabh43431@gmail.com?subject=Resume%20Inquiry%20-%20Saurabh%20Singh" class="btn btn-outline">
                                <i class="fa-solid fa-download"></i>
                                <span>Download CV</span>
                            </a>
                        </div>

                        <!-- Social Icons -->
                        <div class="hero-socials">
                            <a href="https://github.com/Saurabh-Singh33" target="_blank" rel="noopener noreferrer" class="social-icon-link" aria-label="GitHub Profile" title="GitHub">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/saurabh-singh-b1b88a326/" target="_blank" rel="noopener noreferrer" class="social-icon-link" aria-label="LinkedIn Profile" title="LinkedIn">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="https://twitter.com/SaurabhSin8534" target="_blank" rel="noopener noreferrer" class="social-icon-link" aria-label="Twitter Profile" title="Twitter / X">
                                <i class="fa-brands fa-x-twitter"></i>
                            </a>
                        </div>
                    </div>

                    <!-- Right Side: Prominent Clean Portrait -->
                    <div class="hero-image-wrap">
                        <div class="hero-image-card">
                            <img src="Images/HeaderPic.jpg" alt="Saurabh Singh Rathore">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==========================================================================
             ABOUT ME SECTION (MATCHES REFERENCE SCREENSHOTS EXACTLY)
             ========================================================================== -->
        <section id="about" class="section">
            <div class="container">
                <div class="about-grid">
                    <!-- Left: Portrait Photo -->
                    <div class="about-image-card">
                        <img src="Images/SectionImg.png" alt="Saurabh Singh">
                    </div>

                    <!-- Right: Text & Tab Navigation -->
                    <div class="about-content">
                        <h1 class="sub-title">About Me</h1>
                        <p class="about-text">
                            Computer Science Engineering undergraduate with a strong foundation in software development, data structures and algorithms, and problem-solving. Proficient in Java and experienced in full-stack web development, with an interest in building scalable software solutions and exploring emerging AI technologies. Demonstrates initiative through independent project development, competitive programming, and participation in hackathons.
                        </p>

                        <!-- Tab Links (Skills | Experience | Education) -->
                        <div class="tab-titles">
                            <span class="tab-links active-link" onclick="opentab('about-skills', event)">Skills</span>
                            <span class="tab-links" onclick="opentab('about-experience', event)">Experience</span>
                            <span class="tab-links" onclick="opentab('about-education', event)">Education</span>
                        </div>

                        <!-- Tab 1: Skills -->
                        <div class="tab-contents active-tab" id="about-skills">
                            <ul>
                                <li>
                                    <span>Full-Stack Web Development</span><br>
                                    MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js, REST APIs & Responsive UI
                                </li>
                                <li>
                                    <span>AI & Emerging Technologies</span><br>
                                    Retrieval-Augmented Generation (RAG), LangChain, Google Gemini, Qdrant Vector DB, Embeddings
                                </li>
                                <li>
                                    <span>DSA & Problem Solving</span><br>
                                    500+ LeetCode problems solved, 200-day continuous streak (Java & C)
                                </li>
                                <li>
                                    <span>Databases & Developer Tools</span><br>
                                    MongoDB, MySQL, Supabase, Git, GitHub, Postman, Linux
                                </li>
                            </ul>
                        </div>

                        <!-- Tab 2: Experience -->
                        <div class="tab-contents" id="about-experience">
                            <ul>
                                <li>
                                    <span>2024 - Present</span><br>
                                    Full Stack Developer Intern at CodeAlpha (Virtual Internship focused on web & application development)
                                </li>
                                <li>
                                    <span>2026</span><br>
                                    Winner, National-Level Hackathon — Code Carnival 3.0 (Urban Farm Development)
                                </li>
                                <li>
                                    <span>2025</span><br>
                                    Smart India Hackathon (College-level round; team ranked among Top 20 out of 950+ students)
                                </li>
                            </ul>
                        </div>

                        <!-- Tab 3: Education -->
                        <div class="tab-contents" id="about-education">
                            <ul>
                                <li>
                                    <span>2024 - 2028</span><br>
                                    B.Tech in Computer Science Engineering — Marwadi University, Rajkot, India (CGPA: 8.6 / 10, 5th Semester)
                                </li>
                                <li>
                                    <span>Certifications</span><br>
                                    Cisco Networking Academy — Introduction to Networks
                                </li>
                                <li>
                                    <span>Certifications</span><br>
                                    University of Leeds — Python for Data Science
                                </li>
                                <li>
                                    <span>Leadership & Volunteer</span><br>
                                    Volunteered at the Vibrant Gujarat Global Summit, supporting event coordination
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==========================================================================
             TECHNICAL SKILLS SECTION
             ========================================================================== -->
        <section id="technical-skills" class="section">
            <div class="container">
                <div class="section-header">
                    <span class="section-subtitle">CAPABILITIES</span>
                    <h2 class="section-title">MY TECHNICAL SKILLS</h2>
                </div>

                <div class="skills-container">
                    <!-- Category: Programming -->
                    <div class="skills-category">
                        <h3 class="skills-category-title"><i class="fa-solid fa-terminal"></i> Programming</h3>
                        <div class="skills-grid">
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/C.png" alt="C Language"></div>
                                <span class="skill-name">C</span>
                            </div>
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/java.png" alt="Java"></div>
                                <span class="skill-name">Java</span>
                            </div>
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/js.png" alt="JavaScript"></div>
                                <span class="skill-name">JavaScript</span>
                            </div>
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><i class="fa-brands fa-python" style="font-size: 2rem; color: #38bdf8;"></i></div>
                                <span class="skill-name">Python</span>
                            </div>
                        </div>
                    </div>

                    <!-- Category: Frontend -->
                    <div class="skills-category">
                        <h3 class="skills-category-title"><i class="fa-solid fa-desktop"></i> Frontend</h3>
                        <div class="skills-grid">
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/html.png" alt="HTML"></div>
                                <span class="skill-name">HTML</span>
                            </div>
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/css.png" alt="CSS"></div>
                                <span class="skill-name">CSS</span>
                            </div>
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/react.png" alt="React"></div>
                                <span class="skill-name">React</span>
                            </div>
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/nextjs.png" alt="Next.js"></div>
                                <span class="skill-name">Next.js</span>
                            </div>
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/Bootstrap.png" alt="Bootstrap"></div>
                                <span class="skill-name">Bootstrap</span>
                            </div>
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/Tailwind.png" alt="Tailwind CSS"></div>
                                <span class="skill-name">Tailwind CSS</span>
                            </div>
                        </div>
                    </div>

                    <!-- Category: Backend -->
                    <div class="skills-category">
                        <h3 class="skills-category-title"><i class="fa-solid fa-server"></i> Backend</h3>
                        <div class="skills-grid">
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/node.png" alt="Node.js"></div>
                                <span class="skill-name">Node.js</span>
                            </div>
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/Express.png" alt="Express.js"></div>
                                <span class="skill-name">Express.js</span>
                            </div>
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/Springboot.png" alt="Spring Boot"></div>
                                <span class="skill-name">Spring Boot</span>
                            </div>
                        </div>
                    </div>

                    <!-- Category: Database -->
                    <div class="skills-category">
                        <h3 class="skills-category-title"><i class="fa-solid fa-database"></i> Database</h3>
                        <div class="skills-grid">
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/MONGODB.jpg" alt="MongoDB"></div>
                                <span class="skill-name">MongoDB</span>
                            </div>
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/mysql.png" alt="MySQL"></div>
                                <span class="skill-name">MySQL</span>
                            </div>
                        </div>
                    </div>

                    <!-- Category: Tools -->
                    <div class="skills-category">
                        <h3 class="skills-category-title"><i class="fa-solid fa-screwdriver-wrench"></i> Tools</h3>
                        <div class="skills-grid">
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/Git.png" alt="Git"></div>
                                <span class="skill-name">Git</span>
                            </div>
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><i class="fa-brands fa-github" style="font-size: 2rem;"></i></div>
                                <span class="skill-name">GitHub</span>
                            </div>
                            <div class="skill-card">
                                <div class="skill-icon-wrap"><img src="Images/Postman.png" alt="Postman"></div>
                                <span class="skill-name">Postman</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==========================================================================
             PROJECTS SECTION
             ========================================================================== -->
        <section id="projects" class="section">
            <div class="container">
                <div class="section-header">
                    <span class="section-subtitle">PORTFOLIO</span>
                    <h2 class="section-title">MY PROJECTS</h2>
                </div>

                <div class="projects-grid">
                    <!-- Project 1: PaperReader-RAG -->
                    <div class="project-card">
                        <div class="project-preview">
                            <img src="Images/AIImg.jpg" alt="PaperReader-RAG">
                        </div>
                        <div class="project-body">
                            <h3 class="project-title">PaperReader-RAG</h3>
                            <p class="project-desc">
                                Full-stack application that lets users upload PDF documents and ask natural-language questions grounded in document content using Retrieval-Augmented Generation (RAG).
                            </p>
                            <div class="project-tech">
                                <span class="tech-badge">React</span>
                                <span class="tech-badge">Node.js</span>
                                <span class="tech-badge">Express.js</span>
                                <span class="tech-badge">LangChain</span>
                                <span class="tech-badge">Google Gemini</span>
                                <span class="tech-badge">Qdrant</span>
                                <span class="tech-badge">Clerk</span>
                            </div>
                            <div class="project-actions">
                                <a href="https://paper-reader-rag-vgdh.vercel.app/" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-primary">
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i> View Live
                                </a>
                                <a href="https://github.com/Saurabh-Singh33/PaperReader-RAG" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-outline">
                                    <i class="fa-brands fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Project 2: Medicare -->
                    <div class="project-card">
                        <div class="project-preview">
                            <img src="Images/Java-or-Android.webp" alt="Medicare">
                        </div>
                        <div class="project-body">
                            <h3 class="project-title">Medicare</h3>
                            <p class="project-desc">
                                Healthcare platform with role-based access for Admin, Doctor, and User roles. Implemented doctor management, appointment scheduling, user profiles, and PayPal integration.
                            </p>
                            <div class="project-tech">
                                <span class="tech-badge">React</span>
                                <span class="tech-badge">Node.js</span>
                                <span class="tech-badge">Express.js</span>
                                <span class="tech-badge">MongoDB</span>
                                <span class="tech-badge">PayPal</span>
                            </div>
                            <div class="project-actions">
                                <a href="https://mymedicareapp.vercel.app/" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-primary">
                                    <i class="fa-solid fa-arrow-up-right-from-square"></i> View Live
                                </a>
                                <a href="https://github.com/Saurabh-Singh33" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-outline">
                                    <i class="fa-brands fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Project 3: VartaConnect -->
                    <div class="project-card">
                        <div class="project-preview">
                            <img src="Images/Project1Img.jpg" alt="VartaConnect">
                        </div>
                        <div class="project-body">
                            <h3 class="project-title">VartaConnect</h3>
                            <p class="project-desc">
                                Browser-based collaboration platform with WebRTC audio/video communication, real-time chat, meeting rooms, and unique meeting IDs with shareable join links.
                            </p>
                            <div class="project-tech">
                                <span class="tech-badge">React</span>
                                <span class="tech-badge">Node.js</span>
                                <span class="tech-badge">Express.js</span>
                                <span class="tech-badge">WebRTC</span>
                            </div>
                            <div class="project-actions">
                                <a href="https://github.com/Saurabh-Singh33" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-outline">
                                    <i class="fa-brands fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Project 4: Aaroh Voice Assistant -->
                    <div class="project-card">
                        <div class="project-preview">
                            <img src="Images/SectionImg.png" alt="Aaroh Voice Assistant">
                        </div>
                        <div class="project-body">
                            <h3 class="project-title">Aaroh Voice Assistant</h3>
                            <p class="project-desc">
                                Python-based voice assistant that performs desktop operations using voice commands, speech recognition, text-to-speech, and automated system routines.
                            </p>
                            <div class="project-tech">
                                <span class="tech-badge">Python</span>
                                <span class="tech-badge">SpeechRecognition</span>
                                <span class="tech-badge">Pyttsx3</span>
                                <span class="tech-badge">OS Automation</span>
                            </div>
                            <div class="project-actions">
                                <a href="https://github.com/Saurabh-Singh33/Aaroh-voice-assistant" target="_blank" rel="noopener noreferrer" class="project-btn project-btn-outline">
                                    <i class="fa-brands fa-github"></i> GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==========================================================================
             ACHIEVEMENTS SECTION
             ========================================================================== -->
        <section id="achievements" class="section">
            <div class="container">
                <div class="section-header">
                    <span class="section-subtitle">MILESTONES</span>
                    <h2 class="section-title">ACHIEVEMENTS</h2>
                </div>

                <div class="achievements-grid">
                    <!-- Achievement 1: National Hackathon Win -->
                    <div class="achievement-card">
                        <div class="achievement-icon">
                            <i class="fa-solid fa-trophy"></i>
                        </div>
                        <div class="achievement-details">
                            <span class="achievement-badge">COMPETITIVE MILESTONE</span>
                            <h3>Winner, National-Level Hackathon (2026)</h3>
                            <p>
                                Winner in <strong>Code Carnival 3.0</strong> for Urban Farm Development. Engineered end-to-end software architecture for smart urban agriculture.
                            </p>
                        </div>
                    </div>

                    <!-- Achievement 2: LeetCode Streak -->
                    <div class="achievement-card">
                        <div class="achievement-icon">
                            <i class="fa-solid fa-fire"></i>
                        </div>
                        <div class="achievement-details">
                            <span class="achievement-badge">PROBLEM SOLVING</span>
                            <h3>500+ LeetCode Problems Solved</h3>
                            <p>
                                Maintained a <strong>200-day continuous coding streak</strong>, solving data structures and algorithmic problems in Java and C.
                            </p>
                        </div>
                    </div>

                    <!-- Achievement 3: SIH Selection -->
                    <div class="achievement-card">
                        <div class="achievement-icon">
                            <i class="fa-solid fa-award"></i>
                        </div>
                        <div class="achievement-details">
                            <span class="achievement-badge">HACKATHON FINALIST</span>
                            <h3>Smart India Hackathon Finalist</h3>
                            <p>
                                Selected for the college-level round of Smart India Hackathon; team ranked among Top 20 teams out of 950+ participating students.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ==========================================================================
             CONTACT ME SECTION (MATCHES REFERENCE SCREENSHOT 3 EXACTLY)
             ========================================================================== -->
        <section id="contact" class="section">
            <div class="container">
                <div class="contact-row">
                    <!-- Left: Contact Details & Download CV -->
                    <div class="contact-left">
                        <h1 class="sub-title">Contact Me</h1>
                        <p>
                            <i class="fa-solid fa-paper-plane"></i>
                            <a href="mailto:singhsaurabh43431@gmail.com">singhsaurabh43431@gmail.com</a>
                        </p>
                        <p>
                            <i class="fa-solid fa-phone"></i>
                            <a href="tel:+919508461241">+91-9508461241</a>
                        </p>

                        <!-- Social Icons -->
                        <div class="contact-social-icons">
                            <a href="https://github.com/Saurabh-Singh33" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/saurabh-singh-b1b88a326/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="https://twitter.com/SaurabhSin8534" target="_blank" rel="noopener noreferrer" title="Twitter / X">
                                <i class="fa-brands fa-x-twitter"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </div>

                        <!-- Download CV Button -->
                        <a href="mailto:singhsaurabh43431@gmail.com?subject=Resume%20Inquiry%20-%20Saurabh%20Singh" class="btn btn2">
                            <i class="fa-solid fa-download"></i> Download CV
                        </a>
                    </div>

                    <!-- Right: Contact Form -->
                    <div class="contact-right">
                        <form id="contact-form" onsubmit="handleContactSubmit(event)">
                            <input type="text" name="Name" id="sender-name" placeholder="Your Name" required>
                            <input type="email" name="Email" id="sender-email" placeholder="Your Email" required>
                            <textarea name="Message" id="sender-message" rows="6" placeholder="Your Message" required></textarea>
                            <button type="submit" class="btn btn2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- ==========================================================================
         FOOTER
         ========================================================================== -->
    <footer>
        <div class="container">
            <p>&copy; 2026 Saurabh Singh. All rights reserved.</p>
        </div>
    </footer>

    <!-- Scroll to Top Button -->
    <button class="scroll-top" id="scroll-top" aria-label="Scroll back to top">
        <i class="fa-solid fa-arrow-up"></i>
    </button>

    <!-- Toast Notification -->
    <div class="toast" id="toast">
        <i class="fa-solid fa-circle-check"></i>
        <span id="toast-text">Thank you! Your message has been prepared.</span>
    </div>

    <!-- Scripts -->
    <script src="script.js"></script>
</body>

</html>
"""

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html_code)

print('Clean updated index.html written! Length:', len(html_code))
