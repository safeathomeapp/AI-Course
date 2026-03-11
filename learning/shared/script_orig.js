const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");
const toggleChecklistButton = document.getElementById("toggleChecklist");
const reviewChecklist = document.getElementById("reviewChecklist");

function updateActiveSection() {
  let currentId = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 160 && rect.bottom >= 160) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${currentId}`;
    link.classList.toggle("active", isActive);
  });

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;

  progressFill.style.width = `${progress}%`;
  progressText.textContent = `${progress}% complete`;
}

window.addEventListener("scroll", updateActiveSection);
window.addEventListener("load", updateActiveSection);

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab;

    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((panel) => panel.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(`tab-${target}`).classList.add("active");
  });
});

if (toggleChecklistButton && reviewChecklist) {
  toggleChecklistButton.addEventListener("click", () => {
    reviewChecklist.classList.toggle("hidden");
    toggleChecklistButton.textContent = reviewChecklist.classList.contains("hidden")
      ? "Reveal evaluation checklist"
      : "Hide evaluation checklist";
  });
}
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  themeToggle.textContent = theme === "dark"
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
}

function initTheme() {

  const saved = localStorage.getItem("theme");

  if (saved) {
    setTheme(saved);
    return;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  setTheme(prefersDark ? "dark" : "light");
}

themeToggle.addEventListener("click", () => {

  const current = document.documentElement.getAttribute("data-theme");

  setTheme(current === "dark" ? "light" : "dark");

});

initTheme();