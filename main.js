/* =============================================
   GERARD CUBAKA PORTFOLIO — Main JavaScript
   Bilingual FR/EN | Chatbot v2 | Form | Animations
   ============================================= */

// ===========================
// 1. TRANSLATIONS (FR / EN)
// ===========================
const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.expertise": "Expertise",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "hero.badge": "GeoAI • Remote Sensing • Exploration",
        "hero.greeting": "Hi, I'm",
        "hero.description": "Transforming raw geological data into AI-powered insights. Building the future of geospatial intelligence from Goma, DRC.",
        "hero.hire": "Hire Me",
        "hero.projects": "View Projects",
        "hero.cv": "Download CV",
        "stats.years": "Years Experience",
        "stats.projects": "Projects Completed",
        "stats.companies": "Companies Founded",
        "stats.degree": "Geology Degree",
        "about.tag": "About Me",
        "about.title": "Who is Gérard?",
        "about.tab1": "Profile",
        "about.tab2": "Geology",
        "about.tab3": "GeoAI",
        "about.card1.title": "Remote Sensing",
        "about.card1.sub": "Specialist",
        "about.profile.text": "I'm Gérard Cubaka Bisimwa, an Exploration Geologist and GeoAI Developer from Goma, North Kivu, DRC. I hold a Bac+5 in Exploration and Mining Geology from the Official University of Bukavu (UOB). Passionate about the intersection of earth sciences and artificial intelligence, I build tools that make geospatial intelligence accessible and actionable.",
        "about.geo.text": "With expertise in RC and Diamond Drilling processes, I specialize in geological data acquisition, 3D deposit modeling with Surpac, and geostatistical resource evaluation. My geological foundation drives my ability to extract meaningful insights from complex spatial datasets.",
        "about.geo.l1": "RC & Diamond Drilling Process",
        "about.geo.l2": "3D Geological Block Modeling (Surpac)",
        "about.geo.l3": "Mineral Deposit Evaluation",
        "about.geo.l4": "Geostatistical Analysis",
        "about.geoai.text": "I build AI-powered geospatial solutions using satellite imagery, deep learning, and cloud platforms. Founder of GeoCongo AI — a platform deploying foundation models (Prithvi, SAM2) for mineral exploration, target generation, and regolith mapping in Central Africa.",
        "about.geoai.l1": "Foundation Models (Prithvi, SAM2)",
        "about.geoai.l2": "Satellite Image Analysis (SAR/Multispectral)",
        "about.geoai.l3": "Google Cloud / Vertex AI Deployment",
        "about.geoai.l4": "Mineral Prospecting & Target Generation",
        "expertise.tag": "What I Do",
        "expertise.title": "My Expertise",
        "exp.geo.title": "Exploration Geology",
        "exp.geo.desc": "Mineral deposit assessment, RC/DD drilling, core description, 3D geological modeling and resource evaluation using industry-standard tools.",
        "exp.rs.title": "Remote Sensing & GeoAI",
        "exp.rs.desc": "Processing SAR and multispectral satellite imagery to detect alteration zones, map regolith, and generate high-potential targets for mineral exploration in Central Africa.",
        "exp.dev.title": "Software Development",
        "exp.dev.desc": "Building full-stack web applications, REST APIs, and cloud-deployed AI services with modern frameworks and best practices.",
        "exp.featured": "Featured",
        "skills.tag": "My Arsenal",
        "skills.title": "Skills & Tools",
        "skills.geo": "Geosciences & Remote Sensing",
        "skills.dev": "AI & Development",
        "projects.tag": "My Work",
        "projects.title": "Featured Projects",
        "proj.visit": "Visit Site",
        "proj.geocongo.desc": "AI-powered mineral intelligence platform for Central Africa. Deploys foundation models (Prithvi, SAM2) for automated target generation and mineral prospecting using satellite imagery on Google Cloud Vertex AI.",
        "proj.regolith.title": "Regolith & Alteration Mapping",
        "proj.regolith.desc": "Satellite-based spatial analysis for detecting hydrothermal alteration zones and mapping regolith structure in the South Kivu mining districts.",
        "proj.yetubook.desc": "Social network integrating Earth Observation for disaster prevention, climate awareness, and sustainable development through agriculture, mining, and land management.",
        "proj.kazihub.desc": "Co-founded KaziHub, a digital agency building web and mobile solutions for businesses across Central Africa.",
        "contact.tag": "Get In Touch",
        "contact.title": "Let's Collaborate",
        "contact.intro": "Whether you need geospatial analysis, GeoAI development, or want to collaborate on a research project — I'm open to opportunities worldwide.",
        "contact.email": "Email",
        "contact.location": "Location",
        "form.name": "Full Name",
        "form.email": "Email Address",
        "form.subject": "Subject",
        "form.message": "Message",
        "form.send": "Send Message",
        "form.success": "✅ Message sent! I'll get back to you soon.",
        "form.error": "❌ Something went wrong. Please try again.",
        "footer.tagline": "Exploration Geologist · Remote Sensing & GeoAI Developer",
        "footer.rights": "All rights reserved.",
        "chat.notif": "👋 Hey! Want to know more about me?",
        "chat.online": "Online",
    },
    fr: {
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.expertise": "Expertise",
        "nav.skills": "Compétences",
        "nav.projects": "Projets",
        "nav.contact": "Contact",
        "hero.badge": "GeoAI • Télédétection • Exploration",
        "hero.greeting": "Bonjour, je suis",
        "hero.description": "Je transforme des données géologiques brutes en insights propulsés par l'IA. Je construis l'avenir de l'intelligence géospatiale depuis Goma, RDC.",
        "hero.hire": "Engagez-moi",
        "hero.projects": "Voir les projets",
        "hero.cv": "Télécharger CV",
        "stats.years": "Ans d'expérience",
        "stats.projects": "Projets réalisés",
        "stats.companies": "Entreprises fondées",
        "stats.degree": "Diplôme Géologie",
        "about.tag": "À propos de moi",
        "about.title": "Qui est Gérard ?",
        "about.tab1": "Profil",
        "about.tab2": "Géologie",
        "about.tab3": "GeoAI",
        "about.card1.title": "Télédétection",
        "about.card1.sub": "Spécialiste",
        "about.profile.text": "Je suis Gérard Cubaka Bisimwa, Géologue d'exploration et développeur GeoAI originaire de Goma, Nord-Kivu, RDC. Titulaire d'un Bac+5 en Géologie d'Exploration et Minière de l'Université Officielle de Bukavu (UOB). Passionné par l'intersection des sciences de la Terre et de l'intelligence artificielle, je construis des outils qui rendent l'intelligence géospatiale accessible.",
        "about.geo.text": "Expert en processus de forage RC et carottes (DD), je me spécialise dans l'acquisition de données géologiques, la modélisation 3D de gisements avec Surpac, et l'évaluation géostatistique des ressources minérales.",
        "about.geo.l1": "Forage RC & Carottes (DD)",
        "about.geo.l2": "Modélisation géologique 3D (Surpac)",
        "about.geo.l3": "Évaluation de gisements minéraux",
        "about.geo.l4": "Analyse géostatistique",
        "about.geoai.text": "Je construis des solutions géospatiales propulsées par l'IA en utilisant l'imagerie satellitaire, le deep learning et des plateformes cloud. Fondateur de GeoCongo AI — une plateforme déployant des modèles fondationnels (Prithvi, SAM2) pour l'exploration minière, la génération de cibles et la cartographie du régolithe en Afrique centrale.",
        "about.geoai.l1": "Modèles fondationnels (Prithvi, SAM2)",
        "about.geoai.l2": "Analyse d'images satellites (SAR/Multispectral)",
        "about.geoai.l3": "Déploiement Google Cloud / Vertex AI",
        "about.geoai.l4": "Prospection minérale & Génération de cibles",
        "expertise.tag": "Ce que je fais",
        "expertise.title": "Mon Expertise",
        "exp.geo.title": "Géologie d'Exploration",
        "exp.geo.desc": "Évaluation de gisements minéraux, forage RC/DD, description de carottes, modélisation géologique 3D et évaluation des ressources avec des outils professionnels.",
        "exp.rs.title": "Télédétection & GeoAI",
        "exp.rs.desc": "Traitement d'images satellites SAR et multispectrales pour détecter les zones d'altération, cartographier le régolithe et générer des cibles à haut potentiel pour l'exploration minière en Afrique centrale.",
        "exp.dev.title": "Développement Logiciel",
        "exp.dev.desc": "Construction d'applications web full-stack, d'APIs REST et de services IA déployés en cloud avec des frameworks modernes et les meilleures pratiques.",
        "exp.featured": "À la une",
        "skills.tag": "Mon Arsenal",
        "skills.title": "Compétences & Outils",
        "skills.geo": "Géosciences & Télédétection",
        "skills.dev": "IA & Développement",
        "projects.tag": "Mon Travail",
        "projects.title": "Projets Phares",
        "proj.visit": "Voir le site",
        "proj.geocongo.desc": "Plateforme d'intelligence minérale propulsée par l'IA pour l'Afrique centrale. Déploie des modèles fondationnels (Prithvi, SAM2) pour la génération automatisée de cibles et la prospection minière via Google Cloud Vertex AI.",
        "proj.regolith.title": "Cartographie du Régolithe",
        "proj.regolith.desc": "Analyse spatiale par satellite pour la détection des zones d'altération hydrothermale et la cartographie du régolithe dans les districts miniers du Sud-Kivu.",
        "proj.yetubook.desc": "Réseau social intégrant l'Observation de la Terre pour la prévention des catastrophes, l'info climat et le développement durable via l'agriculture, les mines et la gestion du territoire.",
        "proj.kazihub.desc": "Co-fondateur de KaziHub, une agence digitale construisant des solutions web et mobile pour les entreprises d'Afrique centrale.",
        "contact.tag": "Me contacter",
        "contact.title": "Collaborons",
        "contact.intro": "Que vous ayez besoin d'une analyse géospatiale, d'un développement GeoAI, ou que vous souhaitiez collaborer sur un projet de recherche — je suis ouvert aux opportunités dans le monde entier.",
        "contact.email": "Email",
        "contact.location": "Localisation",
        "form.name": "Nom complet",
        "form.email": "Adresse email",
        "form.subject": "Sujet",
        "form.message": "Message",
        "form.send": "Envoyer le message",
        "form.success": "✅ Message envoyé ! Je vous répondrai bientôt.",
        "form.error": "❌ Une erreur s'est produite. Veuillez réessayer.",
        "footer.tagline": "Géologue d'Exploration · Télédétection & Développeur GeoAI",
        "footer.rights": "Tous droits réservés.",
        "chat.notif": "👋 Bonjour ! Voulez-vous en savoir plus sur moi ?",
        "chat.online": "En ligne",
    }
};

