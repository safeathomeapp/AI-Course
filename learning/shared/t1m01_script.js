const sectionLinks = document.querySelectorAll('.section-link');
const sections = document.querySelectorAll('main section[id]');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');
const progressText = document.getElementById('progressText');
const themeToggle = document.getElementById('themeToggle');
const completeButton = document.getElementById('markCompleteButton');
const nextModuleButton = document.getElementById('nextModuleButton');
const moduleStatusPill = document.querySelector('.status-pill.current');
const lockedModuleChips = document.querySelectorAll('.module-chip.locked');
const demoTabs = document.querySelectorAll('.demo-tab');
const demoPanels = document.querySelectorAll('.demo-panel');
const toggleChecklistButton = document.getElementById('toggleChecklist');
const reviewChecklist = document.getElementById('reviewChecklist');
const toggleWorkedExampleButton = document.getElementById('toggleWorkedExample');
const workedExampleDrawer = document.getElementById('workedExampleDrawer');

const THEME_KEY = 'ai-course-theme';
const MODULE_COMPLETE_KEY = 'foundation-t1m01-complete';

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  themeToggle.textContent = theme === 'dark' ? '☀️ Light mode' : '🌙 Dark mode';
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);

  if (saved) {
    setTheme(saved);
    return;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

function updateActiveSection() {
  let currentId = '';

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 180 && rect.bottom >= 180) {
      currentId = section.id;
    }
  });

  sectionLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('active', isActive);
  });

  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? Math.min(100, Math.round((scrollTop / docHeight) * 100)) : 0;

  progressFill.style.width = `${progress}%`;
  progressPercent.textContent = `${progress}%`;
  progressText.textContent = progress < 100
    ? 'Scroll the lesson to update progress.'
    : 'You have reached the end of the module page.';
}

function unlockNextModules() {
  lockedModuleChips.forEach((chip) => {
    chip.disabled = false;
    chip.removeAttribute('aria-disabled');
    chip.classList.remove('locked');
    chip.classList.add('available');
    chip.innerHTML = `
      <span class="module-chip-code">${chip.dataset.module}</span>
      <span class="module-chip-title">${chip.querySelector('.module-chip-title')?.textContent || 'Next module'}</span>
      <span class="module-chip-state">Available after completion</span>
    `;
  });

  nextModuleButton.classList.remove('locked');
  nextModuleButton.classList.add('unlocked');
  nextModuleButton.removeAttribute('aria-disabled');
  nextModuleButton.textContent = 'Continue to T1M02';
  nextModuleButton.setAttribute('href', '#');

  moduleStatusPill.textContent = 'Completed';
  moduleStatusPill.classList.add('completed');
  completeButton.textContent = 'Module completed';
  completeButton.disabled = true;
}

function initCompletionState() {
  const isComplete = localStorage.getItem(MODULE_COMPLETE_KEY) === 'true';

  if (isComplete) {
    unlockNextModules();
  }
}

function markModuleComplete() {
  localStorage.setItem(MODULE_COMPLETE_KEY, 'true');
  unlockNextModules();
}

function activateDemoTab(targetDemo) {
  demoTabs.forEach((tab) => {
    const isActive = tab.dataset.demo === targetDemo;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-selected', String(isActive));
  });

  demoPanels.forEach((panel) => {
    const shouldShow = panel.dataset.demoPanel === targetDemo;
    panel.hidden = !shouldShow;
    panel.classList.toggle('active', shouldShow);
  });
}

function toggleDrawer(button, drawer, showLabel, hideLabel) {
  const isHidden = drawer.classList.toggle('hidden');
  button.textContent = isHidden ? showLabel : hideLabel;
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  setTheme(current === 'dark' ? 'light' : 'dark');
});

completeButton.addEventListener('click', markModuleComplete);
window.addEventListener('scroll', updateActiveSection);
window.addEventListener('load', () => {
  initTheme();
  initCompletionState();
  updateActiveSection();
});

demoTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    activateDemoTab(tab.dataset.demo);
  });
});

if (toggleChecklistButton && reviewChecklist) {
  toggleChecklistButton.addEventListener('click', () => {
    toggleDrawer(toggleChecklistButton, reviewChecklist, 'Reveal evaluation checklist', 'Hide evaluation checklist');
  });
}

if (toggleWorkedExampleButton && workedExampleDrawer) {
  toggleWorkedExampleButton.addEventListener('click', () => {
    toggleDrawer(toggleWorkedExampleButton, workedExampleDrawer, 'Show worked example', 'Hide worked example');
  });
}
