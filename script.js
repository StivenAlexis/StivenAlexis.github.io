const LANG_STORAGE_KEY = "portfolioLang";

const translations = {
  en: {
    pageTitle: "Stiven M. — Portfolio",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",
    "hero.greeting": "Hey there,",
    "hero.name": "I am Stiven Monsalvo",
    "hero.tagline": "a systems analyst and software developer.",
    "hero.connect": "Let's connect!",
    "hero.cv": "Download CV",
    "about.highlight": "ABOUT",
    "about.heading": "> About",
    "about.p1":
      "Systems Analyst and future Systems Engineer focused on software analysis, project management, and process improvement.",
    "about.p2":
      "I am interested in transforming business needs into clear technological solutions through requirements analysis, documentation, and teamwork.",
    "about.p3":
      "I am currently seeking to join a team where I can contribute value while continuing to grow professionally.",
    "about.videoButton": "Presentation video",
    "about.videoTitle": "Presentation video",
    "modal.close": "Close",
    "portfolio.highlight": "Portfolio",
    "portfolio.heading": "> Portfolio",
    "portfolio.skillsHeading": "> Skills",
    "portfolio.projectsHeading": "> Projects",
    "skills.cat.programming": "Programming & Development",
    "skills.cat.databases": "Databases",
    "skills.cat.testing": "Testing",
    "skills.cat.pm": "Project Management & Methodologies",
    "skills.cat.tools": "Tools",
    "skills.cat.soft": "Soft Skills",
    "skills.testAutomation": "Test Automation",
    "skills.unitTesting": "Unit Testing",
    "skills.testCases": "Test Cases",
    "skills.acceptanceCriteria": "Acceptance Criteria",
    "skills.soft.analytical": "Analytical Thinking",
    "skills.soft.problemSolving": "Problem Solving",
    "skills.soft.teamwork": "Teamwork",
    "skills.soft.adaptability": "Adaptability",
    "skills.soft.communication": "Communication",
    "project.tetris.title": "Tetris Game",
    "project.backend.title": "Backend Testing Project",
    "project.subtitle": "Project description",
    "project.tetris.body":
      "Development of a system that simulates the core logic of the Tetris game using an Object-Oriented Programming (OOP) approach. Each component of the game was modeled as an independent entity, implementing movement rules, rotation mechanics, and collision detection. The project focused on clean code organization, modular design, and reusability. This project allowed the practical application of fundamental OOP principles such as encapsulation, abstraction, and object interaction.",
    "project.backend.body":
      "This repository is part of a larger project aimed at developing a Progressive Web Application (PWA) for managing and visualizing information related to sculptors, sculptures, and cultural events. The system enables administrators to manage detailed records of events, sculptors, and artworks through create, update, delete, and search functionalities. On the public side, users can interact with the platform by participating in a sculpture voting system, supported by social media authentication.",
    "project.repo": "Repository",
    "contact.highlight": "Contacts",
    "contact.heading": "> Contacts",
    "contact.intro":
      "You can contact directly me through these following links",
    "footer.credit": "Template made with 💞 by",
  },
  es: {
    pageTitle: "Stiven M. — Portafolio",
    "nav.about": "Acerca de",
    "nav.portfolio": "Portafolio",
    "nav.contact": "Contacto",
    "hero.greeting": "¡Hola!",
    "hero.name": "Soy Stiven Monsalvo",
    "hero.tagline": "analista de sistemas y desarrollador de software.",
    "hero.connect": "¡Conectemos!",
    "hero.cv": "Descargar CV",
    "about.highlight": "ACERCA DE",
    "about.heading": "> Acerca de",
    "about.p1":
      "Analista de Sistemas y futuro Ingeniero en Sistemas enfocado en análisis de software, gestión de proyectos y mejora de procesos.",
    "about.p2":
      "Me interesa transformar las necesidades del negocio en soluciones tecnológicas claras mediante análisis de requisitos, documentación y trabajo en equipo.",
    "about.p3":
      "Busco incorporarme a un equipo donde pueda aportar valor y seguir creciendo profesionalmente.",
    "about.videoButton": "Video de presentación",
    "about.videoTitle": "Video de presentación",
    "modal.close": "Cerrar",
    "portfolio.highlight": "Portafolio",
    "portfolio.heading": "> Portafolio",
    "portfolio.skillsHeading": "> Habilidades",
    "portfolio.projectsHeading": "> Proyectos",
    "skills.cat.programming": "Programación y desarrollo",
    "skills.cat.databases": "Bases de datos",
    "skills.cat.testing": "Pruebas",
    "skills.cat.pm": "Gestión de proyectos y metodologías",
    "skills.cat.tools": "Herramientas",
    "skills.cat.soft": "Habilidades blandas",
    "skills.testAutomation": "Automatización de pruebas",
    "skills.unitTesting": "Pruebas unitarias",
    "skills.testCases": "Casos de prueba",
    "skills.acceptanceCriteria": "Criterios de aceptación",
    "skills.soft.analytical": "Pensamiento analítico",
    "skills.soft.problemSolving": "Resolución de problemas",
    "skills.soft.teamwork": "Trabajo en equipo",
    "skills.soft.adaptability": "Adaptabilidad",
    "skills.soft.communication": "Comunicación",
    "project.tetris.title": "Juego Tetris",
    "project.backend.title": "Proyecto de pruebas backend",
    "project.subtitle": "Descripción del proyecto",
    "project.tetris.body":
      "Desarrollo de un sistema que simula la lógica central del juego Tetris mediante un enfoque de Programación Orientada a Objetos (POO). Cada componente del juego se modeló como una entidad independiente, implementando reglas de movimiento, mecánicas de rotación y detección de colisiones. El proyecto se centró en una organización limpia del código, diseño modular y reutilización. Este proyecto permitió aplicar de forma práctica principios fundamentales de POO como encapsulación, abstracción e interacción entre objetos.",
    "project.backend.body":
      "Este repositorio forma parte de un proyecto mayor orientado a desarrollar una Aplicación Web Progresiva (PWA) para gestionar y visualizar información relacionada con escultores, esculturas y eventos culturales. El sistema permite a los administradores gestionar registros detallados de eventos, escultores y obras mediante funcionalidades de crear, actualizar, eliminar y buscar. En el lado público, los usuarios pueden interactuar con la plataforma participando en un sistema de votación de esculturas, con autenticación mediante redes sociales.",
    "project.repo": "Repositorio",
    "contact.highlight": "Contacto",
    "contact.heading": "> Contacto",
    "contact.intro":
      "Puedes contactarme directamente a través de estos enlaces.",
    "footer.credit": "Plantilla hecha con 💞 por",
  },
};