// Typed text strings per language
const typedStrings = {
    en: [
        "Exploration Geologist",
        "Remote Sensing Specialist",
        "GeoAI Developer",
        "GeoCongo AI Founder",
        "Satellite Image Analyst",
    ],
    fr: [
        "Géologue d'Exploration",
        "Spécialiste en Télédétection",
        "Développeur GeoAI",
        "Fondateur de GeoCongo AI",
        "Analyste d'Images Satellites",
    ]
};

// ===========================
// 2. LANGUAGE MANAGEMENT
// ===========================
let currentLang = 'en';

function applyTranslations(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('data-lang', lang);

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update bot language tag
    const botTag = document.getElementById('bot-lang-tag');
    if (botTag) botTag.textContent = lang.toUpperCase();

    // Restart typed text
    if (typedInstance) {
        clearTyped();
        startTyped();
    }

    // Update chatbot language
    botLang = lang;
}

// Language switcher init
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        applyTranslations(lang);
    });
});

// ===========================
// 3. TYPED TEXT EFFECT
// ===========================
let typedInstance = null;
let charTimer = null;
let strIndex = 0;
let charIndex = 0;
let isDeleting = false;

function startTyped() {
    const el = document.getElementById('typed-text');
    if (!el) return;

    function type() {
        const strings = typedStrings[currentLang];
        const currentStr = strings[strIndex];

        if (isDeleting) {
            el.textContent = currentStr.substring(0, charIndex - 1);
            charIndex--;
        } else {
            el.textContent = currentStr.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 50 : 80;

        if (!isDeleting && charIndex === currentStr.length) {
            speed = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            strIndex = (strIndex + 1) % strings.length;
            speed = 400;
        }

        charTimer = setTimeout(type, speed);
    }

    type();
}

function clearTyped() {
    if (charTimer) clearTimeout(charTimer);
    charIndex = 0;
    isDeleting = false;
    strIndex = 0;
    const el = document.getElementById('typed-text');
    if (el) el.textContent = '';
}

startTyped();

// ===========================
// 4. HEADER SCROLL
// ===========================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===========================
// 5. NAVIGATION
// ===========================
// Mobile toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');

navToggle?.addEventListener('click', () => navMenu.classList.add('show'));
navClose?.addEventListener('click', () => navMenu.classList.remove('show'));

// Nav links – close on click + active
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Scroll spy
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const link = document.querySelector(`.nav__link[href="#${sectionId}"]`);
        if (link) {
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});

