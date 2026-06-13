const body = document.body;
const menuToggle = document.querySelector('.menu-toggle');
const year = document.querySelector('#year');
const links = document.querySelectorAll('.main-nav a, .btn-dark, .btn-ghost, .btn-outline-pill');
const cookieBanner = document.querySelector('#cookie-banner');
const cookieSettings = document.querySelector('#cookie-settings');
const cookieOpenSettings = document.querySelector('#cookie-open-settings');
const cookieAcceptAll = document.querySelector('#cookie-accept-all');
const cookieRejectAll = document.querySelector('#cookie-reject-all');
const cookieAnalytics = document.querySelector('#cookie-analytics');
const cookieFab = document.querySelector('.cookie-fab');
const cookieForm = document.querySelector('#cookie-settings');
const cookieSettingsOpenTriggers = document.querySelectorAll('[data-open-cookie-settings]');
const COOKIE_STORAGE_KEY = 'wm_cookie_preferences_v1';
const CONSENT_MAX_AGE_DAYS = 180;

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = body.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const iconMoon = document.querySelector('.icon-moon');
const iconSun  = document.querySelector('.icon-sun');

function setTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  if (iconMoon) iconMoon.style.display = dark ? 'none'  : '';
  if (iconSun)  iconSun.style.display  = dark ? ''      : 'none';
  localStorage.setItem('wm_theme', dark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem('wm_theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setTheme(!isDark);
  });
}

// ── Kontakt-wizard ───────────────────────────────────────────────────────────
const wizard         = document.querySelector('#kontakt-wizard');
const kontaktForm    = document.querySelector('#kontakt-form');
const formSuccess    = document.querySelector('#form-success');
const formSuccessName = document.querySelector('#form-success-name');
const formSubmitBtn  = document.querySelector('#form-submit-btn');

if (wizard && kontaktForm) {
  const steps      = Array.from(wizard.querySelectorAll('.wizard-step'));
  const wiSteps    = Array.from(wizard.querySelectorAll('.wi-step'));
  const wiLines    = Array.from(wizard.querySelectorAll('.wi-line'));
  let currentStep  = 1; // 1-indexed

  // Update the indicator circles + connector lines
  function updateIndicator(step) {
    wiSteps.forEach((el, i) => {
      el.classList.remove('wi-step--active', 'wi-step--done');
      const circle = el.querySelector('.wi-step-circle');
      if (i + 1 < step) {
        el.classList.add('wi-step--done');
        circle.innerHTML =
          '<svg width="12" height="10" viewBox="0 0 12 10" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="1 5 4.5 8.5 11 1"/></svg>';
      } else {
        circle.textContent = String(i + 1);
        if (i + 1 === step) el.classList.add('wi-step--active');
      }
    });
    wiLines.forEach((el, i) => {
      el.classList.toggle('wi-line--done', i + 1 < step);
    });
  }

  // Show the requested step (1-indexed), hide others
  function goToStep(step, scroll) {
    steps.forEach((el, i) => {
      el.hidden = (i + 1 !== step);
    });
    currentStep = step;
    updateIndicator(step);
    if (scroll) {
      wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Validate step 2 fields (navn + mail required)
  function validateStep2() {
    let valid = true;

    const navnInput  = kontaktForm.querySelector('[name="navn"]');
    const mailInput  = kontaktForm.querySelector('[name="mail"]');

    [navnInput, mailInput].forEach((input) => {
      if (!input) return;
      let errEl = input.parentElement.querySelector('.field-error');
      if (!errEl) {
        errEl = document.createElement('span');
        errEl.className = 'field-error';
        errEl.setAttribute('aria-live', 'polite');
        input.parentElement.appendChild(errEl);
      }

      const isEmpty  = !input.value.trim();
      const isBadMail = input.type === 'email' && input.value.trim() && !input.checkValidity();

      if (isEmpty) {
        errEl.textContent = 'Dette felt er påkrævet.';
        errEl.style.display = 'block';
        input.classList.add('input-error');
        valid = false;
      } else if (isBadMail) {
        errEl.textContent = 'Indtast en gyldig e-mailadresse.';
        errEl.style.display = 'block';
        input.classList.add('input-error');
        valid = false;
      } else {
        errEl.style.display = 'none';
        input.classList.remove('input-error');
      }
    });

    return valid;
  }

  // Clear step 2 errors when user starts typing
  ['navn', 'mail'].forEach((fieldName) => {
    const input = kontaktForm.querySelector(`[name="${fieldName}"]`);
    if (!input) return;
    input.addEventListener('input', () => {
      const errEl = input.parentElement.querySelector('.field-error');
      if (errEl) errEl.style.display = 'none';
      input.classList.remove('input-error');
    });
  });

  // Next buttons
  wizard.querySelectorAll('.wizard-next-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (currentStep === 2 && !validateStep2()) return;
      if (currentStep < steps.length) goToStep(currentStep + 1, true);
    });
  });

  // Back buttons
  wizard.querySelectorAll('.wizard-back-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) goToStep(currentStep - 1, true);
    });
  });

  // Submit → Formspree
  kontaktForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const data = new FormData(kontaktForm);
    const navn = (data.get('navn') || '').toString().trim();

    if (formSubmitBtn) {
      formSubmitBtn.disabled    = true;
      formSubmitBtn.textContent = 'Sender…';
    }

    try {
      const response = await fetch(kontaktForm.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        // Hide wizard, show success
        wizard.querySelector('.wizard-indicator').hidden = true;
        kontaktForm.hidden = true;
        if (formSuccess) {
          formSuccess.hidden = false;
          if (formSuccessName) {
            formSuccessName.textContent = navn || 'dig';
          }
        }
      } else {
        if (formSubmitBtn) {
          formSubmitBtn.disabled    = false;
          formSubmitBtn.textContent = 'Send besked →';
        }
        alert('Noget gik galt. Prøv igen eller skriv direkte til andreaswestergaard@outlook.com');
      }
    } catch (err) {
      if (formSubmitBtn) {
        formSubmitBtn.disabled    = false;
        formSubmitBtn.textContent = 'Send besked →';
      }
      alert('Noget gik galt. Prøv igen eller skriv direkte til andreaswestergaard@outlook.com');
    }
  });

  // Initialise (no scroll on first load)
  goToStep(1, false);
}

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('menu-open');
    if (menuToggle) {
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

if (year) {
  year.textContent = new Date().getFullYear();
}

const portraitFallback =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 1000'>" +
      "<defs><linearGradient id='g' x1='0' x2='1'><stop stop-color='%23dce9ff'/><stop offset='1' stop-color='%23f6faff'/></linearGradient></defs>" +
      "<rect width='800' height='1000' fill='url(%23g)'/>" +
      "<circle cx='400' cy='360' r='170' fill='%23b8cff6'/>" +
      "<rect x='210' y='560' width='380' height='300' rx='180' fill='%23c8dbfa'/>" +
      "<text x='400' y='940' text-anchor='middle' font-family='Space Grotesk, sans-serif' font-size='38' fill='%2332578a'>Portræt indsættes her</text>" +
      "</svg>"
  );

