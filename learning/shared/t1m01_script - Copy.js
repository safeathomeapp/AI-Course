const themeToggle = document.getElementById('themeToggle');
const sectionLinks = document.querySelectorAll('.section-link');
const trackedSections = document.querySelectorAll('[data-track-section]');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');
const endContinueButton = document.getElementById('endContinueButton');
const demoTabs = document.querySelectorAll('.demo-tab');
const demoPanels = document.querySelectorAll('.demo-panel');
const toggleChecklistButton = document.getElementById('toggleChecklist');
const reviewChecklist = document.getElementById('reviewChecklist');
const toggleWorkedExampleButton = document.getElementById('toggleWorkedExample');
const workedExampleDrawer = document.getElementById('workedExampleDrawer');
const termHelps = document.querySelectorAll('.term-help');

const THEME_KEY = 'ai-course-theme';
const MODULE_COMPLETE_KEY = 'foundation-t1m01-complete';
const SECTION_COMPLETE_KEY = 'foundation-t1m01-section-completion';

let activeTooltip = null;
let sectionCompletion = loadSectionCompletion();

function getThemeIcon(theme) {
  if (theme === 'dark') {
    return `
      <span class="ui-icon theme-icon" aria-hidden="true">
        <svg viewBox="0 0 20 20" focusable="false">
          <path d="M10 3.3 11.2 6l2.8.3-2.1 1.9.6 2.8L10 9.6 7.5 11l.6-2.8L6 6.3 8.8 6 10 3.3Zm5.1 9.7.6 1.5 1.5.6-1.5.6-.6 1.5-.6-1.5-1.5-.6 1.5-.6.6-1.5ZM4.3 12.5l.8 2 .8.3-.8.3-.8 2-.8-2-.8-.3.8-.3.8-2Z" fill="currentColor"/>
        </svg>
      </span>
    `;
  }

  return `
    <span class="ui-icon theme-icon" aria-hidden="true">
      <svg viewBox="0 0 20 20" focusable="false">
        <path d="M11.8 2.6a7.2 7.2 0 1 0 5.6 11.8A8 8 0 1 1 11.8 2.6Z" fill="currentColor"/>
      </svg>
    </span>
  `;
}

function closeTermTooltip() {
  if (!activeTooltip) {
    return;
  }

  activeTooltip.remove();
  activeTooltip = null;
}

function showTermTooltip(helpElement) {
  const term = helpElement.closest('.term');

  if (!term) {
    return;
  }

  closeTermTooltip();

  const tooltip = document.createElement('div');
  tooltip.className = 'term-tooltip';
  tooltip.textContent = term.dataset.definition;
  document.body.appendChild(tooltip);

  const helpRect = helpElement.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const top = Math.min(window.innerHeight - tooltipRect.height - 12, helpRect.bottom + 10);
  const left = Math.min(
    window.innerWidth - tooltipRect.width - 12,
    Math.max(12, helpRect.left + (helpRect.width / 2) - (tooltipRect.width / 2))
  );

  tooltip.style.top = `${Math.max(12, top)}px`;
  tooltip.style.left = `${left}px`;
  activeTooltip = tooltip;
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  themeToggle.innerHTML = `${getThemeIcon(theme)}<span class="theme-toggle-text">${theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>`;
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

function loadSectionCompletion() {
  try {
    const saved = localStorage.getItem(SECTION_COMPLETE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

function saveSectionCompletion() {
  localStorage.setItem(SECTION_COMPLETE_KEY, JSON.stringify(sectionCompletion));
}

function isSectionComplete(sectionId) {
  return sectionCompletion[sectionId] === true;
}

function getCompletedCount() {
  return Array.from(trackedSections).filter((section) => isSectionComplete(section.id)).length;
}

function buildSectionFooter(section) {
  const footer = document.createElement('footer');
  footer.className = 'section-footer';
  footer.innerHTML = `
    <span class="section-footer-label">Section actions</span>
    <div class="section-footer-actions">
      <button class="footer-action" type="button" data-footer-action="notes">Save notes</button>
      <button class="complete-toggle" type="button" data-complete-toggle="${section.id}" aria-pressed="false">Mark section complete</button>
      <button class="footer-action" type="button" data-footer-action="help">Help</button>
      <button class="footer-action" type="button" data-footer-action="feedback">Leave feedback</button>
    </div>
  `;

  footer.querySelectorAll('.footer-action').forEach((button) => {
    button.addEventListener('click', () => {
      button.blur();
    });
  });

  const completeToggle = footer.querySelector('[data-complete-toggle]');
  completeToggle.addEventListener('click', () => toggleSectionCompletion(section.id));

  section.appendChild(footer);
}

function initSectionFooters() {
  trackedSections.forEach((section) => {
    buildSectionFooter(section);
  });
}

function syncSectionControls() {
  trackedSections.forEach((section) => {
    const complete = isSectionComplete(section.id);
    const toggle = section.querySelector(`[data-complete-toggle="${section.id}"]`);

    if (toggle) {
      toggle.classList.toggle('is-complete', complete);
      toggle.setAttribute('aria-pressed', String(complete));
      toggle.textContent = complete ? 'Section completed' : 'Mark section complete';
    }
  });

  sectionLinks.forEach((link) => {
    const targetId = link.getAttribute('href')?.replace('#', '');
    const complete = targetId ? isSectionComplete(targetId) : false;
    link.classList.toggle('completed', complete);
  });
}

function updateProgress() {
  const completedCount = getCompletedCount();
  const progress = trackedSections.length > 0
    ? Math.round((completedCount / trackedSections.length) * 100)
    : 0;

  progressFill.style.width = `${progress}%`;
  progressPercent.textContent = `${progress}%`;

  const moduleComplete = completedCount === trackedSections.length && trackedSections.length > 0;
  localStorage.setItem(MODULE_COMPLETE_KEY, String(moduleComplete));

  endContinueButton.classList.toggle('locked', !moduleComplete);
  endContinueButton.classList.toggle('unlocked', moduleComplete);

  if (moduleComplete) {
    endContinueButton.removeAttribute('aria-disabled');
    endContinueButton.textContent = 'Continue to T1M02';
  } else {
    endContinueButton.setAttribute('aria-disabled', 'true');
    endContinueButton.textContent = 'Complete all sections to continue';
  }
}

function toggleSectionCompletion(sectionId) {
  sectionCompletion[sectionId] = !isSectionComplete(sectionId);
  saveSectionCompletion();
  syncSectionControls();
  updateProgress();
}

function updateActiveSection() {
  let currentId = trackedSections[0]?.id || '';
  const checkpoint = window.innerHeight * 0.28;
  const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

  if (nearBottom) {
    currentId = trackedSections[trackedSections.length - 1]?.id || currentId;
  } else {
    trackedSections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= checkpoint) {
        currentId = section.id;
      }
    });
  }

  sectionLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('active', isActive);
  });
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

window.addEventListener('scroll', updateActiveSection, { passive: true });
window.addEventListener('load', () => {
  initTheme();
  initSectionFooters();
  syncSectionControls();
  updateProgress();
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

termHelps.forEach((help) => {
  help.addEventListener('mouseenter', () => showTermTooltip(help));
  help.addEventListener('click', (event) => {
    event.stopPropagation();
    showTermTooltip(help);
  });
  help.addEventListener('focus', () => showTermTooltip(help));
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.term')) {
    closeTermTooltip();
  }
});