// ===========================
// 6. SCROLL TO TOP
// ===========================
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    scrollTopBtn?.classList.toggle('visible', window.scrollY > 500);
});
scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===========================
// 7. ABOUT TABS
// ===========================
const tabBtns = document.querySelectorAll('.tab__btn');
const tabContents = document.querySelectorAll('.tab__content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`tab-${tabId}`)?.classList.add('active');
    });
});

// ===========================
// 8. SKILLS ANIMATION
// ===========================
const skillFills = document.querySelectorAll('.skill__fill');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const fill = entry.target;
            const width = fill.getAttribute('data-width');
            fill.style.width = width + '%';
            skillsObserver.unobserve(fill);
        }
    });
}, { threshold: 0.3 });

skillFills.forEach(fill => skillsObserver.observe(fill));

// ===========================
// 9. SCROLL REVEAL
// ===========================
const sr = ScrollReveal({
    distance: '40px',
    duration: 800,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    reset: false
});

sr.reveal('.hero__data', { origin: 'left', delay: 100 });
sr.reveal('.hero__image', { origin: 'right', delay: 200 });
sr.reveal('.hero__stats', { origin: 'bottom', delay: 300 });

sr.reveal('.about__image', { origin: 'left', delay: 100 });
sr.reveal('.about__content', { origin: 'right', delay: 200 });

