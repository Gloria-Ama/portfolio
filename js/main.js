// Menu mobile
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

// Apparition au défilement
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in-view"));
}

// Surbrillance du lien de nav actif selon la section visible
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
if (sections.length && navAnchors.length && "IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navAnchors.forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );
  sections.forEach((s) => navObserver.observe(s));
}

// Modale CV
function openCV() {
  const modal = document.getElementById("cvModal");
  const frame = document.getElementById("cvFrame");
  const lang = localStorage.getItem("portfolioLang") || "fr";
  const file =
    lang === "en" ? "assets/CV_English_GloriaDrafor.pdf" : "assets/CV_Francais_GloriaDrafor.pdf";
  frame.src = file;
  document.getElementById("cvOpenNewTab").href = file;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCV() {
  const modal = document.getElementById("cvModal");
  modal.classList.remove("open");
  document.getElementById("cvFrame").src = "";
  document.body.style.overflow = "";
}

document.getElementById("cvModal").addEventListener("click", (e) => {
  if (e.target.id === "cvModal") closeCV();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCV();
});