function getStoredLang() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved === "en" || saved === "es") return saved;
  if (navigator.language && navigator.language.toLowerCase().startsWith("es"))
    return "es";
  return "en";
}

function applyLanguage(lang) {
  const pack = translations[lang];
  if (!pack) return;

  document.documentElement.lang = lang;
  document.title = pack.pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && pack[key] !== undefined) el.textContent = pack[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (key && pack[key] !== undefined) el.setAttribute("aria-label", pack[key]);
  });

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.textContent = lang === "en" ? "ES" : "EN";
    langBtn.setAttribute(
      "aria-label",
      lang === "en" ? "Cambiar a español" : "Switch to English"
    );
  }

  localStorage.setItem(LANG_STORAGE_KEY, lang);
}

applyLanguage(getStoredLang());

document.getElementById("lang-toggle")?.addEventListener("click", () => {
  const next = document.documentElement.lang === "es" ? "en" : "es";
  applyLanguage(next);
});

const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navLink = document.querySelectorAll(".nav-link");

if (navToggle && primaryNav) {
  navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
      primaryNav.setAttribute("data-visible", "true");
      navToggle.setAttribute("aria-expanded", "true");
    }

    if (visibility === "true") {
      primaryNav.setAttribute("data-visible", "false");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

[...navLink].forEach((nav) => {
  nav.addEventListener("click", () => {
    if (primaryNav && primaryNav.getAttribute("data-visible") === "true") {
      primaryNav.setAttribute("data-visible", "false");
      navToggle?.setAttribute("aria-expanded", "false");
    }
  });
});

const videoModal = document.getElementById("video-modal");
const presentationVideo = document.getElementById("presentation-video");
const openVideoModalBtn = document.getElementById("open-video-modal");
let videoModalPreviousFocus = null;

function openVideoModal() {
  if (!videoModal) return;
  videoModalPreviousFocus = document.activeElement;
  videoModal.hidden = false;
  document.body.classList.add("video-modal-open");
  videoModal.querySelector(".video-modal__close")?.focus();
}

function closeVideoModal() {
  if (!videoModal) return;
  presentationVideo?.pause();
  videoModal.hidden = true;
  document.body.classList.remove("video-modal-open");
  if (videoModalPreviousFocus && typeof videoModalPreviousFocus.focus === "function") {
    videoModalPreviousFocus.focus();
  }
}

openVideoModalBtn?.addEventListener("click", openVideoModal);

videoModal?.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target === el) closeVideoModal();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && videoModal && !videoModal.hidden) {
    closeVideoModal();
  }
});