sr.reveal('.expertise__card', { origin: 'bottom', delay: 100, interval: 150 });

sr.reveal('.skills__group', { origin: 'bottom', delay: 100, interval: 200 });

sr.reveal('.project__card--featured', { origin: 'bottom', delay: 100 });
sr.reveal('.project__card--small', { origin: 'bottom', delay: 100, interval: 100 });

sr.reveal('.contact__info', { origin: 'left', delay: 100 });
sr.reveal('.contact__form-wrapper', { origin: 'right', delay: 200 });

// ===========================
// 10. CHATBOT v2
// ===========================
let botLang = 'en';

// Tree conversationnel bilingue
const botData = {
    en: {
        init: {
            messages: [
                "👋 Hey! I'm Gérard's virtual assistant.",
                "Before we dive in, what's your name? 🙏"
            ],
            waitForName: true
        },
        menu: {
            title: "So, {name}, what would you like to know? 😊",
            options: [
                { label: "👤 Who is Gérard?", key: "who" },
                { label: "🛰️ GeoCongo AI Project", key: "geocongo" },
                { label: "💻 Skills & Expertise", key: "skills" },
                { label: "🎓 Education", key: "education" },
                { label: "🤝 Collaborate?", key: "collaborate" },
                { label: "📬 Contact directly", key: "contact" },
            ]
        },
        who: {
            messages: [
                "Gérard Cubaka Bisimwa is an **Exploration Geologist** and **GeoAI Developer** from Goma, North Kivu, DRC. 🌍",
                "He holds a Bac+5 in Exploration & Mining Geology from the University of Bukavu (UOB).",
                "He's the founder of **GeoCongo AI** — building AI-powered geospatial tools for Central Africa. 🛰️"
            ],
            options: [
                { label: "🛰️ Tell me about GeoAI", key: "geocongo" },
                { label: "🔙 Main menu", key: "__menu__" }
            ]
        },
        geocongo: {
            messages: [
                "🌍 **GeoCongo AI** is an AI-powered mineral intelligence platform for Central Africa.",
                "It deploys foundation models like **Prithvi** and **SAM2** on Google Cloud Vertex AI for:",
                "• 💎 Mineral prospecting\n• 🗺️ Regolith & Alteration mapping\n• ⛰️ Target generation",
                "Visit: <a href='https://www.geocongoai.com' target='_blank' style='color:var(--primary)'>geocongoai.com</a> 🔗"
            ],
            options: [
                { label: "💻 What tech does he use?", key: "skills" },
                { label: "🔙 Main menu", key: "__menu__" }
            ]
        },
        skills: {
            messages: [
                "Here are Gérard's main technical skills:",
                "🌍 **Geosciences:** QGIS (95%), Surpac (90%), Google Earth Engine (80%), ArcGIS (70%)",
                "🤖 **GeoAI & Dev:** Python (80%), TensorFlow/PyTorch (70%), FastAPI (75%), GCP/Vertex AI (70%)",
                "💻 **Web:** HTML/CSS/JS (95%), React, PostgreSQL, Supabase"
            ],
            options: [
                { label: "🛰️ GeoCongo AI project", key: "geocongo" },
                { label: "🔙 Main menu", key: "__menu__" }
            ]
        },
        education: {
            messages: [
                "🎓 Gérard holds a **Bac+5 (Master equivalent)** in Exploration & Mining Geology from the **Official University of Bukavu (UOB)**, DRC.",
                "He is largely self-taught in software development and GeoAI, having built his tech skills through real-world projects and continuous learning. 📚"
            ],
            options: [
                { label: "👤 More about him", key: "who" },
                { label: "🔙 Main menu", key: "__menu__" }
            ]
        },
        collaborate: {
            messages: [
                "🤝 Gérard is open to collaboration worldwide — research, GeoAI projects, remote sensing studies, or software development.",
                "He has worked with teams across DRC, East Africa, and international research groups. 🌐"
            ],
            options: [
                { label: "📬 Contact him now", key: "contact" },
                { label: "🔙 Main menu", key: "__menu__" }
            ]
        },
        contact: {
            messages: [
                "📬 Here's how to reach Gérard:",
                "✉️ Email: <a href='mailto:gerardcubakabisimwa@gmail.com' style='color:var(--primary)'>gerardcubakabisimwa@gmail.com</a>",
                "📱 WhatsApp: <a href='https://wa.me/243991102448' target='_blank' style='color:var(--primary)'>+243 991 102 448</a>",
                "🔗 LinkedIn: <a href='https://www.linkedin.com/in/g%C3%A9rard-cubaka-38a27619b/' target='_blank' style='color:var(--primary)'>Gérard Cubaka Bisimwa</a>"
            ],
            options: [
                { label: "🔙 Main menu", key: "__menu__" }
            ]
        }
    },
    fr: {
        init: {
            messages: [
                "👋 Bonjour ! Je suis l'assistant virtuel de Gérard.",
                "Avant de commencer, quel est votre prénom ? 🙏"
            ],
            waitForName: true
        },
        menu: {
            title: "Alors, {name}, qu'aimeriez-vous savoir ? 😊",
            options: [
                { label: "👤 Qui est Gérard ?", key: "who" },
                { label: "🛰️ Projet GeoCongo AI", key: "geocongo" },
                { label: "💻 Compétences & Expertise", key: "skills" },
                { label: "🎓 Formation", key: "education" },
                { label: "🤝 Collaborer ?", key: "collaborate" },
                { label: "📬 Contacter directement", key: "contact" },
            ]
        },
        who: {
            messages: [
                "Gérard Cubaka Bisimwa est un **Géologue d'Exploration** et **Développeur GeoAI** originaire de Goma, Nord-Kivu, RDC. 🌍",
                "Il est titulaire d'un Bac+5 en Géologie d'Exploration et Minière de l'Université Officielle de Bukavu (UOB).",
                "Il est le fondateur de **GeoCongo AI** — construisant des outils géospatiaux propulsés par l'IA pour l'Afrique centrale. 🛰️"
            ],
            options: [
                { label: "🛰️ En savoir plus sur GeoAI", key: "geocongo" },
                { label: "🔙 Menu principal", key: "__menu__" }
            ]
        },
        geocongo: {
            messages: [
                "🌍 **GeoCongo AI** est une plateforme d'intelligence minérale pour l'Afrique centrale.",
                "Elle déploie des modèles fondationnels comme **Prithvi** et **SAM2** sur Google Cloud Vertex AI pour :",
                "• 💎 Prospection minérale\n• 🗺️ Cartographie du régolithe\n• ⛰️ Génération de cibles",
                "Visitez : <a href='https://www.geocongoai.com' target='_blank' style='color:var(--primary)'>geocongoai.com</a> 🔗"
            ],
            options: [
                { label: "💻 Quelles technologies utilise-t-il ?", key: "skills" },
                { label: "🔙 Menu principal", key: "__menu__" }
            ]
        },
        skills: {
            messages: [
                "Voici les principales compétences techniques de Gérard :",
                "🌍 **Géosciences :** QGIS (95%), Surpac (90%), Google Earth Engine (80%), ArcGIS (70%)",
                "🤖 **GeoAI & Dev :** Python (80%), TensorFlow/PyTorch (70%), FastAPI (75%), GCP/Vertex AI (70%)",
                "💻 **Web :** HTML/CSS/JS (95%), React, PostgreSQL, Supabase"
            ],
            options: [
                { label: "🛰️ Projet GeoCongo AI", key: "geocongo" },
                { label: "🔙 Menu principal", key: "__menu__" }
            ]
        },
        education: {
            messages: [
                "🎓 Gérard est titulaire d'un **Bac+5 (équivalent Master)** en Géologie d'Exploration et Minière de l'**Université Officielle de Bukavu (UOB)**, RDC.",
                "Il est en grande partie autodidacte en développement logiciel et GeoAI, ayant construit ses compétences tech à travers des projets réels et un apprentissage continu. 📚"
            ],
            options: [
                { label: "👤 En savoir plus sur lui", key: "who" },
                { label: "🔙 Menu principal", key: "__menu__" }
            ]
        },
        collaborate: {
            messages: [
                "🤝 Gérard est ouvert à la collaboration dans le monde entier — recherche, projets GeoAI, études de télédétection ou développement logiciel.",
                "Il a travaillé avec des équipes en RDC, en Afrique de l'Est et dans des groupes de recherche internationaux. 🌐"
            ],
            options: [
                { label: "📬 Le contacter maintenant", key: "contact" },
                { label: "🔙 Menu principal", key: "__menu__" }
            ]
        },
        contact: {
            messages: [
                "📬 Voici comment joindre Gérard :",
                "✉️ Email : <a href='mailto:gerardcubakabisimwa@gmail.com' style='color:var(--primary)'>gerardcubakabisimwa@gmail.com</a>",
                "📱 WhatsApp : <a href='https://wa.me/243991102448' target='_blank' style='color:var(--primary)'>+243 991 102 448</a>",
                "🔗 LinkedIn : <a href='https://www.linkedin.com/in/g%C3%A9rard-cubaka-38a27619b/' target='_blank' style='color:var(--primary)'>Gérard Cubaka Bisimwa</a>"
            ],
            options: [
                { label: "🔙 Menu principal", key: "__menu__" }
            ]
        }
    }
};

