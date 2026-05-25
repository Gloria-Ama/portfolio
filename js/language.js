const translations = {
  fr: {
    navHome: "Accueil",
    navAbout: "À propos",
    navSkills: "Compétences",
    navProjects: "Projets",
    navContact: "Contact",

    hello: "Bonjour, je suis",
    role: "Étudiante en génie logiciel & développeuse web",
    intro: "Je crée des applications web modernes, simples et utiles.",
    downloadCV: "Télécharger mon CV",

    aboutTitle: "À propos de moi",
    aboutText:
      "Je suis étudiante en génie logiciel à l’Université d’Ottawa, passionnée par le développement web, l’UI/UX et la création de solutions numériques.",

    skillsTitle: "Compétences",

    projectsTitle: "Projets",
    projectOne:
      "Application de gestion de budget permettant de suivre les revenus, les dépenses et les statistiques financières.",
    projectTwo:
      "Application pour aider les étudiants à organiser leurs cours, devoirs, examens et temps d’étude.",

    contactTitle: "Contact"
  },

  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",

    hello: "Hello, I am",
    role: "Software Engineering Student & Web Developer",
    intro: "I create modern, simple, and useful web applications.",
    downloadCV: "Download my resume",

    aboutTitle: "About Me",
    aboutText:
      "I am a Software Engineering student at the University of Ottawa, passionate about web development, UI/UX, and building digital solutions.",

    skillsTitle: "Skills",

    projectsTitle: "Projects",
    projectOne:
      "A budget management application that helps users track income, expenses, and financial statistics.",
    projectTwo:
      "An application that helps students organize their courses, assignments, exams, and study time.",

    contactTitle: "Contact"
  }
};

function changeLanguage(language) {
  const elements = document.querySelectorAll("[data-key]");

  elements.forEach((element) => {
    const key = element.getAttribute("data-key");
    element.textContent = translations[language][key];
  });

  document.documentElement.lang = language;
}