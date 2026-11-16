/**
 * app.js — Resume website
 * Renders embedded resume data, theme system, and UI animations.
 * Works from file:// (no server or fetch needed).
 */
(function () {
    'use strict';

    const DATA = {
  "personalInfo": {
    "name": "Christopher Lee Cajes",
    "title": "Senior Software Developer",
    "headline": [
      "C# ASP.NET (Web & API)",
      "WinForms",
      "SQL Server"
    ],
    "email": "clcajes@gmail.com",
    "phone": "+63 968 581 6796",
    "location": "Philippines",
    "linkedin": "https://www.linkedin.com/in/christopher-lee-cajes-b063962b6/"
  },
  "summary": "Senior Software Developer with 9+ years of professional experience specializing in C#, ASP.NET Core (Web & API), PHP Laravel, React JS, Android (Android Studio using Java and Kotlin and Flutter using Dart), Flutter using Dart for desktop apps, and SQL Server and MySQL systems. Strong background in building enterprise and financial applications, developing secure REST APIs, and supporting business-critical systems. Proven ability to work effectively in structured teams and remote environments, with a focus on code quality and system stability.",
  "skills": [
    {
      "group": "Primary Stack",
      "icon": "fa-layer-group",
      "items": [
        "C#",
        "ASP.NET Core (Web Applications & Web APIs)",
        "ASP.NET MVC / .NET Framework",
        "WinForms (Desktop Applications)",
        "Flutter (Dart, any platform)",
        "PHP Laravel (Web & API)",
        "Java Spring Boot (Web & API)",
        "Python",
        "Ruby on Rails",
        "Java",
        "C++",
        "Golang",
        "Node.js",
        "AngularJS",
        "Vue.js",
        "TypeScript",
        "Next.js",
        "React JS"
      ]
    },
    {
      "group": "Databases",
      "icon": "fa-database",
      "items": [
        "SQL Server",
        "MySQL",
        "PostgreSQL",
        "Oracle DB"
      ]
    },
    {
      "group": "Backend & Architecture",
      "icon": "fa-server",
      "items": [
        "RESTful API Design",
        "Entity Framework",
        "Class Library Development",
        "Console Applications",
        "GUI and Spring Boot Development (Java)",
        "Gin (Golang)"
      ]
    },
    {
      "group": "Frontend & Design",
      "icon": "fa-palette",
      "items": [
        "HTML",
        "CSS",
        "Bootstrap",
        "Tailwind",
        "JavaScript",
        "jQuery",
        "React JS (working knowledge)",
        "Django (Python)",
        "Adobe Photoshop"
      ]
    },
    {
      "group": "Mobile Application Development",
      "icon": "fa-mobile-screen",
      "items": [
        "Android Studio",
        "Xcode",
        "React Native",
        "REST API Integration",
        "SQLite",
        "Mobile UI/UX Implementation"
      ]
    },
    {
      "group": "Tools & Environment",
      "icon": "fa-screwdriver-wrench",
      "items": [
        "Visual Studio",
        "Visual Studio Code",
        "Xcode (Swift)",
        "Git",
        "Source Control",
        "Postman",
        "Unity 3D",
        "Unreal Engine",
        "Autodesk Maya",
        "Blender",
        "Microsoft Office Applications"
      ]
    }
  ],
  "experience": [
    {
      "role": "Application Developer",
      "company": "SLI Consulting, Inc.",
      "duration": "2026",
      "location": "Mandaluyong City",
      "duties": [
        "Developed and maintained ASP.NET Core Web applications supporting internal banking and insurance systems.",
        "Collaborated with analysts and developers to ensure system reliability and compliance."
      ]
    },
    {
      "role": "Systems Analyst II",
      "company": "Rizal Commercial Banking Corporation (RCBC)",
      "duration": "Nov 2025 – Feb 2026",
      "location": "Taguig City",
      "duties": [
        "Developed and maintained ASP.NET Core Web applications supporting internal banking systems.",
        "Built and enhanced C# console applications for internal automation and system support.",
        "Collaborated with analysts and developers to ensure system reliability and compliance."
      ]
    },
    {
      "role": "Programmer / Analyst",
      "company": "Vertere Global Solutions Inc.",
      "duration": "Apr 2025 – Oct 2025",
      "location": "Taguig City",
      "duties": [
        "Developed ASP.NET Core Web applications and APIs for business clients.",
        "Participated in system analysis, implementation, and support of production applications.",
        "Ensured clean code practices and proper data handling using SQL Server."
      ]
    },
    {
      "role": "Full Stack Web Developer",
      "company": "Quantrics Enterprises Inc.",
      "duration": "Nov 2023 – Feb 2025",
      "location": "Taytay, Rizal",
      "duties": [
        "Developed web applications using ASP.NET Core API and React JS.",
        "Implemented REST APIs consumed by frontend applications."
      ]
    },
    {
      "role": "Web Developer",
      "company": "Quantrics Enterprises Inc.",
      "duration": "Dec 2021 – Oct 2023",
      "location": "Taytay, Rizal",
      "duties": [
        "Designed and developed responsive websites using HTML, CSS, Bootstrap, JavaScript, and jQuery.",
        "Maintained and enhanced existing systems based on business requirements."
      ]
    },
    {
      "role": "Application Developer",
      "company": "Quantrics Enterprises Inc.",
      "duration": "Nov 2018 – Nov 2021",
      "location": "Taytay, Rizal",
      "duties": [
        "Developed ASP.NET Core APIs to support automation and internal tools.",
        "Implemented Robotic Process Automation (RPA) solutions using Blue Prism.",
        "Integrated APIs with business processes to improve operational efficiency."
      ]
    },
    {
      "role": "Software Developer",
      "company": "Capital Power Global, Ltd.",
      "duration": "May 2017 – Aug 2018",
      "location": "Makati City",
      "duties": [
        "Developed ASP.NET (Framework & Core) Web Applications and Web APIs.",
        "Created C# Class Libraries to support modular and reusable codebases.",
        "Designed and managed databases using SQL Server."
      ]
    }
  ],
  "freelance": [
    {
      "role": "Mobile App Developer (Android)",
      "company": "SariKart",
      "note": "Confidential start-up business",
      "duration": "May 2020 – Jun 2025",
      "duties": [
        "Built the ASP.NET Core API server used by the Android app, supporting product shipping for sari-sari stores.",
        "Implemented the Android app in Android Studio using Java."
      ]
    },
    {
      "role": "Mobile App Developer (Android)",
      "company": "Sustainable Urban and Community Development Partnership Inc.",
      "note": "Start-up business",
      "duration": "Apr 2026 – Present",
      "duties": [
        "Built the ASP.NET Core API server used by the Android app, supporting incident management for indigenous peoples and other families.",
        "Implemented the mobile app with Android Studio (Kotlin) and Flutter (Dart)."
      ]
    }
  ],
  "education": [
    {
      "degree": "Master of Information Technology (Systems Development)",
      "school": "Ateneo de Naga University",
      "place": "Naga City",
      "date": "March 2017"
    },
    {
      "degree": "Bachelor of Science in Information Technology",
      "school": "Ateneo de Naga University",
      "place": "Naga City",
      "date": "March 2015"
    }
  ],
  "projects": [
    {
      "title": "Online Recruitment System",
      "icon": "fa-user-tie",
      "tech": "PHP Laravel",
      "description": "Web application for applicant records management and hiring workflows."
    },
    {
      "title": "Student Enrollment System",
      "subtitle": "Minds That Matter Learning Center",
      "icon": "fa-graduation-cap",
      "tech": "VB.NET / WinForms",
      "description": "Desktop application for student records management and enrollment workflows."
    },
    {
      "title": "Other Android Applications",
      "icon": "fa-mobile-screen-button",
      "tech": "Android Studio",
      "description": "Several more Android applications have been developed."
    }
  ],
  "strengths": [
    "Fast learner",
    "Highly adaptable",
    "Creative problem-solver",
    "Self-motivated",
    "Wellness-conscious",
    "Open to feedback"
  ],
  "preferences": "Willing to work in any setup.",
  "coverLetter": {
    "date": "November 1, 2026",
    "company": "Company Name",
    "salutation": "Dear Hiring Manager,",
    "paragraphs": [
      "I am writing to express my interest in the Senior Software Developer position at your company. With more than 8 years of experience in software development, including full-stack development, I am confident in my ability to contribute effectively to your team and deliver high-quality software solutions.",
      "Throughout my career, I have worked on developing applications and software solutions across different technologies and platforms. I am passionate about software development and continuously strive to build practical, reliable, and user-focused applications.",
      "I would welcome the opportunity to discuss how my experience, technical skills, and passion for software development can contribute to your team. Thank you for your time and consideration. I look forward to hearing from you."
    ],
    "closing": "Sincerely,"
  }
};

    const KEYS = { MODE: 'themeMode_v3', ACCENT: 'themeAccent_v3', RGB: 'themeRGB_v3' };
    const $ = (id) => document.getElementById(id);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m]));
    }
    function hexToRgb(hex) {
        return [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16)).join(',');
    }
    const Store = {
        get(k) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : null; } catch (e) { return null; } },
        set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } },
        remove(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } }
    };
    function setText(id, t) { const el = $(id); if (el) el.textContent = t; }

    /* ---------- Rendering ---------- */
    function chips(items, offset) {
        return items.map((s, i) => `<span class="chip" style="--c:${(offset || 0) + i}">${esc(s)}</span>`).join('');
    }

    function renderProfile() {
        const p = DATA.personalInfo;
        const initials = p.name.split(' ').filter(Boolean).map(w => w[0]).slice(0, 1).concat(p.name.split(' ').slice(-1)[0][0]).join('');
        setText('avatar-initials', initials);
        setText('sidebar-name', p.name);
        setText('sidebar-title', p.title);
        setText('hero-name', p.name);
        setText('hero-role', p.title);
        setText('summary-content', DATA.summary);
        setText('contact-email-text', p.email);
        setText('contact-phone-text', p.phone);
        setText('contact-location-text', p.location);
        $('contact-email').href = 'mailto:' + p.email;
        $('hero-email').href = 'mailto:' + p.email;
        $('contact-phone').href = 'tel:' + p.phone.replace(/\s/g, '');
        $('contact-linkedin').href = p.linkedin || '#';
        $('hero-tags').innerHTML = (p.headline || []).map(t => `<span class="tag">${esc(t)}</span>`).join('');
        setText('year', new Date().getFullYear());

        const companies = new Set(DATA.experience.map(e => e.company)).size;
        const stats = [
            { n: 9, suffix: '+', label: 'Years in software development' },
            { n: companies, suffix: '', label: 'Companies worked with' },
            { n: DATA.freelance.length, suffix: '', label: 'Freelance mobile projects' }
        ];
        $('stats').innerHTML = stats.map(s =>
            `<div class="stat"><b class="num" data-count="${s.n}" data-suffix="${s.suffix}">0${s.suffix}</b><span>${esc(s.label)}</span></div>`).join('');
    }

    function renderSkills() {
        $('skills-list').innerHTML = DATA.skills.map((g, i) => `
            <div class="card reveal" style="--i:${i % 3}">
                <h3><i class="fas ${esc(g.icon)}"></i>${esc(g.group)}</h3>
                <div class="chips">${chips(g.items)}</div>
            </div>`).join('');
    }

    function timeline(list) {
        return list.map((e, i) => `
            <article class="card t-item reveal" style="--i:${i % 3}">
                <div class="t-top">
                    <div>
                        <h3>${esc(e.role)}</h3>
                        <div class="company">${esc(e.company)}</div>
                    </div>
                    <span class="pill">${esc(e.duration)}</span>
                </div>
                <p class="meta">${esc(e.location || e.note || '')}</p>
                <ul>${(e.duties || []).map(d => `<li>${esc(d)}</li>`).join('')}</ul>
            </article>`).join('');
    }

    function renderExperience() {
        $('experience-list').innerHTML = timeline(DATA.experience);
        $('freelance-list').innerHTML = timeline(DATA.freelance);
    }

    function renderProjects() {
        $('projects-list').innerHTML = DATA.projects.map((p, i) => `
            <div class="card project reveal" style="--i:${i}">
                <h3><i class="fas ${esc(p.icon)}"></i>${esc(p.title)}</h3>
                ${p.subtitle ? `<div class="sub">${esc(p.subtitle)}</div>` : ''}
                <p>${esc(p.description)}</p>
                <span class="tech">${esc(p.tech)}</span>
            </div>`).join('');
    }

    function renderEducation() {
        $('education-list').innerHTML = DATA.education.map(e => `
            <div class="edu">
                <span class="ico"><i class="fas fa-user-graduate"></i></span>
                <div><h3>${esc(e.degree)}</h3><p>${esc(e.school)} &ndash; ${esc(e.place)} | ${esc(e.date)}</p></div>
            </div>`).join('');
        $('strengths-list').innerHTML = chips(DATA.strengths);
        $('preferences').innerHTML = '<b>Work preferences:</b> ' + esc(DATA.preferences);
    }

    /* ---------- Theme ---------- */
    function applyAccent(hex, rgb) {
        const root = document.documentElement.style;
        root.setProperty('--accent', hex);
        root.setProperty('--accent-rgb', rgb);
        const [r, g, b] = rgb.split(',').map(Number);
        const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        root.setProperty('--on-accent', lum > 0.6 ? '#0b1220' : '#ffffff');
    }
    function setActiveDot(dot) {
        document.querySelectorAll('.theme-dot').forEach(d => d.classList.remove('active'));
        if (dot) dot.classList.add('active');
    }
    function initTheme() {
        const mode = Store.get(KEYS.MODE) || 'dark';
        const accent = Store.get(KEYS.ACCENT) || '#38bdf8';
        const rgb = Store.get(KEYS.RGB) || '56,189,248';
        document.body.setAttribute('data-theme', mode);
        applyAccent(accent, rgb);
        const picker = $('customColorPicker');
        picker.value = accent;
        setActiveDot(document.querySelector(`.theme-dot[data-accent="${accent}"]`));

        $('themeGrid').addEventListener('click', function (e) {
            const dot = e.target.closest('.theme-dot');
            if (!dot) return;
            if (dot.dataset.mode) {
                document.body.setAttribute('data-theme', dot.dataset.mode);
                Store.set(KEYS.MODE, dot.dataset.mode);
                return;
            }
            applyAccent(dot.dataset.accent, dot.dataset.rgb);
            Store.set(KEYS.ACCENT, dot.dataset.accent);
            Store.set(KEYS.RGB, dot.dataset.rgb);
            picker.value = dot.dataset.accent;
            setActiveDot(dot);
        });
        picker.addEventListener('input', function () {
            const rgbVal = hexToRgb(picker.value);
            applyAccent(picker.value, rgbVal);
            Store.set(KEYS.ACCENT, picker.value);
            Store.set(KEYS.RGB, rgbVal);
            setActiveDot(document.querySelector(`.theme-dot[data-accent="${picker.value}"]`));
        });
    }

    /* ---------- Motion ---------- */
    function countUp(el) {
        const target = Number(el.dataset.count), suffix = el.dataset.suffix || '';
        if (reduceMotion) { el.textContent = target + suffix; return; }
        const dur = 1400, t0 = performance.now();
        (function tick(now) {
            const p = Math.min((now - t0) / dur, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
            if (p < 1) requestAnimationFrame(tick);
        })(t0);
    }

    function initMotion() {
        if (!('IntersectionObserver' in window)) {
            document.querySelectorAll('.reveal,[data-observe]').forEach(el => el.classList.add('in'));
            document.querySelectorAll('.num').forEach(countUp);
            return;
        }
        const io = new IntersectionObserver((entries) => {
            entries.forEach(en => {
                if (!en.isIntersecting) return;
                en.target.classList.add('in');
                io.unobserve(en.target);
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        document.querySelectorAll('.reveal,[data-observe]').forEach(el => io.observe(el));

        // Count-up once the intro has finished
        const statsEl = $('stats');
        const sio = new IntersectionObserver((entries) => {
            if (entries.some(e => e.isIntersecting)) {
                sio.disconnect();
                setTimeout(() => statsEl.querySelectorAll('.num').forEach(countUp), reduceMotion ? 0 : 1900);
            }
        }, { threshold: 0.3 });
        sio.observe(statsEl);

        // Scroll-spy for the sidebar navigation
        const links = Array.from(document.querySelectorAll('#nav a'));
        const spy = new IntersectionObserver((entries) => {
            entries.forEach(en => {
                if (!en.isIntersecting) return;
                links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
            });
        }, { rootMargin: '-35% 0px -55% 0px' });
        links.forEach(a => { const s = document.querySelector(a.getAttribute('href')); if (s) spy.observe(s); });
    }


    /* ---------- Cover letter modal ---------- */
    function coverLetterText() {
        const p = DATA.personalInfo, c = DATA.coverLetter;
        return [
            p.name + '\n' + p.location + '\n' + p.email + ' | ' + p.phone,
            c.date,
            c.company,
            c.salutation,
            ...c.paragraphs,
            c.closing + '\n\n' + p.name
        ].join('\n\n');
    }

    function renderCoverLetter() {
        const p = DATA.personalInfo, c = DATA.coverLetter;
        $('letter-sheet').innerHTML = `
            <header class="l-head">
                <h3>${esc(p.name)}</h3>
                <p>${esc(p.location)}</p>
                <p>${esc(p.email)} &nbsp;|&nbsp; ${esc(p.phone)}</p>
            </header>
            <p class="l-date">${esc(c.date)}</p>
            <p class="l-company">${esc(c.company)}</p>
            <p class="l-salute">${esc(c.salutation)}</p>
            ${c.paragraphs.map(t => `<p class="l-body">${esc(t)}</p>`).join('')}
            <p class="l-close">${esc(c.closing)}</p>
            <p class="l-sign">${esc(p.name)}</p>`;
    }

    function copyText(text) {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        }
        return new Promise((resolve, reject) => {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.setAttribute('readonly', '');
            ta.style.cssText = 'position:fixed;top:-1000px;opacity:0';
            document.body.appendChild(ta);
            ta.select();
            let ok = false;
            try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
            document.body.removeChild(ta);
            ok ? resolve() : reject(new Error('copy failed'));
        });
    }

    function initCoverLetterModal() {
        renderCoverLetter();
        const modal = $('letter-modal'), openBtn = $('open-letter'),
              copyBtn = $('copy-letter'), closeBtn = $('close-letter'), status = $('copy-status');
        let lastFocus = null, copyTimer = null;

        function open() {
            lastFocus = document.activeElement;
            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
            document.documentElement.classList.add('modal-open');
            setTimeout(() => closeBtn.focus(), 60);
        }
        function close() {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
            document.documentElement.classList.remove('modal-open');
            if (lastFocus && lastFocus.focus) lastFocus.focus();
        }
        function flash(label, ok) {
            const span = copyBtn.querySelector('span'), icon = copyBtn.querySelector('i');
            span.textContent = label;
            icon.className = 'fas ' + (ok ? 'fa-check' : 'fa-triangle-exclamation');
            copyBtn.classList.toggle('done', ok);
            status.textContent = ok ? 'Cover letter copied to clipboard.' : 'Copy failed. Select the text and copy it manually.';
            clearTimeout(copyTimer);
            copyTimer = setTimeout(() => {
                span.textContent = 'Copy letter';
                icon.className = 'fas fa-copy';
                copyBtn.classList.remove('done');
            }, 2200);
        }

        openBtn.addEventListener('click', open);
        closeBtn.addEventListener('click', close);
        modal.addEventListener('mousedown', (e) => { if (e.target === modal) close(); });
        copyBtn.addEventListener('click', () => {
            copyText(coverLetterText()).then(() => flash('Copied!', true)).catch(() => flash('Copy failed', false));
        });
        document.addEventListener('keydown', (e) => {
            if (!modal.classList.contains('open')) return;
            if (e.key === 'Escape') { e.preventDefault(); close(); return; }
            if (e.key === 'Tab') {
                const f = modal.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
                if (!f.length) return;
                const first = f[0], last = f[f.length - 1];
                if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        });
    }

    /* ---------- Boot ---------- */
    document.addEventListener('DOMContentLoaded', function () {
        // Edit mode was removed: clear any leftover saved edits and cover-letter drafts.
        ['resumeData_v3', 'coverLetterContent_v3'].forEach(Store.remove);
        initTheme();
        renderProfile();
        renderSkills();
        renderExperience();
        renderProjects();
        renderEducation();
        initMotion();
        initCoverLetterModal();
    });
})();