// Chatbot state
let chatOpen = false;
let chatUserName = '';
let chatWaitingForName = true;
let chatInitDone = false;

const chatToggleBtn = document.getElementById('chat-toggle');
const chatbotEl = document.getElementById('chatbot');
const chatMessages = document.getElementById('chat-messages');
const chatTypingEl = document.getElementById('chat-typing');
const chatInputField = document.getElementById('chat-input-field');
const chatSendBtn = document.getElementById('chat-send');
const chatResetBtn = document.getElementById('chatbot-reset');
const chatCloseBtn = document.getElementById('chatbot-close');
const chatNotif = document.getElementById('chat-notif');
const chatNotifBadge = document.getElementById('chat-notif-badge');

function toggleChat() {
    chatOpen = !chatOpen;
    chatbotEl.classList.toggle('open', chatOpen);
    chatNotif?.classList.add('hidden');
    chatNotifBadge?.classList.add('hidden');
    if (chatOpen && !chatInitDone) {
        chatInitDone = true;
        startChatInit();
    }
}

function startChatInit() {
    chatMessages.innerHTML = '';
    chatWaitingForName = true;
    const data = botData[botLang].init;
    showBotMessages(data.messages, () => {
        chatInputField.placeholder = botLang === 'fr' ? 'Votre prénom...' : 'Your name...';
    });
}

