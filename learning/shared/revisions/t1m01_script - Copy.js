const themeToggle = document.getElementById('themeToggle');
const sectionLinks = document.querySelectorAll('.section-link');
const trackedSections = document.querySelectorAll('[data-track-section]');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');
const progressText = document.getElementById('progressText');
const completeButton = document.getElementById('markCompleteButton');
const nextModuleButton = document.getElementById('nextModuleButton');
const moduleStatusPill = document.getElementById('moduleStatusPill');
const pathChipT1M02 = document.getElementById('pathChipT1M02');
const demoTabs = document.querySelectorAll('.demo-tab');
const demoPanels = document.querySelectorAll('.demo-panel');
const toggleChecklistButton = document.getElementById('toggleChecklist');
const reviewChecklist = document.getElementById('reviewChecklist');
const toggleWorkedExampleButton = document.getElementById('toggleWorkedExample');
const workedExampleDrawer = document.getElementById('workedExampleDrawer');

const THEME_KEY = 'ai-course-theme';
const MODULE_COMPLETE_KEY = 'foundation-t1m01-complete';

let furthestSectionIndex = 0;

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  themeToggle.textContent = theme === 'dark' ? '☀️ Light mode' : '🌙 Dark mode';
}

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);

  if (savedTheme) {
    setTheme(savedTheme);
    return;
  }

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

function updateActiveSection() {
  let currentId = trackedSections[0]?.id || '';
  const checkpoint = window.innerHeight * 0.28;

  trackedSections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= checkpoint) {
      currentId = section.id;
      furthestSectionIndex = Math.max(furthestSectionIndex, index);
    }
  });

  sectionLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('active', isActive);
  });

  const viewedCount = Math.min(trackedSections.length, furthestSectionIndex + 1);
  const progress = trackedSections.length > 0
    ? Math.round((viewedCount / trackedSections.length) * 100)
    : 0;

  progressFill.style.width = `${progress}%`;
  progressPercent.textContent = `${progress}%`;

  if (localStorage.getItem(MODULE_COMPLETE_KEY) === 'true') {
    progressText.textContent = 'Module marked complete. T1M02 is available.';
    return;
  }

  progressText.textContent = `Viewed ${viewedCount} of ${trackedSections.length} lesson sections.`;
}

function setCompletedState() {
  moduleStatusPill.textContent = 'Completed';
  moduleStatusPill.classList.remove('current');
  moduleStatusPill.classList.add('completed');

  completeButton.textContent = 'Module completed';
  completeButton.disabled = true;

  nextModuleButton.classList.remove('locked');
  nextModuleButton.classList.add('unlocked');
  nextModuleButton.removeAttribute('aria-disabled');
  nextModuleButton.textContent = 'Continue to T1M02';

  pathChipT1M02.removeAttribute('aria-disabled');
  pathChipT1M02.setAttribute('href', '#');
  pathChipT1M02.querySelector('.path-chip-state').textContent = 'Available';

  progressFill.style.width = '100%';
  progressPercent.textContent = '100%';
  progressText.textContent = 'Module marked complete. T1M02 is available.';
}

function initCompletionState() {
  if (localStorage.getItem(MODULE_COMPLETE_KEY) === 'true') {
    setCompletedState();
  }
}

function markModuleComplete() {
  localStorage.setItem(MODULE_COMPLETE_KEY, 'true');
  setCompletedState();
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
  });
}

function toggleDrawer(button, drawer, showLabel, hideLabel) {
  const isHidden = drawer.classList.toggle('hidden');
  button.textContent = isHidden ? showLabel : hideLabel;
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

completeButton.addEventListener('click', markModuleComplete);
window.addEventListener('scroll', updateActiveSection, { passive: true });
window.addEventListener('load', () => {
  initTheme();
  initCompletionState();
  updateActiveSection();
});

demoTabs.forEach((tab) => {
  tab.addEventListener('click', () => activateDemoTab(tab.dataset.demo));
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