document.querySelectorAll("img[src='assets/andreas-portrait.jpg']").forEach((img) => {
  img.addEventListener('error', () => {
    img.src = portraitFallback;
  });
});

function applyCookiePreferences(preferences) {
  if (!preferences) return;
  if (preferences.analytics) {
    body.dataset.analytics = 'granted';
    // Hook for loading analytics script after consent.
    window.dispatchEvent(new CustomEvent('wm:analytics-consent-granted'));
  } else {
    body.dataset.analytics = 'denied';
  }
}

function hideCookieBanner() {
  if (cookieBanner) {
    cookieBanner.hidden = true;
  }
  if (cookieFab) {
    cookieFab.hidden = false;
  }
}

function showCookieBanner() {
  if (cookieBanner) {
    cookieBanner.hidden = false;
  }
  if (cookieFab) {
    cookieFab.hidden = true;
  }
}

function saveCookiePreferences(preferences) {
  const value = {
    ...preferences,
    updatedAt: new Date().toISOString(),
    version: 1,
  };
  try {
    localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(value));
  } catch (error) {
    // If storage is blocked, consent only applies in current session.
  }
  applyCookiePreferences(value);
  hideCookieBanner();
}

function readCookiePreferences() {
  try {
    const stored = JSON.parse(localStorage.getItem(COOKIE_STORAGE_KEY));
    if (!stored || !stored.updatedAt) return null;
    const updatedAt = new Date(stored.updatedAt);
    const ageInDays = (Date.now() - updatedAt.getTime()) / (1000 * 60 * 60 * 24);
    if (ageInDays > CONSENT_MAX_AGE_DAYS) return null;
    return stored;
  } catch (error) {
    return null;
  }
}

function toggleCookieSettings(open) {
  if (!cookieSettings || !cookieOpenSettings) return;
  cookieSettings.hidden = !open;
  cookieOpenSettings.setAttribute('aria-expanded', String(open));
}

const storedPreferences = readCookiePreferences();
if (storedPreferences) {
  applyCookiePreferences(storedPreferences);
  hideCookieBanner();
  if (cookieAnalytics) {
    cookieAnalytics.checked = Boolean(storedPreferences.analytics);
  }
} else {
  showCookieBanner();
}

if (cookieOpenSettings) {
  cookieOpenSettings.addEventListener('click', () => {
    const isOpen = cookieOpenSettings.getAttribute('aria-expanded') === 'true';
    toggleCookieSettings(!isOpen);
  });
}

if (cookieAcceptAll) {
  cookieAcceptAll.addEventListener('click', () => {
    if (cookieAnalytics) cookieAnalytics.checked = true;
    saveCookiePreferences({ necessary: true, analytics: true });
    toggleCookieSettings(false);
  });
}

if (cookieRejectAll) {
  cookieRejectAll.addEventListener('click', () => {
    if (cookieAnalytics) cookieAnalytics.checked = false;
    saveCookiePreferences({ necessary: true, analytics: false });
    toggleCookieSettings(false);
  });
}

if (cookieForm) {
  cookieForm.addEventListener('submit', (event) => {
    event.preventDefault();
    saveCookiePreferences({
      necessary: true,
      analytics: Boolean(cookieAnalytics && cookieAnalytics.checked),
    });
    toggleCookieSettings(false);
  });
}

cookieSettingsOpenTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    showCookieBanner();
    toggleCookieSettings(true);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