function resetChat() {
    chatMessages.innerHTML = '';
    chatUserName = '';
    chatWaitingForName = true;
    chatInitDone = false;
    const optionsEl = document.querySelector('.chat__options');
    optionsEl?.remove();
    startChatInit();
}

chatToggleBtn?.addEventListener('click', toggleChat);
chatCloseBtn?.addEventListener('click', () => {
    chatOpen = false;
    chatbotEl.classList.remove('open');
});
chatResetBtn?.addEventListener('click', resetChat);

// Show notification after 3s
setTimeout(() => {
    chatNotif?.classList.remove('hidden');
}, 3000);

// Message helpers
function addBotMessage(html) {
    const msg = document.createElement('p');
    msg.className = 'chat__msg chat__msg--bot';
    msg.innerHTML = html;
    chatMessages.appendChild(msg);
    scrollChatBottom();
}

function addUserMessage(text) {
    const msg = document.createElement('p');
    msg.className = 'chat__msg chat__msg--user';
    msg.textContent = text;
    chatMessages.appendChild(msg);
    scrollChatBottom();
}

function scrollChatBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
    chatTypingEl.classList.add('visible');
    scrollChatBottom();
}

function hideTyping() {
    chatTypingEl.classList.remove('visible');
}

function showBotMessages(messages, callback, delay = 600) {
    let i = 0;
    function next() {
        if (i < messages.length) {
            showTyping();
            setTimeout(() => {
                hideTyping();
                addBotMessage(messages[i]);
                i++;
                setTimeout(next, delay);
            }, delay + 200);
        } else {
            callback && callback();
        }
    }
    next();
}

function showOptions(options) {
    // Remove previous options
    document.querySelectorAll('.chat__options').forEach(el => el.remove());

    const container = document.createElement('div');
    container.className = 'chat__options';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'chat__option';
        btn.textContent = opt.label;
        btn.addEventListener('click', () => handleOptionClick(opt));
        container.appendChild(btn);
    });
    chatMessages.after(container);
    chatMessages.appendChild(container);
    scrollChatBottom();
}

function showMenu(name) {
    const menu = botData[botLang].menu;
    const title = menu.title.replace('{name}', name);
    showBotMessages([title], () => {
        showOptions(menu.options);
    });
}

function handleOptionClick(opt) {
    // Remove options
    document.querySelectorAll('.chat__options').forEach(el => el.remove());
    addUserMessage(opt.label);

    if (opt.key === '__menu__') {
        showMenu(chatUserName || 'friend');
        return;
    }

    const section = botData[botLang][opt.key];
    if (!section) return;

    showBotMessages(section.messages, () => {
        if (section.options) showOptions(section.options);
    });
}

// Handle user text input
function handleUserInput() {
    const val = chatInputField.value.trim();
    if (!val) return;
    chatInputField.value = '';

    addUserMessage(val);

    if (chatWaitingForName) {
        chatWaitingForName = false;
        chatUserName = val;
        const greetings = {
            en: [`Nice to meet you, **${val}**! 🤗 I hope you're having a great day!`],
            fr: [`Ravi de vous rencontrer, **${val}** ! 🤗 J'espère que vous passez une excellente journée !`]
        };
        chatInputField.placeholder = botLang === 'fr' ? 'Tapez ici...' : 'Type here...';
        showBotMessages(greetings[botLang], () => {
            showMenu(val);
        });
        return;
    }

    // Generic response
    const unknowns = {
        en: ["I'm not sure about that. But feel free to pick a topic below! 😊"],
        fr: ["Je ne suis pas sûr de cela. N'hésitez pas à choisir un sujet ci-dessous ! 😊"]
    };
    showBotMessages(unknowns[botLang], () => {
        showMenu(chatUserName || 'friend');
    });
}

chatSendBtn?.addEventListener('click', handleUserInput);
chatInputField?.addEventListener('keydown', e => {
    if (e.key === 'Enter') handleUserInput();
});

// Emoji btn sends a wave
document.getElementById('chat-emoji')?.addEventListener('click', () => {
    const emojis = { en: "👋 Hi there!", fr: "👋 Bonjour !" };
    addUserMessage(emojis[botLang]);
    const responses = {
        en: ["Hello! 😄 Ready to learn more about Gérard?"],
        fr: ["Bonjour ! 😄 Prêt à en savoir plus sur Gérard ?"]
    };
    showBotMessages(responses[botLang], () => {
        if (chatUserName) showMenu(chatUserName);
    });
});

// ===========================
// 11. CONTACT FORM (Formspree)
// ===========================
const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');
const formSubmit = document.getElementById('form-submit');

contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('[name="name"]').value.trim();
    const email = contactForm.querySelector('[name="email"]').value.trim();
    const subject = contactForm.querySelector('[name="subject"]').value.trim();
    const message = contactForm.querySelector('[name="message"]').value.trim();

    if (!name || !email || !subject || !message) return;

    // Loading state
    formSubmit.innerHTML = '<span>Sending...</span> <i class="bx bx-loader-alt bx-spin"></i>';
    formSubmit.disabled = true;
    formFeedback.className = 'form__feedback';
    formFeedback.style.display = 'none';

    try {
        // Formspree endpoint — replace with your form ID
        const FORMSPREE_ID = 'xjgjlwyk';
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, subject, message })
        });

        if (response.ok) {
            const successMsg = translations[currentLang]['form.success'] || '✅ Message sent!';
            formFeedback.textContent = successMsg;
            formFeedback.className = 'form__feedback success';
            contactForm.reset();
        } else {
            throw new Error('Network response was not ok');
        }
    } catch (err) {
        const errorMsg = translations[currentLang]['form.error'] || '❌ Error. Please try again.';
        formFeedback.textContent = errorMsg;
        formFeedback.className = 'form__feedback error';
    }

    // Reset button
    formSubmit.innerHTML = `<span data-i18n="form.send">${translations[currentLang]['form.send'] || 'Send Message'}</span> <i class='bx bxs-send'></i>`;
    formSubmit.disabled = false;
});
